<?php
ini_set('display_errors', 0);
        if (isset($_POST["username"])&&isset($_POST["password"])) { 
            $utente=$_POST["username"];
            $pass=$_POST["password"];
           

    $host = 'localhost';
    $port = 5432;  
    $db = 'gruppo24';
    $username = 'www';
    $password = 'tw2024';
    $connection_string = " host=$host dbname=$db user=$username password=$password";    
    $db = pg_connect($connection_string);
    $prep = pg_prepare($db,"sqlLogin", ' SELECT username, password FROM utente WHERE username = $1;');
    $result =pg_execute($db,"sqlLogin", array($utente));
    $row=pg_fetch_assoc($result);
   $user = $row['username'];
   $hash = $row['password'];
   
   if($user==$utente){
    if(!password_verify($pass, $hash))echo "passworderrata";
    else {echo 'esiste';}}
   else{echo 'nomeinesistente';}
        }
        

        ?>