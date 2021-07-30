<?php
include "./conexion.php";
$postdata = file_get_contents("php://input"); 


echo json_decode($postdata)
?>