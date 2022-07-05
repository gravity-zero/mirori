<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use App\Repository\EventRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Symfony\Component\Security\Core\Exception\AuthenticationException;

#[Route('/api/user')]
class UserController extends AbstractController
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

    #[Route('/{id}', name: 'user_show', methods: ['GET'])]
    public function show(User $user, EventRepository $eventRepository, $id): Response
    {
        return new JsonResponse(
            $this->serializer->serialize($user, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
         }]
        ), 201, [], true );
    }

    #[Route('/', name: 'user_index', methods: ['GET'])]
    public function index(UserRepository $userRepository): Response
    {
        // A factoriser
        return new JsonResponse(
            $this->serializer->serialize($userRepository->findAll(), 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
         }]
        ), 201, [], true );
    }

    #[Route('/search/exposant', name: 'user_get_exposant', methods: ['GET'])]
    public function getAllExposant(UserRepository $userRepository): Response
    {
        // A factoriser
        return new JsonResponse(
            $this->serializer->serialize($userRepository->findByRole('EXPOSANT'), 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
         }]
        ), 201, [], true );
    }

    #[Route('/search/visitor', name: 'user_get_visitor', methods: ['GET'])]
    public function getAllVisitors(UserRepository $userRepository): Response
    {
        // A factoriser
        return new JsonResponse(
            $this->serializer->serialize($userRepository->findByRole('VISITOR'), 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
         }]
        ), 201, [], true );
    }

    #[Route('/search/oraganisator', name: 'user_get_organisator', methods: ['GET'])]
    public function getAllOrganisator(UserRepository $userRepository): Response
    {
        // A factoriser
        return new JsonResponse(
            $this->serializer->serialize($userRepository->findByRole('ORGANISATEUR'), 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
         }]
        ), 201, [], true );
    }

    #[Route('/new/{type}', name: 'user_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, ValidatorInterface $validator, UserPasswordEncoderInterface $passwordEncoder, $type = ''): Response
    {
        $user = new User();
        $parameters = json_decode($request->getContent(), true);

        $user->setEmail($parameters['email']);
        $user->setPhone($parameters['phone']);
        $user->setCompany($parameters['company']);
        $user->setPassword(
            $passwordEncoder->encodePassword(
                $user,
                $parameters['password']
            )
        );

        $phoneError = $validator->validateProperty($user, 'phone');
        $emailError = $validator->validateProperty($user, 'email');
        $companyError = $validator->validateProperty($user, 'company');
        $passwordError = $validator->validateProperty($user, 'password');
        $formErrors = [];

        if(count($phoneError) > 0) {
            $formErrors['phoneError'] = $phoneError[0]->getMessage();
        }
        if(count($emailError) > 0) {
            $formErrors['emailError'] = $emailError[0]->getMessage();
        }
        if(count($passwordError) > 0) {
            $formErrors['passwordError'] = $passwordError[0]->getMessage();
        }
        if(count($companyError) > 0) {
            $formErrors['companyError'] = $companyError[0]->getMessage();
        }
        if($formErrors) {
            return new JsonResponse($formErrors);
        }

        if($type == 'exposant'){
            $user->setRoles(['ROLE_EXPOSANT']);
        } elseif ($type == 'organisateur'){
            $user->setRoles(['ROLE_ORGANISATEUR']);
        } elseif ($type == 'visitor'){
            $user->setRoles(['ROLE_VISITOR']);
        }

    
        $entityManager->persist($user);
        $entityManager->flush();

        return new JsonResponse([
            'success_message' => 'Thank you for registering'
        ]);
    }

    #[Route('/{id}/event/new/{event}', name: 'user_new_event', methods: ['GET', 'POST'])]
    public function newEvent(Request $request, EntityManagerInterface $entityManager, UserPasswordEncoderInterface $passwordEncoder, $event, $id, UserRepository $userRepository, EventRepository $eventRepository): Response
    {

        $user = $userRepository->findOneBy(['id' => $id]);
        $event = $eventRepository->findOneBy(['id' => $event]);
       
        $entityManager->persist($user);
        $entityManager->flush();

        return new JsonResponse([
            'success_message' => 'new event setted to the user'
        ]);
    }

    #[Route('/email/{email}', name: 'user_id_get_by_email', methods: ['POST'])]
    public function getUserIdByEmail(User $user, Request $request, EventRepository $eventRepository, string $email, UserRepository $userRepository): Response
    {
        if($this->params->get('api_key') != $request->get('api_key')){
            return $this->json([
                'message' => 'error! invalid api_key',
            ]);
        }

        $user = $userRepository->findOneBy(['email' => $email]);

        return new JsonResponse(array('id' => $user->getId()));
    }

    #[Route('/get/email/{email}', name: 'user_get_by_email', methods: ['POST'])]
    public function getUserByEmail(User $user, Request $request, EventRepository $eventRepository, string $email, UserRepository $userRepository): Response
    {
        return new JsonResponse(
            $this->serializer->serialize($userRepository->findOneBy(['email' => $email]), 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
         }]
        ), 201, [], true );

    }

    #[Route('/{id}/edit', name: 'user_edit', methods: ['GET', 'POST'])]
    public function edit($id, Request $request, User $user, EntityManagerInterface $entityManager, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $user = $entityManager->getRepository(User::class)->find($id);

        $parameters = json_decode($request->getContent(), true);

        $user->setEmail($parameters['email']);
        $user->setPhone($parameters['phone']);
        $user->setCompany($parameters['company']);
        $user->setPassword(
            $passwordEncoder->encodePassword(
                $user,
                $parameters['password']
            )
        );

        $entityManager->persist($user);
        $entityManager->flush();

        return new JsonResponse([
            'success_message' => 'Edit success'
        ]);
    }
}
