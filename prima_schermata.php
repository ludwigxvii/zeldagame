<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Benvenuti</title>
    <link rel="stylesheet" type="text/css" href="stilelogin.css">
    <style>
        .titolo_avvisi{
    animation-name: titoloreds;
 animation-duration: 1s;
 animation-iteration-count: infinite;
 animation-name: titolosred2;
 animation-duration: 1s;
 animation-iteration-count: infinite;
}
#bottone_inizio{
    font-size: 50px;
    margin: 20px;
}
#bottone_senzalogin{
    font-size: 50px;
    margin: 20px;
}
@keyframes titoloreds {
 from {
    color: rgb(255, 0, 0);
}
 to {
    color: rgb(255, 136, 0);}
}
@keyframes titolosred2 {
    from {
        color: rgb(255, 136, 0);}
    to {
        color: rgb(255, 0, 0);}
   }
        #bottone2{
            color:rgb(176, 53, 53);
            cursor: pointer;
            text-shadow: 2px 2px rgb(0, 0, 0);
        }
        #zona_login{
            display: none;
            opacity: 0%;
        }
                #zona_login input[type="submit"]{
            
            background-size: 100%;
            font-size: 40px;
            padding: 30px;
            margin: 30px;
            clear: both;
        }
        #zona_login .zonalogin{
    padding-bottom: 125px;
}
        #zona_registrazione h1{
            margin-bottom: 0px;
        }
        #zona_registrazione div{
            margin-top: 20px;
            margin-bottom: 20px;
        }
        #zona_registrazione{
            display: none;
        padding-top: 10px;
        }
        #zona_registrazione input[type="submit"]{
            font-size: 30px;
            margin-bottom: 20px;
        }
        body{
            
            align-content: center;
        }
        #logo{
            
            display: block;
            padding-top:70px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            animation: scendi 1500ms cubic-bezier(0.785, 0.135, 0.150, 0.860) both;          
}

@keyframes scendi {
    from {
        top:-1000px;
    }
 to {
    top:0px;
}
}
@keyframes trema {
 to {
    transform: scale(1.01);
}
}

        button{
            opacity: 0%;
            margin-top:30px;
            padding-left: 87px;
            padding-right: 87px;
            text-shadow: 2px 2px rgb(0, 0, 0);
            animation: fade 500ms 1s cubic-bezier(0.785, 0.135, 0.150, 0.860) both;
            animation-delay: 1500ms ;
            -webkit-animation-fill-mode: forwards;
        }
        
        @keyframes rimpicciolimento {
    to {
        transform: translate(0px,-170px) scale(0.3);}
        }
        @keyframes salita {
    to {
        
        transform: translate(0px,-340px);
        opacity: 100%;}
        }
        @keyframes salitareg {
    to {
        
        transform: translate(0px,-340px);
        visibility: visible;}
        }

        footer{
            opacity: 0%;
            display: block;
            margin-top: 50px;
            text-shadow: 2px 2px rgb(0, 0, 0);
            position: relative;
            animation: fade 500ms ease-in-out;
            animation-delay: 1500ms ;
            -webkit-animation-fill-mode: forwards;
        }
        @keyframes fade {
    from {

        opacity: 0%;
    }
    to {
        opacity: 100%;}
        }
        </style>
</head>
<body>
    <img id="logo" class="" src="immagini/logo_zelda_definitive.png"  height="400">
    <button id="bottone_inizio">Entra<br>Qui</button>
    <button id="bottone_senzalogin" onclick="window.location.href='main_menu.php'">Gioca<br>Ora</button>
    <div id="zona_login" class="zonalogin">
        <h1 id="errori_login">Effettua il login</h1>
        <form action="login-manager.php" method="post" onsubmit="return verifica_login(this)">
           <div> <label for="username">Username</label>
            <input type="text" name="username" id="username" placeholder="  max 25 caratteri">
    </div>
    <div>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" placeholder=" ">
    </div>
    <input type="submit" name="Login" value="Login">
    
        </form>
        <p style="font-size: 70%;">Non sei registrato? <span id="bottone2" >Registrati</span></p>
        
    </div>
    <div id="zona_registrazione" class="zonalogin">
        <h1 id="titolo">Registrati</h1>
        
        <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST" onsubmit="return verifica(this)">
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

$hash=password_hash($_POST['password'],PASSWORD_DEFAULT);

