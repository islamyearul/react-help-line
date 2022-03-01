<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "root", "", "laravel_hospital-management-system-project");


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }


?>