<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220713133903 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE booking ADD exhibitor_id INT NOT NULL');
        $this->addSql('ALTER TABLE booking ADD CONSTRAINT FK_E00CEDDE20D038B1 FOREIGN KEY (exhibitor_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_E00CEDDE20D038B1 ON booking (exhibitor_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE booking DROP FOREIGN KEY FK_E00CEDDE20D038B1');
        $this->addSql('DROP INDEX IDX_E00CEDDE20D038B1 ON booking');
        $this->addSql('ALTER TABLE booking DROP exhibitor_id');
    }
}
