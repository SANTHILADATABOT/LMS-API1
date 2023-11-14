-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 11, 2023 at 07:08 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `glms`
--

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `countryId` int(100) NOT NULL,
  `countryUUID` char(36) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `countryCode` varchar(255) NOT NULL,
  `countryName` varchar(255) NOT NULL,
  `isEnable` tinyint(1) DEFAULT NULL,
  `dialCode` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`countryId`, `countryUUID`, `countryCode`, `countryName`, `isEnable`, `dialCode`, `createdAt`, `updatedAt`) VALUES
(1, '27c66275-e9da-45c8-9c72-142ab11b168e', 'IND', 'India', 1, '+91', '2023-11-06 12:19:38', '2023-11-06 12:19:38');

-- --------------------------------------------------------

--
-- Table structure for table `lmscompany`
--

CREATE TABLE `lmscompany` (
  `cpId` int(100) NOT NULL,
  `cpUUID` char(36) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `cpCompanyName` varchar(255) NOT NULL,
  `cpAdminName` varchar(255) NOT NULL,
  `cpAdminMail` varchar(255) NOT NULL,
  `cpIndustry` varchar(255) NOT NULL,
  `cpCountry` varchar(255) NOT NULL,
  `cpCreatedUserId` int(11) NOT NULL,
  `cpEditedUserId` int(11) DEFAULT NULL,
  `cpCreatedDate` datetime NOT NULL,
  `cpEditedDate` datetime NOT NULL,
  `cpStatus` tinyint(1) DEFAULT NULL,
  `cpDeleteStatus` tinyint(1) DEFAULT NULL,
  `cpIpAddress` varchar(255) NOT NULL,
  `cpDeviceType` varchar(255) NOT NULL,
  `cpUserAgent` varchar(255) NOT NULL,
  `cpTimeStamp` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `lmscompany`
--

INSERT INTO `lmscompany` (`cpId`, `cpUUID`, `cpCompanyName`, `cpAdminName`, `cpAdminMail`, `cpIndustry`, `cpCountry`, `cpCreatedUserId`, `cpEditedUserId`, `cpCreatedDate`, `cpEditedDate`, `cpStatus`, `cpDeleteStatus`, `cpIpAddress`, `cpDeviceType`, `cpUserAgent`, `cpTimeStamp`, `createdAt`, `updatedAt`) VALUES
(1, '27c66275-e9da-45c8-9c72-142ab11b168e', 'advance learning', 'amirkhan', 'amir@al.in', 'textails', '1', 1, 0, '2023-11-08 05:52:09', '2023-11-08 05:52:09', 0, 0, '', '', '', '2023-11-08 04:54:58', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `lmscreators`
--

CREATE TABLE `lmscreators` (
  `ctId` int(100) NOT NULL,
  `ctUUID` char(36) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `ctName` varchar(255) NOT NULL,
  `ctMail` varchar(255) NOT NULL,
  `ctDesignation` varchar(255) NOT NULL,
  `ctAge` int(100) NOT NULL,
  `ctGender` enum('Male','Female','Others') NOT NULL DEFAULT 'Male',
  `ctStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `ctCreatedDate` datetime NOT NULL,
  `ctEditedDate` datetime DEFAULT NULL,
  `ctCreateAdminDate` datetime DEFAULT NULL,
  `ctEditAdminDate` datetime DEFAULT NULL,
  `ctDeleteStatus` enum('NO','YES') NOT NULL DEFAULT 'NO',
  `ctIpAdderss` varchar(100) DEFAULT NULL,
  `ctDeviceType` varchar(100) DEFAULT NULL,
  `ctUserAgent` varchar(100) NOT NULL,
  `ctTimeStamp` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `companyId` int(100) DEFAULT NULL,
  `countryId` int(100) DEFAULT NULL,
  `ctCreatedUserId` char(36) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `ctEditedUserId` char(36) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `ctCreateAdminUserId` char(36) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `ctEditAdminUserId` char(36) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `lmscreators`
--

INSERT INTO `lmscreators` (`ctId`, `ctUUID`, `ctName`, `ctMail`, `ctDesignation`, `ctAge`, `ctGender`, `ctStatus`, `ctCreatedDate`, `ctEditedDate`, `ctCreateAdminDate`, `ctEditAdminDate`, `ctDeleteStatus`, `ctIpAdderss`, `ctDeviceType`, `ctUserAgent`, `ctTimeStamp`, `createdAt`, `updatedAt`, `companyId`, `countryId`, `ctCreatedUserId`, `ctEditedUserId`, `ctCreateAdminUserId`, `ctEditAdminUserId`) VALUES
(1, 'd386ee03-ac11-42f8-999c-ba4484bfb28f', 'GIRIRAGHAVA', 'giriraghava1970@santhila.co', 'Tech Manager', 52, 'Male', 'Active', '2023-11-10 13:22:46', NULL, NULL, NULL, '', NULL, NULL, 'PostmanRuntime/7.35.0', '2023-11-10 13:22:46', '2023-11-10 13:22:46', '2023-11-10 13:22:46', 1, 1, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `lmsplan`
--

CREATE TABLE `lmsplan` (
  `plId` int(11) NOT NULL,
  `plPlan` varchar(100) NOT NULL,
  `plPlanType` enum('Days','Month','Year') NOT NULL,
  `plValidityDays` bigint(20) NOT NULL,
  `plPrice` int(100) NOT NULL,
  `plCreatedUserId` bigint(20) NOT NULL,
  `plEidtedUserId` bigint(20) DEFAULT NULL,
  `plCreatedDate` datetime NOT NULL,
  `plEidtedDate` datetime DEFAULT NULL,
  `plStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `plDeleteStatus` enum('NO','YES') NOT NULL DEFAULT 'NO',
  `plIpAdderss` varchar(100) NOT NULL,
  `plDeviceType` varchar(100) NOT NULL,
  `plUserAgent` varchar(100) NOT NULL,
  `plTimeStamp` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` char(36) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `UUID` char(36) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `UUID`, `first_name`, `last_name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
('1', '27c66275-e9da-45c8-9c72-142ab11b168e', 'GIRISH', 'SHANKAR', 'giri@santhila.co', '$2y$10$N9NQ0/x4BwItEArqEIKg2uzB6C/7D3.SNF9uPDVm34vxHtGAatpDu', '2023-11-09 16:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`countryId`),
  ADD UNIQUE KEY `countryName` (`countryName`),
  ADD UNIQUE KEY `countryName_2` (`countryName`),
  ADD UNIQUE KEY `countryName_3` (`countryName`),
  ADD UNIQUE KEY `countryName_4` (`countryName`),
  ADD UNIQUE KEY `countryName_5` (`countryName`),
  ADD UNIQUE KEY `countryName_6` (`countryName`),
  ADD UNIQUE KEY `countryName_7` (`countryName`),
  ADD UNIQUE KEY `countryName_8` (`countryName`),
  ADD UNIQUE KEY `countryName_9` (`countryName`),
  ADD UNIQUE KEY `countryName_10` (`countryName`),
  ADD UNIQUE KEY `countryName_11` (`countryName`),
  ADD UNIQUE KEY `countryName_12` (`countryName`),
  ADD UNIQUE KEY `countryName_13` (`countryName`),
  ADD UNIQUE KEY `countryName_14` (`countryName`),
  ADD UNIQUE KEY `countryName_15` (`countryName`),
  ADD UNIQUE KEY `countryName_16` (`countryName`),
  ADD UNIQUE KEY `countryName_17` (`countryName`),
  ADD UNIQUE KEY `countryName_18` (`countryName`),
  ADD UNIQUE KEY `countryName_19` (`countryName`),
  ADD UNIQUE KEY `countryName_20` (`countryName`),
  ADD UNIQUE KEY `countryName_21` (`countryName`),
  ADD UNIQUE KEY `countryName_22` (`countryName`),
  ADD UNIQUE KEY `countryName_23` (`countryName`),
  ADD UNIQUE KEY `countryName_24` (`countryName`),
  ADD UNIQUE KEY `countryName_25` (`countryName`),
  ADD UNIQUE KEY `countryName_26` (`countryName`),
  ADD UNIQUE KEY `countryName_27` (`countryName`),
  ADD UNIQUE KEY `countryName_28` (`countryName`),
  ADD UNIQUE KEY `countryName_29` (`countryName`),
  ADD UNIQUE KEY `countryName_30` (`countryName`),
  ADD UNIQUE KEY `countryName_31` (`countryName`),
  ADD UNIQUE KEY `countryName_32` (`countryName`),
  ADD UNIQUE KEY `countryName_33` (`countryName`),
  ADD UNIQUE KEY `countryName_34` (`countryName`),
  ADD UNIQUE KEY `countryName_35` (`countryName`),
  ADD UNIQUE KEY `countryName_36` (`countryName`),
  ADD UNIQUE KEY `countryName_37` (`countryName`),
  ADD UNIQUE KEY `countryName_38` (`countryName`),
  ADD UNIQUE KEY `countryName_39` (`countryName`),
  ADD UNIQUE KEY `countryName_40` (`countryName`),
  ADD UNIQUE KEY `countryName_41` (`countryName`),
  ADD UNIQUE KEY `countryName_42` (`countryName`),
  ADD UNIQUE KEY `countryName_43` (`countryName`),
  ADD UNIQUE KEY `countryName_44` (`countryName`),
  ADD UNIQUE KEY `countryName_45` (`countryName`),
  ADD UNIQUE KEY `countryName_46` (`countryName`),
  ADD UNIQUE KEY `countryName_47` (`countryName`),
  ADD UNIQUE KEY `countryName_48` (`countryName`),
  ADD UNIQUE KEY `countryName_49` (`countryName`),
  ADD UNIQUE KEY `countryName_50` (`countryName`),
  ADD UNIQUE KEY `countryName_51` (`countryName`),
  ADD UNIQUE KEY `countryName_52` (`countryName`),
  ADD UNIQUE KEY `countryName_53` (`countryName`),
  ADD UNIQUE KEY `countryName_54` (`countryName`),
  ADD UNIQUE KEY `countryName_55` (`countryName`),
  ADD UNIQUE KEY `countryName_56` (`countryName`),
  ADD UNIQUE KEY `countryName_57` (`countryName`),
  ADD UNIQUE KEY `countryName_58` (`countryName`),
  ADD UNIQUE KEY `countryName_59` (`countryName`),
  ADD UNIQUE KEY `countryName_60` (`countryName`),
  ADD UNIQUE KEY `countryName_61` (`countryName`),
  ADD UNIQUE KEY `countryName_62` (`countryName`),
  ADD UNIQUE KEY `countryName_63` (`countryName`);

--
-- Indexes for table `lmscompany`
--
ALTER TABLE `lmscompany`
  ADD PRIMARY KEY (`cpId`),
  ADD UNIQUE KEY `cpUserAgent` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_2` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_3` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_4` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_5` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_6` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_7` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_8` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_9` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_10` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_11` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_12` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_13` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_14` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_15` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_16` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_17` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_18` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_19` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_20` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_21` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_22` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_23` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_24` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_25` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_26` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_27` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_28` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_29` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_30` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_31` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_32` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_33` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_34` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_35` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_36` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_37` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_38` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_39` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_40` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_41` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_42` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_43` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_44` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_45` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_46` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_47` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_48` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_49` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_50` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_51` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_52` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_53` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_54` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_55` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_56` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_57` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_58` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_59` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_60` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_61` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_62` (`cpUserAgent`),
  ADD UNIQUE KEY `cpUserAgent_63` (`cpUserAgent`);

--
-- Indexes for table `lmscreators`
--
ALTER TABLE `lmscreators`
  ADD PRIMARY KEY (`ctId`),
  ADD KEY `lmscreators_ibfk_161_idx` (`countryId`),
  ADD KEY `companyId` (`companyId`),
  ADD KEY `ctCreatedUserId` (`ctCreatedUserId`),
  ADD KEY `ctEditedUserId` (`ctEditedUserId`),
  ADD KEY `ctCreateAdminUserId` (`ctCreateAdminUserId`),
  ADD KEY `ctEditAdminUserId` (`ctEditAdminUserId`);

--
-- Indexes for table `lmsplan`
--
ALTER TABLE `lmsplan`
  ADD PRIMARY KEY (`plId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `password` (`password`),
  ADD UNIQUE KEY `password_2` (`password`),
  ADD UNIQUE KEY `password_3` (`password`),
  ADD UNIQUE KEY `password_4` (`password`),
  ADD UNIQUE KEY `password_5` (`password`),
  ADD UNIQUE KEY `password_6` (`password`),
  ADD UNIQUE KEY `password_7` (`password`),
  ADD UNIQUE KEY `password_8` (`password`),
  ADD UNIQUE KEY `password_9` (`password`),
  ADD UNIQUE KEY `password_10` (`password`),
  ADD UNIQUE KEY `password_11` (`password`),
  ADD UNIQUE KEY `password_12` (`password`),
  ADD UNIQUE KEY `password_13` (`password`),
  ADD UNIQUE KEY `password_14` (`password`),
  ADD UNIQUE KEY `password_15` (`password`),
  ADD UNIQUE KEY `password_16` (`password`),
  ADD UNIQUE KEY `password_17` (`password`),
  ADD UNIQUE KEY `password_18` (`password`),
  ADD UNIQUE KEY `password_19` (`password`),
  ADD UNIQUE KEY `password_20` (`password`),
  ADD UNIQUE KEY `password_21` (`password`),
  ADD UNIQUE KEY `password_22` (`password`),
  ADD UNIQUE KEY `password_23` (`password`),
  ADD UNIQUE KEY `password_24` (`password`),
  ADD UNIQUE KEY `password_25` (`password`),
  ADD UNIQUE KEY `password_26` (`password`),
  ADD UNIQUE KEY `password_27` (`password`),
  ADD UNIQUE KEY `password_28` (`password`),
  ADD UNIQUE KEY `password_29` (`password`),
  ADD UNIQUE KEY `password_30` (`password`),
  ADD UNIQUE KEY `password_31` (`password`),
  ADD UNIQUE KEY `password_32` (`password`),
  ADD UNIQUE KEY `password_33` (`password`),
  ADD UNIQUE KEY `password_34` (`password`),
  ADD UNIQUE KEY `password_35` (`password`),
  ADD UNIQUE KEY `password_36` (`password`),
  ADD UNIQUE KEY `password_37` (`password`),
  ADD UNIQUE KEY `password_38` (`password`),
  ADD UNIQUE KEY `password_39` (`password`),
  ADD UNIQUE KEY `password_40` (`password`),
  ADD UNIQUE KEY `password_41` (`password`),
  ADD UNIQUE KEY `password_42` (`password`),
  ADD UNIQUE KEY `password_43` (`password`),
  ADD UNIQUE KEY `password_44` (`password`),
  ADD UNIQUE KEY `password_45` (`password`),
  ADD UNIQUE KEY `password_46` (`password`),
  ADD UNIQUE KEY `password_47` (`password`),
  ADD UNIQUE KEY `password_48` (`password`),
  ADD UNIQUE KEY `password_49` (`password`),
  ADD UNIQUE KEY `password_50` (`password`),
  ADD UNIQUE KEY `password_51` (`password`),
  ADD UNIQUE KEY `password_52` (`password`),
  ADD UNIQUE KEY `password_53` (`password`),
  ADD UNIQUE KEY `password_54` (`password`),
  ADD UNIQUE KEY `password_55` (`password`),
  ADD UNIQUE KEY `password_56` (`password`),
  ADD UNIQUE KEY `password_57` (`password`),
  ADD UNIQUE KEY `password_58` (`password`),
  ADD UNIQUE KEY `password_59` (`password`),
  ADD UNIQUE KEY `password_60` (`password`),
  ADD UNIQUE KEY `password_61` (`password`),
  ADD UNIQUE KEY `password_62` (`password`),
  ADD UNIQUE KEY `password_63` (`password`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lmscompany`
--
ALTER TABLE `lmscompany`
  MODIFY `cpId` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `lmscreators`
--
ALTER TABLE `lmscreators`
  MODIFY `ctId` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `lmsplan`
--
ALTER TABLE `lmsplan`
  MODIFY `plId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lmscreators`
--
ALTER TABLE `lmscreators`
  ADD CONSTRAINT `lmscreators_ibfk_342` FOREIGN KEY (`companyId`) REFERENCES `lmscompany` (`cpId`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `lmscreators_ibfk_343` FOREIGN KEY (`countryId`) REFERENCES `countries` (`countryId`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `lmscreators_ibfk_344` FOREIGN KEY (`ctCreatedUserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `lmscreators_ibfk_345` FOREIGN KEY (`ctEditedUserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `lmscreators_ibfk_346` FOREIGN KEY (`ctCreateAdminUserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `lmscreators_ibfk_347` FOREIGN KEY (`ctEditAdminUserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
