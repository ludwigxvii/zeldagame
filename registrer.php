<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="stilelogin.css">
    <style>
  
        #zona_registrazione h1{
            margin-bottom: 0px;
        }
        #zona_registrazione div{
            margin-top: 20px;
            margin-bottom: 20px;
        }
        #zona_registrazione{
        padding-top: 10px;
        }
        #zona_registrazione input[type="submit"]{
            height: 95px;
            margin-top:10px;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div id="zona_registrazione" class="zonalogin">
        <h1>Registrati</h1>
        <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">
    <div> <label for="nome">Nome   </label>
        <input type="text" name="nome" id="nome" placeholder="  max 50 caratteri">
</div>
<div> <label for="cognome">Cognome</label>
        <input type="text" name="cognome" id="cognnome" placeholder="  max 50 caratteri">
</div>

    <div> <label for="username">Username</label>
        <input type="text" name="username" id="username" placeholder="  max 25 caratteri">
</div>
<div>
<label for="password">Password</label>
<input type="password" name="password" id="password" placeholder="  max 25 caratteri">
</div>
<div>
<label for="passwordc">Riconferma</label>
<input type="password" name="passwordc" id="passwordc" placeholder="">

</div>
<input type="submit" name="Registrati" value="Registrati">
    </form></div>
    <?php
   if($_POST!=null){ 
    if($_POST['password']==$_POST['passwordc']){
$hash=password_hash($_POST['password'],PASSWORD_DEFAULT);

if(isset($_POST['username'])){
$user=$_POST['username'];
}else{ $user="";}
if(verifica_user($user)){
if(isset($_POST["nome"])){
$nome= $_POST['nome'];
}else{ $nome= '';}
if(isset($_POST['cognome'])){
$cognome= $_POST['cognome'];
}else{ $cognome= '';}
    if(isset($_POST['sesso'])){
$sesso= $_POST['sesso'];
    }else{ $sesso= '';}

    $host = 'localhost';
    $port = 5432;  
    $db = 'gruppo24';
    $username = 'www';
    $password = 'tw2024';
    $connection_string = " host=$host dbname=$db user=$username password=$password";    
    $db = pg_connect($connection_string)
    or die('Impossibile connettersi:'. pg_last_error());
    
    $prep = pg_prepare($db,"sqlRegistrazione", 'INSERT INTO utente(nome, cognome, sesso, username, password)VALUES ($1,$2,$3,$4,$5);');
   

    $result =pg_execute($db,"sqlRegistrazione", array($nome, $cognome, $sesso,$user, $hash));
    
    if($result) echo"<p>Registrazione Riuscita</p>";
}else{echo"Username già presente";}
   }else {echo"<p>Le Password non coincidono</p>";} 
   
}
function verifica_user($user){
    $host = 'localhost';
    $port = 5432;  
    $db = 'gruppo24';
    $username = 'www';
    $password = 'tw2024';
    $connection_string = " host=$host dbname=$db user=$username password=$password";    
    $db = pg_connect($connection_string)
    or die('Impossibile connettersi:'. pg_last_error());
    
    $sql ="SELECT username FROM utente WHERE username='$user' ";
$ret = pg_query($db, $sql);
$row = pg_fetch_assoc($ret);
    if($ret){
        
            return false;
    }
    return true;
}

    ?>
</body>
</html>