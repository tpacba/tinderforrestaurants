CREATE DATABASE restaurant_select;
USE restaurant_select;

CREATE TABLE `restaurants` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `type` VARCHAR( 255 ) NOT NULL,
  'location' INT(10) NOT NULL,
  'rating' INT(10) NOT NULL,
  'reviews' VARCHAR(100) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);

CREATE TABLE `login` (
  `userid` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `username` VARCHAR( 255) NOT NULL,
  `password` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `userid` ) 
);

CREATE TABLE `matches` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `author` VARCHAR( 255) NOT NULL,
  `body` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);