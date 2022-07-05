<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Symfony\Component\Security\Core\Exception\AuthenticationException;


class AuthController extends AbstractController
{
    private SerializerInterface $serializer;

    public function __construct(
        EntityManagerInterface $em,
        SerializerInterface $serializer,
        ContainerBagInterface $params
    ) {
        $this->em = $em;
        $this->serializer = $serializer;
        $this->params = $params;
    }

    #[Route('/visitor/auth/{jwt}', name: 'login_check', methods: ['GET'])]
    public function login_check(UserRepository $userRepository, $jwt): Response
    {
        try {
            $credentials = str_replace('Bearer ', '', $jwt);
            $this->params->get('jwt_secret');
            $jwt = (array) JWT::decode($credentials, new Key($this->params->get('jwt_secret'), 'HS256'));
            return new JsonResponse(
                $this->serializer->serialize($userRepository->findOneBy(['email' => $jwt['user']]), 'json', [
                'circular_reference_handler' => function ($object) {
                    return $object->getId();
             }]
            ), 201, [], true );
        }catch (\Exception $exception) {
                throw new AuthenticationException($exception->getMessage());
        }
    }
   
}
