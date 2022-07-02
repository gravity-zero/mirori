<?php

namespace App\Controller;

use App\Entity\Visitor;
use App\Form\VisitorType;
use App\Repository\EventRepository;
use App\Repository\VisitorRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;



#[Route('/api/visitor')]
class VisitorController extends AbstractController
{
    private SerializerInterface $serializer;

    public function __construct(
        EntityManagerInterface $em,
        SerializerInterface $serializer,
        ContainerBagInterface $params,
    ) {
        $this->em = $em;
        $this->serializer = $serializer;
        $this->params = $params;
    }
    
    #[Route('/', name: 'visitor_index', methods: ['GET'])]
    public function index(VisitorRepository $visitorRepository): Response
    {
        return new JsonResponse(
            $this->serializer->serialize($visitorRepository->findAll(), 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
         }]
        ), 201, [], true );
    }

    #[Route('/new', name: 'visitor_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $visitor = new Visitor();
        $parameters = json_decode($request->getContent(), true);

        $visitor->setFirstname($parameters['firstname']);
        $visitor->setLastname($parameters['lastname']);
        $visitor->setEmail($parameters['email']);
        $visitor->setToken($parameters['token']);
        $visitor->setProfession($parameters['profession']);

        $entityManager->persist($visitor);
        $entityManager->flush();

        return new JsonResponse([
            'success_message' => 'Thank you for registering'
        ]);
    }

    #[Route('/{id}', name: 'visitor_show', methods: ['GET'])]
    public function show(Visitor $visitor): Response
    {
        return new JsonResponse(
            $this->serializer->serialize($visitor, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
         }]
        ), 201, [], true );
    }

    #[Route('/{id}/edit', name: 'visitor_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Visitor $visitor, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(VisitorType::class, $visitor);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('visitor_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('visitor/edit.html.twig', [
            'visitor' => $visitor,
            'form' => $form,
        ]);
    }

    #[Route('/email/{email}', name: 'visitor_get_by_email', methods: ['POST'])]
    public function getVisitorByEmail(Visitor $visitor, Request $request, EventRepository $eventRepository, string $email, VisitorRepository $visitorRepository): Response
    {
        if($this->params->get('api_key') != $request->get('api_key')){
            return $this->json([
                'message' => 'error! invalid api_key',
            ]);
        }

        //TODO Ajouter un contrôle pour vérifier qu'on a bien un email et une gestion d'erreur au cas où il ne trouve pas l'email ?

        $user = $visitorRepository->findOneBy(['email' => $email]);

        return new JsonResponse(array('id' => $user->getId()));
    }
}
