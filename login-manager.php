<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Manager</title>
    <link rel="stylesheet" type="text/css" href="stilelogin.css">
</head>
<body>
<?php 
$host = 'localhost';
$port = 5432;  
$db = 'gruppo24';
$username = 'www';
$password = 'tw2024';
$connection_string = " host=$host dbname=$db user=$username password=$password";

$db = pg_connect($connection_string)
or die('Impossibile connettersi:'. pg_last_error());
$usernameacc = $_POST['username'];
$passwordacc= $_POST['password'];
$sql ="SELECT nome, cognome, username, password FROM utente WHERE username='$usernameacc' ";
$ret = pg_query($db, $sql);
$row = pg_fetch_assoc($ret);
if($row){
$user = $row['username'];
$hash = $row['password'];
$nome = $row['nome'];
$cognome = $row['cognome'];

if(password_verify($passwordacc, $hash)){
    
    echo "<p>L'utente è Registrato, ma se visualizzi questa schermata l'indirizzo della home è cambiato</p>";
    session_start();//inizia la connessione e crea l'ID (nel caso di prima connessione)
$_SESSION['login_effettuato']=1;

//setto le variabili dell'utente
$_SESSION['utente']=$user;
$_SESSION['cognome']=$cognome;
$_SESSION['nome']=$nome;
echo"<script>document.location.href='main_menu.php';</script>";

}else
{
    
    echo "<p>PASSWORD ERRATA</p>";
$user =null;
$hash =null;
$nome =null;
$cognome =null;

}}else{  echo " <p>L'utente non è Registrato, registrati <a href=\"registrer.php\">Qui</a></p>";}
$user =null;
$hash =null;
$nome =null;
$cognome =null;

echo"<form action=\"reserved.php\" method=\"post\">
    <input type=\"submit\" value=\"ENTRA\"> </form>";
?>


</body>
</html>