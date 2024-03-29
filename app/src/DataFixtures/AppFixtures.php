<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Location;
use App\Entity\Questions;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Event;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use DateTime;
use Symfony\Component\Console\Question\Question;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class AppFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher, UserPasswordEncoderInterface $passwordEncoder){
        $this->hasher = $hasher;
        $this->passwordEncoder = $passwordEncoder;

    }

    public function load(ObjectManager $manager)
    {
        $this->addUsersAndEvents($manager);

    }

    public function addUsersAndEvents(ObjectManager $manager)
    {
        $event = new Event();
        $event->setName('eventName');
        $event->setAddress('34 rue hetic');
        $event->setStartDate(new \DateTime());
        $event->setEndDate(new \DateTime());
        $event->setIsActive(true);
        $user = new User();
        $user->setCompany('society');
        $user->setPhone('0656789654');
        $user->setFirstname('orga');
        $user->setLastname('nisateur');
        $user->setPassword($this->passwordEncoder->encodePassword($user, "123456"));
        $user->setEmail('haha@outlook.fr');
        $user->setRoles(['ROLE_ORGANISATEUR']);
        $user->setEvent($event);
        $manager->persist($user);
        $manager->persist($event);

        $user = new User();
        $user->setCompany('society');
        $user->setFirstname('admin');
        $user->setLastname('admin');
        $user->setPhone('0652789654');
        $user->setPassword($this->passwordEncoder->encodePassword($user, "123456"));
        $user->setEmail('admin@admin.fr');
        $user->setRoles(['ROLE_ADMIN']);
        $user->setEvent($event);
        $user->setDescription('descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription');
        $manager->persist($user);
        $manager->persist($event);

        for ($i = 0; $i < 20; $i++) {
            $user = new User();
            $user->setCompany('society_'.$i);
            $user->setFirstname('Hanalaboloss');
            $user->setLastname('ismaleplusbeau');
            $user->setPhone($i.'0654789654');
            $user->setPassword($this->passwordEncoder->encodePassword($user, "123456"));
            $user->setEmail($i.'hihi@woot.fr');
            $user->setRoles(['ROLE_EXPOSANT']);
            $user->setDescription('descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription');
            $user->setCategory('agriculture');
            $user->setPicture('https://previews.123rf.com/images/andreykuzmin/andreykuzmin1204/andreykuzmin120400114/13323229-b%C3%A9b%C3%A9-chat-d-un-mois.jpg');
            $user->setEvent($event);
            $user->getLocation()->setAlley($i);
            $user->getLocation()->setPlace($i+20);
            $manager->persist($user);
        }

        for ($i = 50; $i < 70; $i++) {
            $user = new User();
            $user->setCompany('society_'.$i);
            $user->setPhone($i.'0654789654');
            $user->setPassword($this->passwordEncoder->encodePassword($user, "123456"));
            $user->setEmail($i.'hoho@waat.fr');
            $user->setRoles(['ROLE_VISITOR']);
            $user->setCategory('agriculture');
            $user->setPicture('https://previews.123rf.com/images/andreykuzmin/andreykuzmin1204/andreykuzmin120400114/13323229-b%C3%A9b%C3%A9-chat-d-un-mois.jpg');
            $user->setEvent($event);
            $manager->persist($user);
        }

        $manager->flush();
    }

}