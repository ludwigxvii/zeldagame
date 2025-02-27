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
            margin: 30px;
            float: left;
            border-style: ridge;
    border-color: #ad794a;
    border-width: 20px;
    border: none;
    box-shadow: 8px 8px rgb(0, 0, 0);
        }
        button{
            margin-top: 300px;
            display: inline;
           font-size: 30px;
        }
    </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Link to the Exam</title>
</head>
<body>
   
    <canvas></canvas>
    <audio id="background-music"></audio>
    <button id="toggle-music"> Play/Pausa</button>
    <header id="voto">voto:30
    </header>
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
    <script src="classi/projectile.js"></script>
    <script src="classi/BossGanon.js"></script>
    <script src="classi/Player.js"></script>
    
    
    <script src="index.js"></script>
    
</body>
</html>