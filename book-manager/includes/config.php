<?php
session_start();

$timezone = date_default_timezone_set("Europe/London");
$con = mysqli_connect("localhost", "root", "", "bmdb");

if(mysqli_connect_errno()){
  echo "Erreur de connexion : " . mysqli_connect_errno();
}
else{
  echo "connected";
}
?>
