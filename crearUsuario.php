<?php
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
 header('Access-Control-Allow-Headers: token, Content-Type');
 header('Access-Control-Max-Age: 1728000');
 header('Content-Length: 0'); 
 header('Content-Type: application/json');
include "./conexion.php";
$postdata = file_get_contents("php://input"); 


echo $postdata
?>