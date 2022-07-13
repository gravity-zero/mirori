<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\Booking;
use App\Form\EventType;
use App\Repository\EventRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

#[Route('/api/booking')]
class BookingController extends AbstractController
{

    private SerializerInterface $serializer;

    public function __construct(
        EntityManagerInterface $em,
        SerializerInterface $serializer,
    ) {
        $this->em = $em;
        $this->serializer = $serializer;
    }

    #[Route('/new', name: 'event_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, UserRepository $userRepository, EventRepository $eventRepository): Response
    {
        $booking = new Booking();
        $parameters = json_decode($request->getContent(), true);

        $user = $userRepository->findOneBy(['id' => $parameters['user']]);
        $event = $eventRepository->findOneBy(['id' => $parameters['event']]);

        $booking->setTitle($parameters['title']);
        $booking->setEvent($event);
        $booking->setUsers($user);
        $booking->setStartDate($parameters['startDate']);
        $booking->setEndDate($parameters['endDate']);

        $entityManager->persist($booking);
        $entityManager->flush();

        return new JsonResponse([
            'success_message' => 'Agenda created'
        ]);
   
    }
}
