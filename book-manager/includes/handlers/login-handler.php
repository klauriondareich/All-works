<?php

  if(isset($_POST["loginButton"])){
    $email = $_POST["loginEmail"];
    $password = $_POST["loginPassword"];

    $isTrue = $account->login($email, $password);
    if($isTrue){
      header("Location: index.php");
    }
  }
 ?>
