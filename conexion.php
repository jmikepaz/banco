<?php
$servername = "localhost";
$username = "desarrollo";
$password = "Uthdesarrollo2021*";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
 
?>