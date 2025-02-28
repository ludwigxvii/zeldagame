<?php
ini_set('display_errors', 0);
if ($_POST["current_user"]!="nessuno") { 
    $current_user=$_POST["current_user"];
    $voto=$_POST["voto"];
    echo 'user :'.$current_user."\n";
    echo 'voto :'.$voto."\n";
    $host = 'localhost';
    $port = 5432;  
    $db = 'gruppo24';
    $username = 'www';
    $password = 'tw2024';
    $connection_string = " host=$host dbname=$db user=$username password=$password";  
    $db = pg_connect($connection_string);
    $prep = pg_prepare($db,"sqlVoto", ' SELECT score FROM utente WHERE username = $1;');
    $result =pg_execute($db,"sqlVoto",array($current_user));
    $row=pg_fetch_array($result);
    echo 'voto server:'.$row[0]."\n";
    if ($row[0]<$voto){
        $prep = pg_prepare($db,"sqlInsert", ' UPDATE utente SET score = $1 WHERE username = $2;');
        $result =pg_execute($db,"sqlInsert",array($voto, $current_user));
        echo 'voto Inviato';
    }else{
 echo 'voto basso';}
}else{
echo "nessun utente";
}


?>