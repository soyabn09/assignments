-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 08, 2018 at 11:07 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jamber`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `shout_text` varchar(255) NOT NULL,
  `shout_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `shout_user` varchar(54) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`shout_text`, `shout_date`, `shout_user`) VALUES
('Peace Brothers', '2018-10-08 20:48:18', 'Tony'),
('And with you', '2018-10-08 20:51:59', 'Tim'),
('The legs of a cow', '2018-10-08 20:52:28', 'Shaun'),
('The legs of a cow', '2018-10-08 20:53:07', 'Shaun'),
('Tom is guilty', '2018-10-08 20:56:49', 'Mr Tim'),
('Large Double Milk Shake please', '2018-10-08 21:05:57', 'Orange Peel');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
