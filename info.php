<?php 
session_start();//inizia la connessione e crea l'ID (nel caso di prima connessione)
if(isset($_SESSION['login_effettuato'])){
    $user=$_SESSION['utente'];
    $cognome=$_SESSION['cognome'];
    $nome=$_SESSION['nome'];
    $_SESSION['skin']=0;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Info</title>
    <link rel="stylesheet" type="text/css" href="stilelogin.css">
    <style>
               h1{
    margin: 20px;
}
main{
            background-size: 7%;
            font-size: 40px;
            width: 79%;
            margin-left: 120px;
            margin-right: 120px;
            margin-top: 0px;
            padding-bottom:60px;
        }
    </style>
</head>
<body>
    <header>The Legend of Zelda A link To the Exam
    </header>
    <nav>
<div id="menu">Menu</div>
<div id="info">Info</div>
<div id="classifica">Classifica</div>
 <?php
 
if(isset($_SESSION['login_effettuato'])){
echo"<div id=\"username_nav\">";
echo $user;
echo "</div>";
}
else {
    echo "<a id=\"login_button\" href=\"prima_schermata.php\">Login </a>";
}

?>
<img src="./immagini/cuore_icona.png" id="cuore_icona">
    </nav>
    <h1 style="z-index:1">Informazioni sul gioco</h1>
    <div id="logout" style="z-index:100">Logout</div>
    <main id="">
        <h2>Comandi</h2>
        <img class="immagine" src="./immagini/tasti.png" alt="" width="900">
    <div>Puoi muoverti lungo la mappa con le freccette direzionali ed attaccare con la barra spaziatrice</div>
    <h2>Punteggio</h2>
    <div>Ad ogni danno subito il voto si abbassera', solo gli utenti registrati potranno salvare il proprio voto. <br> Fondamentale e' effettuare il login prima di iniziare la partita
</div>

    </main>
    
    <script>
        inizia_partita=document.getElementById("inizia_partita");
            username=document.getElementById("username_nav");
            logout=document.getElementById("logout");
            logout.style.setProperty("display","none");
            menu=document.getElementById("menu");
            classifica=document.getElementById("classifica");
            info=document.getElementById("info");
            menu.onclick= function(){
                document.location.href='main_menu.php';
        }
        classifica.onclick= function(){
                document.location.href='classifica.php';
        }
        info.onclick= function(){
                document.location.href='info.php';
        }
        logout.onmouseleave=function(){
            setTimeout(function(){logout.style.setProperty("display","none");},1000);
        }
        username.onclick= function(){
            logout.style.setProperty("display","unset");
         
        }

            logout.onclick= function(){
                        
                var xhr = new XMLHttpRequest();

// Create a new XMLHttpRequest object
xhr.open("POST", "session_destroy.php", true);

// Specify the request method, PHP script URL, and asynchronous
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


// Set the content type
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {

        // Check if the request is complete
        if (xhr.status === 200) {

            // Check if the request was successful
            console.log(xhr.responseText);
            // Output the response from the PHP script
        } else {
            console.error("Error:", xhr.status);
            // Log an error if the request was unsuccessful
        }

    }
   
}
    ;
    xhr.send();
    
// Send the data to the PHP script
        
                document.location.href='prima_schermata.php';
        }
            
        
    </script>
    
    <footer>Presented by Team Boblin</footer>
</body>
</html>