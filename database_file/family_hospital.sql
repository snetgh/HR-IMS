-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 10, 2019 at 01:36 PM
-- Server version: 5.7.25-0ubuntu0.18.04.2
-- PHP Version: 7.2.15-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `family_hospital`
--

-- --------------------------------------------------------

--
-- Table structure for table `leave_forms`
--

CREATE TABLE `leave_forms` (
  `staff_category_id` int(50) NOT NULL,
  `category_name` varchar(50) NOT NULL,
  `category_days` int(10) NOT NULL,
  `category_salary` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leave_forms`
--

INSERT INTO `leave_forms` (`staff_category_id`, `category_name`, `category_days`, `category_salary`) VALUES
(1, 'Enrolled Nurse', 28, '12L'),
(2, 'Staff Midwife', 36, '15H'),
(3, 'Bio-Statistics Assistant', 28, '11L'),
(4, 'Nutrition Officer', 36, '18L'),
(5, 'Dispensing Assistant', 28, '12L'),
(6, 'Senior Hospital orderly/Senior Hostel Orderly', 21, '7L'),
(7, 'Senior Supply Manager', 36, '18H'),
(8, 'Pharmacy Technician', 36, '15L'),
(9, 'Nursing Officer', 36, '18L'),
(10, 'Field Technician ', 28, '12H'),
(11, 'Deputy Chief Accountant', 36, '20H'),
(12, 'Stenographer Secretary', 28, '13L'),
(13, 'Principal Accountant Officer', 36, '19H'),
(14, 'Senior Health Assistant', 28, '12L'),
(15, 'Principal Health Assistant', 28, '13L'),
(16, 'Principal Artisan', 28, '12L'),
(17, 'Chief Technical Officer (Bio/Info/Disease Control)', 36, '19L'),
(18, 'Head Hospital orderly/Head Hostel Orderly', 28, '8L'),
(19, 'Chief Conservancy Labourer', 21, '9L'),
(20, 'Labourer', 21, '5L'),
(21, 'Senior Leading Launderer', 21, '12L'),
(22, 'Principal Catering Officer', 28, '16L'),
(23, 'Principal Security Guard', 28, '13L'),
(24, 'Senior Accountant', 28, '18L'),
(25, 'Senior Staff Nurse', 36, '16H'),
(26, 'Principal Driver/Senior Coxswain', 28, '10L'),
(27, 'Deputy Chief Clinical Engineering Manager', 36, '20H'),
(28, 'Senior Bio-Statistics Assistant', 28, '12L'),
(29, 'Principal Receptionist/Telephonist', 28, '8L'),
(30, 'Supt. Laboratory Assistant', 36, '14L'),
(31, 'Principal Technician Ass./Darkroom Ass. (X-Ray)', 28, '14L'),
(32, 'Deputy Chief Bio-Statistics Officer', 36, '20H'),
(33, 'Physician Assistant ', 36, '18L'),
(34, 'Specialist', 36, '24L'),
(35, 'Midwifery Officer', 36, '18L'),
(36, 'Senior Medical Officer', 36, '21H'),
(37, 'Principal Community Health Nurse', 28, '14H'),
(38, 'Deputy Chief Health Service Administrator', 36, '20H'),
(39, 'Senior Dental Technician', 36, '16H'),
(40, 'Senior Field Technician ', 28, '13L'),
(41, 'Senior Pharmacist', 36, '19L'),
(42, 'Senior Technical Assistant', 28, '13L'),
(43, 'Senior Medical Assistant', 36, '16H'),
(44, 'Senior Technical Officer', 36, '16L'),
(45, 'Senior Technical Officer (Lab/X-Ray/Orth)', 36, '16L'),
(46, 'Community Health Nurse', 28, '12L');

-- --------------------------------------------------------

--
-- Table structure for table `leave_requests`
--

CREATE TABLE `leave_requests` (
  `leave_id` int(11) NOT NULL,
  `person_name` varchar(50) NOT NULL,
  `person_rank` int(20) NOT NULL,
  `days_entitled` int(20) NOT NULL,
  `days_requested` int(20) NOT NULL,
  `days_remain` int(20) NOT NULL DEFAULT '0',
  `salary_level` varchar(20) NOT NULL,
  `doa` varchar(20) NOT NULL,
  `dod` varchar(20) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `date_last` varchar(20) NOT NULL,
  `respect_of` varchar(20) NOT NULL,
  `has_approved` tinyint(1) NOT NULL,
  `reliever_required` tinyint(1) NOT NULL,
  `approved_dod` varchar(50) NOT NULL,
  `approved_nod` int(11) NOT NULL DEFAULT '0',
  `date_of_resumption` varchar(50) NOT NULL,
  `approved` tinyint(1) NOT NULL DEFAULT '0',
  `proccessed` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2018_11_19_085642_create_staff_departments_table', 0),
(2, '2018_11_19_085642_create_staff_table_table', 0),
(3, '2018_11_19_085642_create_staff_users_table', 0),
(4, '2018_11_19_085643_add_foreign_keys_to_staff_table_table', 0),
(5, '2018_11_19_180807_create_staff_departments_table', 0),
(6, '2018_11_19_180807_create_staff_table_table', 0),
(7, '2018_11_19_180807_create_staff_users_table', 0),
(8, '2018_11_19_180808_add_foreign_keys_to_staff_table_table', 0),
(9, '2018_11_21_230830_create_staff_departments_table', 0),
(10, '2018_11_21_230830_create_staff_table_table', 0),
(11, '2018_11_21_230830_create_staff_users_table', 0),
(12, '2018_11_21_230830_create_users_table_table', 0),
(13, '2018_11_21_230832_add_foreign_keys_to_staff_table_table', 0),
(14, '2018_11_21_230954_create_staff_departments_table', 0),
(15, '2018_11_21_230954_create_staff_table_table', 0),
(16, '2018_11_21_230954_create_staff_users_table', 0),
(17, '2018_11_21_230954_create_users_table_table', 0),
(18, '2018_11_21_230956_add_foreign_keys_to_staff_table_table', 0);

-- --------------------------------------------------------

--
-- Table structure for table `staff_departments`
--

CREATE TABLE `staff_departments` (
  `department_id` int(50) NOT NULL,
  `department_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staff_departments`
--

INSERT INTO `staff_departments` (`department_id`, `department_name`) VALUES
(1, 'Administration'),
(2, 'Accounts'),
(3, 'Internal Audit'),
(4, 'Laboratory'),
(5, 'X-Ray'),
(6, 'OPD'),
(7, 'Revenue'),
(8, 'Health Insurance'),
(9, 'Casualty'),
(10, 'Theatre'),
(11, 'Records'),
(12, 'Pharmacy'),
(13, 'Stores'),
(14, 'Procurement'),
(15, 'Laundry'),
(16, 'Maternity'),
(17, 'Female/Kids '),
(18, 'Male Medical/VIP'),
(19, 'Maintenance'),
(20, 'Security'),
(21, 'Mortuary'),
(22, 'Transport'),
(23, 'Dental'),
(24, 'Eye'),
(25, 'Psychiatry'),
(26, 'Disease Control'),
(27, 'ART'),
(28, 'I.T');

-- --------------------------------------------------------

--
-- Table structure for table `staff_table`
--

CREATE TABLE `staff_table` (
  `staff_id` int(4) UNSIGNED ZEROFILL NOT NULL,
  `staff_full_name` varchar(50) NOT NULL,
  `staff_image` mediumtext NOT NULL,
  `staff_department` int(5) NOT NULL,
  `staff_dob` varchar(20) DEFAULT NULL,
  `staff_age` varchar(20) NOT NULL,
  `staff_spouse_name` varchar(50) DEFAULT NULL,
  `staff_spouse_id` varchar(50) DEFAULT NULL,
  `spouse_image` mediumtext,
  `child_1_name` varchar(50) DEFAULT NULL,
  `child_1_dob` varchar(20) DEFAULT NULL,
  `child_1_id` varchar(50) DEFAULT NULL,
  `child_1_image` mediumtext,
  `child_1_cert` mediumtext,
  `child_2_name` varchar(50) DEFAULT NULL,
  `child_2_dob` varchar(20) DEFAULT NULL,
  `child_2_id` varchar(50) DEFAULT NULL,
  `child_2_image` mediumtext,
  `child_2_cert` mediumtext,
  `child_3_name` varchar(50) DEFAULT NULL,
  `child_3_dob` varchar(20) DEFAULT NULL,
  `child_3_id` varchar(50) DEFAULT NULL,
  `child_3_image` mediumtext,
  `child_3_cert` mediumtext,
  `child_4_name` varchar(50) DEFAULT NULL,
  `child_4_dob` varchar(20) DEFAULT NULL,
  `child_4_id` varchar(50) DEFAULT NULL,
  `child_4_image` mediumtext,
  `child_4_cert` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `staff_users`
--

CREATE TABLE `staff_users` (
  `staff_user_id` int(50) NOT NULL,
  `staff_user_username` varchar(50) NOT NULL,
  `staff_user_password` longtext NOT NULL,
  `staff_timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users_table`
--

CREATE TABLE `users_table` (
  `user_id` int(100) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_pass` mediumtext NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_table`
--

INSERT INTO `users_table` (`user_id`, `user_name`, `user_pass`, `timestamp`) VALUES
(1, 'peter', 'step', '2018-11-21 23:07:36'),
(2, 'stephen', 'stephen', '2018-12-22 20:44:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `leave_forms`
--
ALTER TABLE `leave_forms`
  ADD PRIMARY KEY (`staff_category_id`);

--
-- Indexes for table `leave_requests`
--
ALTER TABLE `leave_requests`
  ADD PRIMARY KEY (`leave_id`),
  ADD KEY `person_rank` (`person_rank`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `staff_departments`
--
ALTER TABLE `staff_departments`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `staff_table`
--
ALTER TABLE `staff_table`
  ADD PRIMARY KEY (`staff_id`),
  ADD KEY `staff_department` (`staff_department`);

--
-- Indexes for table `staff_users`
--
ALTER TABLE `staff_users`
  ADD PRIMARY KEY (`staff_user_id`);

--
-- Indexes for table `users_table`
--
ALTER TABLE `users_table`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `leave_forms`
--
ALTER TABLE `leave_forms`
  MODIFY `staff_category_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT for table `leave_requests`
--
ALTER TABLE `leave_requests`
  MODIFY `leave_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `staff_departments`
--
ALTER TABLE `staff_departments`
  MODIFY `department_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `staff_table`
--
ALTER TABLE `staff_table`
  MODIFY `staff_id` int(4) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `staff_users`
--
ALTER TABLE `staff_users`
  MODIFY `staff_user_id` int(50) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users_table`
--
ALTER TABLE `users_table`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `leave_requests`
--
ALTER TABLE `leave_requests`
  ADD CONSTRAINT `leave_requests_ibfk_1` FOREIGN KEY (`person_rank`) REFERENCES `leave_forms` (`staff_category_id`);

--
-- Constraints for table `staff_table`
--
ALTER TABLE `staff_table`
  ADD CONSTRAINT `staff_table_ibfk_1` FOREIGN KEY (`staff_department`) REFERENCES `staff_departments` (`department_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
