<?php 
session_start();//inizia la connessione e crea l'ID (nel caso di prima connessione)
if(isset($_SESSION['login_effettuato'])){
    $user=$_SESSION['utente'];
    $cognome=$_SESSION['cognome'];
    $nome=$_SESSION['nome'];
    
} else {$user="nessuno";}
$current_skin=$_SESSION['current_skin'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="stilelogin.css">
    <style>
        #voto{
            
            display: block;
            margin-top: 230px;
            padding: 20px;
            font-size: 50px;
            box-shadow: 4px 4px rgb(0, 0, 0);
            margin-right: 80px;
    float: right;
    text-align: center;
    background-image: url(immagini/pattern.jpg);
    background-size: 12%;
    border-style: ridge;
    border-width: 20px;
    border-color: rgb(198, 142, 94);
    border-radius: 20px;
        }
        canvas{
            margin: 30px;
            float: left;
            border-style: ridge;
    border-color: #ad794a;
    border-width: 20px;
    
    box-shadow: 8px 8px rgb(0, 0, 0);
        }
        button{
            clear: right;
            float: right;
            display: block;
            padding: 10px;
            margin-top: 200px;
            margin-right: 150px;
            margin-bottom: 50px;
           font-size: 30px;
        }
        #gameover{
            position: absolute;
            left: 270px;
            right: auto;
            top: 180px;
            bottom: auto;
            width: 450px;
        }
        small{clear: both;
            display: block;
        }
        #invio_classifica{
            margin-top: 30px;
        }
    </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Link to the Exam</title>
</head>
<body>
   <main id="gameover">
    <h1>Il Tuo Voto</h1>
    <div>Hai ottenuto <span = id="voto_finale">num</span>! </div>
    <button id="invio_classifica">Invia!</button>
    <small>Sarai indirizzato alla classifica</small>
   </main>
    <canvas></canvas>
    <audio id="background-music"></audio>
    <div id="voto">voto:30
    </div>
    <button id="toggle-music"><img src="immagini/sound.png" alt="" width="80"></button>
    
    <script>
        const current_skin=<?php 
        echo "$current_skin";
        
        ?>;
        const user_cl="<?php echo "$user";?>";
        </script>
        
        <script>
            //dichiarazione audio
const music = document.getElementById("background-music");
const musicButton = document.getElementById("toggle-music");
var audio_attack = new Audio('suoni/attack.wav');
        audio_attack.volume=0.02
// Lista delle canzoni
const playlist = [
    "suoni/music1.mp3",
    "suoni/music2.mp3",
    "suoni/music3.mp3"
];

let currentTrack = 0; // Traccia attuale

// Funzione per riprodurre la traccia attuale
function playMusic() {
    music.src = playlist[currentTrack]; // Imposta il file audio
    music.play();
}

// Quando la traccia finisce, passa alla successiva
music.addEventListener("ended", function () {
    currentTrack = (currentTrack + 1) % playlist.length; // Passa alla successiva o ricomincia
    playMusic();
});

// Bottone per attivare/disattivare la musica
musicButton.addEventListener("click", function () {
    if (music.paused) {
        playMusic();
        musicButton.firstChild.src = "immagini/mute.png";
    } else {
        music.pause();
        musicButton.firstChild.src = "immagini/sound.png";
    }
});

// Avvio automatico dopo un'interazione
document.addEventListener("click", function () {
    if (music.paused) {
        playMusic();
    }
}, { once: true }); // L'evento viene eseguito solo una volta

// Controllo se una musica era già in riproduzione
if (localStorage.getItem("currentTrack")) {
    currentTrack = parseInt(localStorage.getItem("currentTrack"));
}

// Salva la traccia attuale ogni volta che cambia
music.addEventListener("ended", function () {
    currentTrack = (currentTrack + 1) % playlist.length;
    localStorage.setItem("currentTrack", currentTrack); // Salva la traccia
    playMusic();
});

// Quando cambia pagina, mantiene lo stato della musica
window.addEventListener("beforeunload", function () {
    localStorage.setItem("currentTrack", currentTrack);
});

        campo_gameover=document.getElementById("gameover")
        campo_gameover.style.setProperty("display","none")
        console.log("User corrente: <?php echo "$user"; ?> ")
        voto_finale=document.getElementById("voto_finale");
        
        </script>
        
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