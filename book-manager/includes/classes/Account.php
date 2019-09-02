<?php
class Account {
  private $errorArray;
  private $connexion;

  public function __construct($con){
    $this->connexion = $con;
    $this->errorArray = Array();
  }

  // This function allows to insert data into the data //

    private function insertData($username, $email, $psw){
      $encryptedPsw = md5($psw);
      $date = date('Y-m-d');
      $profilPic = "assets/img/profil/1.png";

        $insertDataQuery = mysqli_query($this->connexion, "INSERT INTO users
          VALUES(NULL, '$username','$email','$encryptedPsw','$date','$profilPic')");
        return $insertDataQuery;
    }

  // This function is the handler function of the register //

  public function register($username, $email, $psw, $psw2){
    $this->validateUsername($username);
    $this->validateUserEmail($email);
    $this->validateUserPassword($psw, $psw2);

    if(empty($this->errorArray)){
      return $this->insertData($username, $email, $psw);
    }
    else{
      return false;
    }
  }

  // User login//

  public function login($email, $password){
    $password = md5($password);
    $checkIfExists = mysqli_query($this->connexion, "SELECT * FROM users WHERE email='$email' AND password='$password'");

    if(mysqli_num_rows($checkIfExists) === 1){
      return true;
    }
    else{
      array_push($this->errorArray, Constants::$loginFailed);
      return false;
    }
  }

// This function display error messages //

  public function getError($error){
    if(!in_array($error, $this->errorArray)){
      $error = "";
    }
    return "<span class='errorMsg'>$error</span>";
  }

  // These functions check and validate the user information //

  private function validateUsername($username){
    if(strlen($username) > 30 || strlen($username) < 5){
      array_push($this->errorArray, Constants::$usernameErrorMessage);
      return;
    }
      // Checks if the username already exists //
    $checkUserQuery = mysqli_query($this->connexion, "SELECT * FROM users WHERE username='$username'");
    if(mysqli_num_rows($checkUserQuery) === 1){
      array_push($this->errorArray,Constants::$usernameExists);
      return;
    }
  }


  private function validateUserEmail($email){
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
      array_push($this->errorArray, Constants::$invalidEmail);
      return;
    }

      // Checks if the user email already exists //
    $checkEmailQuery = mysqli_query($this->connexion, "SELECT * FROM users WHERE email='$email'");
    if(mysqli_num_rows($checkEmailQuery) === 1){
      array_push($this->errorArray,Constants::$emailExists);
      return;
    }
  }

  private function validateUserPassword($psw, $psw2){
    if($psw != $psw2){
      array_push($this->errorArray, Constants::$nonIdenticalPsw);
      return;
    }
    if(strlen($psw) > 30 || strlen($psw) < 5){
      array_push($this->errorArray, Constants::$passwordLength);
      return;
    }
    // if(preg_match('#^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{6,}$#', $psw)){
    //   array_push($this->errorArray, Constants::$incorrectPsw);
    //   return;
    // }
  }
}
 ?>
