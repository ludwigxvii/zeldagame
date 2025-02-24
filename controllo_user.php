<?php
ini_set('display_errors', 0);
        if (isset($_POST["username"])) { 
            $utente=$_POST["username"];
    $host = 'localhost';
    $port = 5432;  
    $db = 'gruppo24';
    $username = 'www';
    $password = 'tw2024';
    $connection_string = " host=$host dbname=$db user=$username password=$password";    
    $db = pg_connect($connection_string)
    or die('Impossibile connettersi:'. pg_last_error());
    $prep = pg_prepare($db,"sqlRegistrazione", ' SELECT username FROM utente WHERE username = $1;');
   $result =pg_execute($db,"sqlRegistrazione", array($utente));
   $row=pg_fetch_assoc($result);
   $user = $row['username'];
   if($user==$utente)echo 'esiste';
   else{echo 'false';}
        }else echo 'errore';
        ?>