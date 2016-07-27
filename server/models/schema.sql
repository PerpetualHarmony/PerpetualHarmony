-- CREATE DATABASE dbeatup;
--
USE dbeatup;
--
-- -- ---
-- -- Globals
-- -- ---
--
SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET FOREIGN_KEY_CHECKS=0;
--
-- -- ---
-- -- Table 'eatups'
-- --
-- -- ---
--
DROP TABLE IF EXISTS `Eatup`;
--
CREATE TABLE `Eatup` (
  `id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
  `title` VARCHAR(30) NOT NULL,
  `startTime` TIME(20) NOT NULL DEFAULT 'NULL',
  `endTime` TIME(30) NOT NULL,
  `date` DATE NOT NULL,
  `description` VARCHAR(250) NULL DEFAULT NULL,
  `id_users` INTEGER NOT NULL DEFAULT NULL,
  `id_restaurants` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
--
-- -- ---
-- -- Table 'users'
-- --
-- -- ---
--
DROP TABLE IF EXISTS `User`;
--
CREATE TABLE `User` (
  `id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(30) NOT NULL DEFAULT 'NULL',
  `password` VARCHAR(30) NOT NULL,
  `email` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
--
-- -- ---
-- -- Table 'comments'
-- --
-- -- ---
--
DROP TABLE IF EXISTS `Comment`;
--
CREATE TABLE `Comment` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `comment` VARCHAR(100) NULL DEFAULT NULL,
  `id_users` INTEGER NOT NULL DEFAULT NULL,
  `id_eatups` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
--
-- -- ---
-- -- Table 'reservations'
-- --
-- -- ---
--
DROP TABLE IF EXISTS `Reservation`;
--
CREATE TABLE `Reservation` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_users` INTEGER NOT NULL DEFAULT NULL,
  `id_eatups` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
--
-- -- ---
-- -- Table 'restaurants'
-- --
-- -- ---
--
DROP TABLE IF EXISTS `Restaurant`;
--
CREATE TABLE `Restaurant` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(40) NULL DEFAULT NULL,
  `streetaddress` VARCHAR(40) NULL DEFAULT NULL,
  `city` VARCHAR(40) NULL DEFAULT NULL,
  `state` VARCHAR(15) NULL DEFAULT NULL,
  `zipcode` VARCHAR(10) NULL DEFAULT NULL,
  `latitude` VARCHAR(30) NULL DEFAULT NULL,
  `longitude` VARCHAR(30) NULL DEFAULT NULL,
  `phone` VARCHAR(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
--
-- -- ---
-- -- Foreign Keys
-- -- ---
--
ALTER TABLE `eatups` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `eatups` ADD FOREIGN KEY (id_restaurants) REFERENCES `restaurants` (`id`);
ALTER TABLE `comments` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `comments` ADD FOREIGN KEY (id_eatups) REFERENCES `eatups` (`id`);
ALTER TABLE `reservations` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `reservations` ADD FOREIGN KEY (id_eatups) REFERENCES `eatups` (`id`);
--
-- -- ---
-- -- Table Properties
-- -- ---
--
-- -- ALTER TABLE `eatups` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `comments` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `reservations` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `restaurants` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
--
-- -- ---
-- -- Test Data
-- -- ---
--
-- -- INSERT INTO `eatups` (`id`,`title`,`startTime`,`endTime`,`date`,`description`,`id_users`,`id_restaurants`) VALUES
-- -- ('','','','','','','','');
-- -- INSERT INTO `users` (`id`,`username`,`password`,`email`) VALUES
-- -- ('','','','');
-- -- INSERT INTO `comments` (`id`,`comment`,`datetime`,`id_users`,`id_eatups`) VALUES
-- -- ('','','','','');
-- -- INSERT INTO `reservations` (`id`,`id_users`,`id_eatups`) VALUES
-- -- ('','','');
-- -- INSERT INTO `restaurants` (`id`,`name`,`streetaddress`,`city`,`state`,`zipcode`,`latitude`,`longitude`,`phone`) VALUES
-- -- ('','','','','','','','','');
--
--
-- -- CREATE TABLE users (
-- --   id INT NOT NULL AUTO_INCREMENT,
-- --   username VARCHAR(30) UNIQUE NOT NULL,
-- --   password VARCHAR(30) NOT NULL,
-- --   PRIMARY KEY (id)
-- -- );
-- --
-- -- CREATE TABLE sessions (
-- --   id INT NOT NULL AUTO_INCREMENT,
-- --   sessionname VARCHAR(30) NOT NULL,
-- --   latitude INT NOT NULL,
-- --   longitude INT NOT NULL,
-- --   userid INT,
-- --   FOREIGN KEY (userid) REFERENCES users(id),
-- --   PRIMARY KEY (id)
-- -- );
-- --
-- -- CREATE TABLE attendees (
-- --   id INT NOT NULL AUTO_INCREMENT,
-- --   sessionid INT NOT NULL,
-- --   userid INT NOT NULL,
-- --   FOREIGN KEY (sessionid) REFERENCES sessions(id),
-- --   FOREIGN KEY (userid) REFERENCES users(id)
-- -- );
