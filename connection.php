<?php
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "wedding";
$servername = "localhost";
$username = "u669048266_wedding";
$password = "Password123!";
$dbname = "u669048266_wedding";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully";
$tampil = mysqli_query($conn, "SELECT * FROM khitanan_hafidz ORDER BY id DESC");
