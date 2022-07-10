<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Endroid\QrCode\Builder\Builder;
use Scheb\TwoFactorBundle\Security\TwoFactor\Provider\Totp\TotpAuthenticatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\User;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Firebase\JWT\JWT;

#[IsGranted('ROLE_USER')]
class SecurityController extends AbstractController
{

    private $params;

    public function __construct(ContainerBagInterface $params)
    {
        $this->params = $params;
    }


     /**
     * @Route(name="api_login", path="/api/login_check")
     * @return JsonResponse
     */
    public function api_login(): JsonResponse
    {
        $user = $this->getUser();

        return new JsonResponse([
            'email' => $user->getEmail(),
            'roles' => $user->getRoles(),
        ]);
    }

     /**
     * @Route("/auth/login", name="login", methods={"POST"})
     */
    public function loginJwt(Request $request, UserRepository $userRepository)
    {
        
        if($this->params->get('api_key') != $request->get('api_key')){
            return $this->json([
                'message' => 'error! invalid api_key',
            ]);
        }
        
        if($request->get('id')){
            $user = $userRepository->findOneBy([
                'id'=>$request->get('id'),
            ]);
        } else {
            $user = $userRepository->findOneBy([
                'email'=>$request->get('email'),
            ]);
        }

        $payload = [
            "user" => $user->getEmail(),
            "roles" => $user->getRoles(),
            "exp"  => (new \DateTime())->modify("+5 hours")->getTimestamp(),
        ];

        $jwt = JWT::encode($payload, $this->getParameter('jwt_secret'), 'HS256');
        return $this->json([
            'message' => 'success!',
            'token' => sprintf('%s', $jwt),
        ]);
    }

    
    /**
     * @Route("/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    /**
     * @Route("/authentication/2fa/qr-code", name="app_qr_code")
     */
    public function displayGoogleAuthenticatorQrCode(TotpAuthenticatorInterface $totpAuthenticator)
    {
        $qrCodeContent = $totpAuthenticator->getQRContent($this->getUser());
        $result = Builder::create()
            ->data($qrCodeContent)
            ->build();

        return new Response($result->getString(), 200, ['Content-Type' => 'image/png']);
    }
}
