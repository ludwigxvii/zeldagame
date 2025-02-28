<?php
ini_set('display_errors', 0);
        if (isset($_POST["current_user"])) { 
            $current_user=$_POST["current_user"];
           

    $host = 'localhost';
    $port = 5432;  
    $db = 'gruppo24';
    $username = 'www';
    $password = 'tw2024';
    $connection_string = " host=$host dbname=$db user=$username password=$password";    
    $db = pg_connect($connection_string);
    $prep = pg_prepare($db,"sqlLogin", ' SELECT username,score FROM utente ORDER BY score DESC;');
    $result =pg_execute($db,"sqlLogin",array());
    
    for ($x = 0; $x <= 20; $x++) {
        $row=pg_fetch_array($result);
        
        if($row[0]==$current_user)echo "<div id=\"user_corrente\">";
        else echo "<div id=\"posto_classifica\">";
            echo "<div id=\"user_classifica\">";
            echo $row[0];
            echo "</div>";
            echo "<div id=\"score_classifica\">";
            echo "Voto: ";
            if($row[1]==31) echo "30 e Lode";
            else echo $row[1];
            echo "</div>";
            echo "</div>";
      }
    
        }
        

        ?>