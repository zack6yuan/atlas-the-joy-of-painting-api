CREATE DATABASE IF NOT EXISTS ETL_JOY;

USE ETL_JOY;

CREATE TABLE `broadcasts`(
    `painting_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `painting_title` INT NOT NULL,
    `season` BIGINT NOT NULL,
    `episode` INT NOT NULL,
    `img_src` VARCHAR(255) NOT NULL,
    `youtube_src` VARCHAR(255) NOT NULL
);
CREATE TABLE `subject_matter`(
    `episode` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `attribute` INT NOT NULL,
    PRIMARY KEY(`episode`)
);
CREATE TABLE `colors`(
    `color_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `color_name` VARCHAR(255) NOT NULL,
    `color_hex` BIGINT NOT NULL
);

ALTER TABLE
    `subject_matter` ADD CONSTRAINT `subject_matter_episode_foreign` FOREIGN KEY(`episode`) REFERENCES `broadcasts`(`painting_id`);
ALTER TABLE
    `broadcasts` ADD CONSTRAINT `broadcasts_painting_id_foreign` FOREIGN KEY(`painting_id`) REFERENCES `colors`(`color_id`);