<?php 
session_start();//inizia la connessione e crea l'ID (nel caso di prima connessione)
if(isset($_SESSION['login_effettuato'])){
    $user=$_SESSION['utente'];
    $cognome=$_SESSION['cognome'];
    $nome=$_SESSION['nome'];
    $_SESSION['skin']=0;
}
else {
    $user=" ";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu</title>
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
    </nav>
    <div id="logout">Logout</div>
    <h1>Classifica degli utenti</h1>
    <main id="zona_classifica">
    
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
            
            var dataToSend = "current_user=<?php echo $user;?>";
            console.log(dataToSend);

// Prepare the data to send
var xhr = new XMLHttpRequest();
// Create a new XMLHttpRequest object
xhr.open("POST", "invio_classifica.php", true);
// Specify the request method, PHP script URL, and asynchronous
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// Set the content type
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {

        // Check if the request is complete
        if (xhr.status === 200) {

            // Check if the request was successful
            console.log(xhr.responseText);
            classifica=document.getElementById("zona_classifica")
            classifica.innerHTML=xhr.responseText;
            // Output the response from the PHP script
        } else {
            console.error("Error:", xhr.status);
            // Log an error if the request was unsuccessful
        }

    }
   
}
    ;
    xhr.send(dataToSend);

// Send the data to the PHP script
        


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