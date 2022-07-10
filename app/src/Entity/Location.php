<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Embeddable]
class Location
{
    #[ORM\Column(type: 'string', length: 180, nullable: true)]
    private $alley;

    #[ORM\Column(type: 'string', length: 180, nullable: true)]
    private $place;

    public function getAlley(): ?string
    {
        return $this->alley;
    }

    public function setAlley(?string $alley): self
    {
        $this->alley = $alley;

        return $this;
    }

    public function getPlace(): ?string
    {
        return $this->place;
    }

    public function setPlace(?string $place): self
    {
        $this->place = $place;

        return $this;
    }
}
