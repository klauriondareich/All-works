<?php
//  this function sanitarize the username //

  function sanitarizeUsername($username){
    $username = strip_tags($username);
    $username = str_replace(" ","", $username);
    $username = ucfirst(strtolower($username));
    return $username;
  }

  // this function sanitarize the user email //

  function sanitarizeUserEmail($mail){
    $email = str_replace(" ","",$mail);
    $email = strip_tags($email);
    // $email = ucfirst(strtolower($email));
    return $email;
  }

  // this function sanitarize the user password //

  function sanitarizePassword($psw){
    $password = str_replace(" ", "", $psw);
    $password = strip_tags($password);
    return $password;
  }

// Call functions when register button is pressed //

if(isset($_POST["registerButton"])){
    $username = sanitarizeUsername($_POST["username"]);
    $email = sanitarizeUserEmail($_POST["email"]);
    $password = sanitarizePassword($_POST["password"]);
    $password2 = sanitarizePassword($_POST["password2"]);


    $isTrue = $account->register($username, $email, $password, $password2);
    if($isTrue){
      header("Location: index.php");
    }
  }
 ?>
