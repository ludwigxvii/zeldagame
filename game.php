<?php 
session_start();//inizia la connessione e crea l'ID (nel caso di prima connessione)
if(isset($_SESSION['login_effettuato'])){
    $user=$_SESSION['utente'];
    $cognome=$_SESSION['cognome'];
    $nome=$_SESSION['nome'];
    
}
$current_skin=$_SESSION['current_skin'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="stilelogin.css">
    <style>
        header{
            font-size: 50px;
        }
        canvas{
            
            border-style: solid;
    border-color: #ad794a;
    border-width: 8px;
    box-shadow: 8px 8px rgb(0, 0, 0);
        }
        button{
            
            margin-top:30px;
            padding-left: 87px;
            padding-right: 87px;
            text-shadow: 2px 2px rgb(0, 0, 0);
            animation: fade 500ms ease-in-out;
            animation-delay: 1500ms ;
            -webkit-animation-fill-mode: forwards;
        }
    </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Link to the Exam</title>
</head>
<body>
    <audio id="background-music"></audio>
    <button id="toggle-music"> Play/Pausa</button>
    <header id="voto">voto
    </header>
    <canvas></canvas>
    <script>
        const current_skin=<?php 
        echo "$current_skin";
        ?>;
        
        </script>
        <script>// controllo console.log("Skin corrente:",current_skin)</script>
    <script src="classi/Collisione.js"></script>
    <script src="classi/enemy_group.js"></script>
    <script src="classi/BlocchiCollisione.js"></script>
    <script src="classi/Sprite.js"></script>
    <script src="classi/enemy.js"></script>
    <script src="classi/Player.js"></script>
    <script src="index.js"></script>
    <script src="classi/projectile.js"></script>
</body>
</html>