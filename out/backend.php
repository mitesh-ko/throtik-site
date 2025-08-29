<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// require_once './email.php';

// Database credentials
$host = "localhost"; // or your DB host
$username = "u113829244_throtik";
$password = "465Yf3YD^5UYT#5JI6";
$database = "u113829244_throtik";

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    die("Something went wrong.");
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(500);
    die('Not a POST request');
}

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Validate name
if (empty($name)) {
    http_response_code(500);
    die('Name is required');
} elseif (strlen($name) > 190) {
    http_response_code(500);
    die('Name must not exceed 190 characters');
}

// Validate email
if (empty($email)) {
    http_response_code(500);
    die('Email is required');
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(500);
    die('Invalid email format');
} elseif (strlen($email) > 190) {
    http_response_code(500);
    die('Email must not exceed 190 characters');
}

if (empty($message)) {
    http_response_code(500);
    die('Message is required');
} elseif (strlen($email) > 2500) {
    http_response_code(500);
    die('Email must not exceed 2500 characters');
}

// SQL query to insert data
$sql = "INSERT INTO user_request (name, email, message) VALUES (?, ?, ?)";

// Prepare and bind
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $message);

// Execute
if ($stmt->execute()) {
    sendNotifyEmail($name, $email, $message);
    header("Location: " . $_SERVER['HTTP_REFERER']); // goes back to the form page
    exit;
} else {
    echo "Error: " . $stmt->error;
}

// Close connection
$stmt->close();
$conn->close();
?>