if(isset($_POST['username'])){
$user=$_POST['username'];
}else{ $user="";}
if(isset($_POST["nome"])){
$nome= $_POST['nome'];
}else{ $nome= '';}
if(isset($_POST['cognome'])){
$cognome= $_POST['cognome'];
}else{ $cognome= '';}



    $host = 'localhost';
    $port = 5432;  
    $db = 'gruppo24';
    $username = 'www';
    $password = 'tw2024';
    $connection_string = " host=$host dbname=$db user=$username password=$password";    
    $db = pg_connect($connection_string)
    or die('Impossibile connettersi:'. pg_last_error());
    $prep = pg_prepare($db,"sqlRegistrazione", 'INSERT INTO utente(nome, cognome, username, password)VALUES ($1,$2,$3,$4);');
   

    $result =pg_execute($db,"sqlRegistrazione", array($nome, $cognome, $user, $hash));
    
    if($result){echo"<p>Registrazione Riuscita</p>";
        //inizia la connessione e crea l'ID (nel caso di prima connessione)
$_SESSION['login_effettuato']=1;

//setto le variabili dell'utente
$_SESSION['utente']=$user;
$_SESSION['cognome']=$cognome;
$_SESSION['nome']=$nome;

        echo"<script>bottone=document.getElementById(\"bottone_inizio\");</script>";
        echo"<script>bottone.innerHTML=\"Gioca<br>Ora\";
        </script>";
        echo"<script>bottone.id=\"bottone_gioco\";document.location.href='main_menu.php';</script>";
    }

   }

    ?>
    <script>
        bottone=document.getElementById("bottone_inizio");
        bottone_gioco=document.getElementById("bottone_gioco");
        bottone_senzalogin=document.getElementById("bottone_senzalogin");
        logo=document.getElementById("logo");
        zona_login=document.getElementById("zona_login");
        zona_registrazione=document.getElementById("zona_registrazione");
        login_effettuato=false;
function verifica(oggetto_reg){
    bottone=document.getElementById("bottone_inizio");
    var titolo = document.getElementById("titolo");

if (oggetto_reg.username.value==""){
    titolo.innerHTML="Inserisci un Username!";
    titolo.className="titolo_avvisi";
    oggetto_reg.username.focus();
    return false;
}

var risultato_check=false;
            var xhr = new XMLHttpRequest();
xhr.open("POST", "controllo_user.php", false);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        // Check if the request is complete
        if (xhr.status === 200) {
            // Check if the request was successful
            console.log("la richiesta ha ottenuto:",xhr.responseText)
            if(xhr.responseText=="esiste"){
                console.log("il nome coincide")
                risultato_check=true;

            
            }else{risultato_check=false;
            }
            // Output the response from the PHP script
        } else {
            console.error("Error:", xhr.status)
            // Log an error if the request was unsuccessful
        }

    }
  
}
    ;
    xhr.send("username="+oggetto_reg.username.value);
    console.log("Il Risultato :",risultato_check)
        if(risultato_check){
            titolo.innerHTML="Username Esistente!";
            titolo.className="titolo_avvisi";
            oggetto_reg.username.focus();
            return false};

if (oggetto_reg.password.value==""){
    titolo.innerHTML="Inserisci una Password!";
    titolo.className="titolo_avvisi";
    oggetto_reg.password.focus();
    return false;
}
if (oggetto_reg.passwordc.value==""){
    titolo.innerHTML="Conferma la Password!";
    titolo.className="titolo_avvisi";
    oggetto_reg.passwordc.focus();
    return false;
}
if (oggetto_reg.password.value!=oggetto_reg.passwordc.value){
    titolo.innerHTML="Le Password non coincidono!";
    titolo.className="titolo_avvisi";
    titolo.style.fontSize = "40px";
    oggetto_reg.password.focus();
    return false;
}
login_effettuato = true;
bottone.innerHTML="Gioca Ora";
return true;
        }
        
        
        bottone.onclick = function(){
        logo.style.setProperty("animation", "rimpicciolimento 2s cubic-bezier(0.785, 0.135, 0.150, 0.860) both");
        logo.style.setProperty("-webkit-animation-fill-mode","forwards");
        bottone.style.setProperty("display","none");
        bottone_senzalogin.style.setProperty("display","none");
        console.log('pressed');
        zona_login.style.setProperty("display", "block");
        zona_login.style.setProperty("animation", "salita 2s cubic-bezier(0.785, 0.135, 0.150, 0.860) both");
        zona_login.style.setProperty("-webkit-animation-fill-mode","forwards");
        
        }
        bottone2.onclick= function(){
            zona_login.style.setProperty("display", "none");
            zona_registrazione.style.setProperty("display", "block");
            zona_registrazione.style.setProperty("animation", "salitareg 2s cubic-bezier(0.785, 0.135, 0.150, 0.860) both");
        zona_registrazione.style.setProperty("-webkit-animation-fill-mode","forwards");
        }
        bottone_gioco.onclick = function(){
            document.location.href='main_menu.php';
        }


        function verifica_login(oggetto_log){
            var stampata;
            var xhr = new XMLHttpRequest();
xhr.open("POST", "controllo_login.php", false);

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {

        if (xhr.status === 200) {

            // Check if the request was successful
            console.log(xhr.responseText)
            stampata=xhr.responseText;
            errori_login=document.getElementById("errori_login")
            if(xhr.responseText=="nomeinesistente"){
                errori_login.innerHTML="Username Inesistente!";
                errori_login.className="titolo_avvisi";
                oggetto_log.username.focus();
            }
            if(xhr.responseText=="passworderrata"){
                errori_login.innerHTML="Password Errata!";
                errori_login.className="titolo_avvisi";
                oggetto_log.username.focus();
            }
            }else{
            }
            // Output the response from the PHP script
        } else {
            console.error("Error:", xhr.status)
            // Log an error if the request was unsuccessful
        }

    
  
}
    ;
    xhr.send("username="+oggetto_log.username.value+"&password="+oggetto_log.password.value);
    console.log("cosa dice la funzione",stampata);
    if(stampata=="esiste")return true
    else return false}
        
    </script>
    <footer>Presented by Team Boblin</footer>
</body>
</html>