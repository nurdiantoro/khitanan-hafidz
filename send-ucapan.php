<?php
include("connection.php");

// Check If form submitted, insert form data into users table.
if (isset($_POST['submit'])) {
    $nama = $_POST['nama'];
    $pesan = $_POST['pesan'];

    // include database connection file

    // Insert user data into table
    $result = mysqli_query($conn, "INSERT INTO khitanan_hafidz(nama,pesan) VALUES('$nama','$pesan')");
    header("location:index.php");
    // Show message when user added
}
