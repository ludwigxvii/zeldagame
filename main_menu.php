<?php 
session_start();//inizia la connessione e crea l'ID di sessione (nel caso di prima connessione)
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
    <meta name="viewport" content="width=1920, initial-scale=1.0">
    <title>Menu</title>
    <link rel="stylesheet" type="text/css" href="stilelogin.css">
    <style>
        button{
            display: block;
            margin-top: 60px;
            margin-right: 25%;
            margin-left: auto;

        }
        .immagine{
            
            -webkit-filter: drop-shadow(6px 6px #000000);
    filter: drop-shadow(4px 4px #000000);
    padding: 0px;
}
       main{
        width: 40%;
       }

    </style>
</head>
<body>
    <header>The Legend of Zelda A link To the Exam</header>
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
<div id="logout">Logout</div>
    </nav>
    <main>
        <h1>Scegli l'Aspettu</h1>
        <div class="immagine">
            <img src="immagini/link_blue.png">
        </div>
        <div class="immagine">
            <img src="immagini/link_green.png">
        </div>
        <div class="immagine">
            <img src="immagini/link_red.png">
        </div>

        <div id="zonafreccia">
            <div id="freccias">
                <img src="immagini/freccia_sinistrav2.png">
            </div>
            <div id="frecciad">
            <img src="immagini/freccia_destrav2.png">
        </div>
    </div>
    </main>
    <aside>
        <button id="inizia_partita">Inizia</button>
        <div>L'Utente Attuale e'
        <?php
        if(isset($_SESSION['login_effettuato'])){
            echo $nome;
            echo " ";
            echo $cognome;
        } else {
            echo "non registrato";
        }
        ?>
</div>
    </aside>
    <script>
        inizia_partita=document.getElementById("inizia_partita");
            username=document.getElementById("username_nav");
            logout=document.getElementById("logout");
            logout.style.setProperty("display","none");
         link=document.getElementsByClassName("immagine");
         link[1].style.setProperty("display","none");
         link[2].style.setProperty("display","none");
         avanti=document.getElementById("frecciad");
         indietro=document.getElementById("freccias");
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
         var current_skin=0;
        avanti.onclick= function(){
            
            link[current_skin].style.setProperty("display","none");
            if(current_skin!=2)current_skin=current_skin+1;
            else current_skin=0;
            
            link[current_skin].style.setProperty("display","unset");

        }
        indietro.onclick= function(){
            link[current_skin].style.setProperty("display","none");
            if(current_skin!=0)current_skin=current_skin-1;
            else current_skin=2;
            link[current_skin].style.setProperty("display","unset");

        }
        logout.onmouseleave=function(){
            setTimeout(function(){logout.style.setProperty("display","none");},1000);
        }
        <?php
        if(isset($_SESSION['login_effettuato'])){
            echo "username.onclick= function(){logout.style.setProperty(\"display\",\"unset\");}";
            echo "\n";
            
        
        }
        ?>
        inizia_partita.onclick= function(){
            console.log(current_skin);
            var dataToSend = "current_skin=" + current_skin;

// Prepare the data to send
var xhr = new XMLHttpRequest();

// Create a new XMLHttpRequest object
xhr.open("POST", "invio_skin.php", true);

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
    xhr.send(dataToSend);
    document.location.href='game.php';
// Send the data to the PHP script
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
   
</body>
<footer>Presented by Team Boblin</footer>
</html>