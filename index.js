// Codice javascript da importare
//sleziono canvas dal body e c il suo contesto 2d
const canvas =document.querySelector('canvas')
const voto = document.getElementById('voto')
console.log("Stampa qualcosa")
voto.innerHTML="voto controllato"
canvas.width = 256 * 4
canvas.height = 256 * 3
const c = canvas.getContext('2d')
//La variabile che viene modificata nel momento in cui un tasto premuto viene rilevato dall EventListener
const pulsanti = {
    su: {pressed: false},
    giu: {pressed: false},
    destra: {pressed: false},
    sinistra: {pressed: false}
}
//dichiarazione audio
const music = document.getElementById("background-music");
const musicButton = document.getElementById("toggle-music");

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
        musicButton.textContent = " Mute";
    } else {
        music.pause();
        musicButton.textContent = " Play";
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


//level è la variabile che se cambiata cambia la stanza corrente, andrà implementata la collisione della porta nell'index, poi vi mando un
//video con il minutaggio
let level = 1;
let levels = {
    1: {
        init: () => {
            blockclass = new BlocchiCollisione(1);
            player.blocchiCollisione = blockclass.blocchiCollisione;
            console.log('Blocchi di collisione caricati:', player.blocchiCollisione.length);

            enemy_group = new Enemy_Group(1);
            console.log('Nemici caricati:', enemy_group);

            // Assegna i blocchi di collisione anche ai nemici
            player.enemies = enemy_group.enemies;
            enemy_group.blocchiCollisione = blockclass.blocchiCollisione;

            // Carica l'immagine di sfondo della stanza
            background_stanza.image.src = './immagini/stanze/stanza1.png';

            // Ripristina la posizione del giocatore all'entrata della stanza
            player.position.x = 478;  // Cambia se necessario
            player.position.y = 300;
        }
    },
    2: {
        init: () => {
            blockclass = new BlocchiCollisione(2);
            player.blocchiCollisione = blockclass.blocchiCollisione;
            console.log('Blocchi di collisione caricati:', player.blocchiCollisione.length);

            enemy_group = new Enemy_Group(2);
            // Aggiunta di nemici stazionari nella stanza 2
            enemy_group.add(new StationaryEnemy(250, 180));
            enemy_group.add(new StationaryEnemy(450, 280));
            enemy_group.add(new StationaryEnemy(650, 380));
            console.log('Nemici caricati:', enemy_group);

            // Assegna i blocchi di collisione anche ai nemici
            player.enemies = enemy_group.enemies;
            enemy_group.blocchiCollisione = blockclass.blocchiCollisione;

            // Carica l'immagine di sfondo della stanza
            background_stanza.image.src = './immagini/stanze/stanza2.png';

        }
    },
    0: {
        init: () => {
            blockclass = new BlocchiCollisione(2);
            player.blocchiCollisione = blockclass.blocchiCollisione;
            console.log('Blocchi di collisione caricati:', player.blocchiCollisione.length);

            enemy_group = new Enemy_Group(2);
            enemy_group.add(new ShootingEnemy(250, 180));
            enemy_group.add(new ShootingEnemy(450, 280));
            enemy_group.add(new ShootingEnemy(650, 380));
            console.log('Nemici caricati:', enemy_group);

            // Assegna i blocchi di collisione anche ai nemici
            player.enemies = enemy_group.enemies;
            enemy_group.blocchiCollisione = blockclass.blocchiCollisione;

            // Carica l'immagine di sfondo della stanza
            background_stanza.image.src = './immagini/stanze/stanza0.png';

        }
    },
    3: {
        init: () => {
            blockclass = new BlocchiCollisione(2);
            player.blocchiCollisione = blockclass.blocchiCollisione;
            console.log('Blocchi di collisione caricati:', player.blocchiCollisione.length);

            enemy_group = new Enemy_Group(2);
            enemy_group.add(new ChasingEnemy(250, 180));
            enemy_group.add(new ChasingEnemy(450, 280));
            enemy_group.add(new ChasingEnemy(650, 380));
            console.log('Nemici caricati:', enemy_group);

            // Assegna i blocchi di collisione anche ai nemici
            player.enemies = enemy_group.enemies;
            enemy_group.blocchiCollisione = blockclass.blocchiCollisione;

            // Carica l'immagine di sfondo della stanza
            background_stanza.image.src = './immagini/stanze/stanza3.png';

           
        }
    }
};

//blockclass è l'oggetto di classe blocchicollisione con cui ho definito l'array contenente i blocchi di collisione 
//è necessario che sia array perchè così scorrendolo con foreach si controllano tutte le collisioni, tecnicamente 
//è una classe contenente array per questo blockclass.blocchicollisione
var blockclass = new BlocchiCollisione()
var enemy_group = new Enemy_Group()

//Dichiarazione del player, una classe che ha bisogno di accedere all'array dei blocchi di collisione, larray dei nemici con cui interagisce
//e le animazioni di cui è composto

if(current_skin==2){
    var source= './immagini/link/idle_down_red.png'
    var animazioni={
    //Nome dell'animazione, quanti frame ha, il divisiore regola la velocità, tanto più è alto tanto più è lenta
    //lasciate perdere il loop, non è ancora implementato e non è necessaria, ovviamente source è la posizione dello sprite
    idle_down:{
        framerate:2,
        divisore_frame:12,
        loop:true,
        source: './immagini/link/idle_down_red.png'
    },
    idle_up:{
        framerate:2,
        divisore_frame:12,
        loop:true,
        source: './immagini/link/idle_up_red.png'
    },
    idle_left:{
        framerate:2,
        divisore_frame:12,
        loop:true,
        source: './immagini/link/idle_left_red.png'
    },
    idle_right:{
        framerate:2,
        divisore_frame:12,
        loop:true,
        source: './immagini/link/idle_right_red.png'
    },
    walking_up:{
        framerate:16,
        divisore_frame:6,
        loop:true,
        source: './immagini/link/walking_up_red.png'
    },
    walking_left:{
        framerate:16,
        divisore_frame:6,
        loop:true,
        source: './immagini/link/walking_left_red.png'
    },
    walking_right:{
        framerate:16,
        divisore_frame:6,
        loop:true,
        source: './immagini/link/walking_right_red.png'
    },
    walking_down:{
        framerate:16,
        divisore_frame:6,
        loop:true,
        source: './immagini/link/walking_down_red.png'
    },
    attack_right:{
        framerate:8,
        divisore_frame:3,
        loop:false,
        source: './immagini/link/attack_right_red.png'
    },
    attack_left:{
        framerate:8,
        divisore_frame:3,
        loop:false,
        source: './immagini/link/attack_left_red.png'
    },
    attack_up:{
        framerate:8,
        divisore_frame:3,
        loop:false,
        source: './immagini/link/attack_up_red.png'
    },
    attack_down:{
        framerate:8,
        divisore_frame:3,
        loop:false,
        source: './immagini/link/attack_down_red.png'
    },
    
}}
if(current_skin==1){
    var source= './immagini/link/idle_down.png'
    var animazioni={
    //Nome dell'animazione, quanti frame ha, il divisiore regola la velocità, tanto più è alto tanto più è lenta
    //lasciate perdere il loop, non è ancora implementato e non è necessaria, ovviamente source è la posizione dello sprite
    idle_down:{
        framerate:2,
        divisore_frame:12,
        loop:true,
        source: './immagini/link/idle_down.png'
    },
    idle_up:{
        framerate:2,
        divisore_frame:12,
        loop:true,
        source: './immagini/link/idle_up.png'
    },
    idle_left:{
        framerate:2,
        divisore_frame:12,
        loop:true,
        source: './immagini/link/idle_left.png'
    },
    idle_right:{
        framerate:2,
        divisore_frame:12,
        loop:true,
        source: './immagini/link/idle_right.png'
    },
    walking_up:{
        framerate:16,
        divisore_frame:6,
        loop:true,
        source: './immagini/link/walking_up.png'
    },
    walking_left:{
        framerate:16,
        divisore_frame:6,
        loop:true,
        source: './immagini/link/walking_left.png'
    },
    walking_right:{
        framerate:16,
        divisore_frame:6,
        loop:true,
        source: './immagini/link/walking_right.png'
    },
    walking_down:{
        framerate:16,
        divisore_frame:6,
        loop:true,
        source: './immagini/link/walking_down.png'
    },
    attack_right:{
        framerate:8,
        divisore_frame:3,
        loop:false,
        source: './immagini/link/attack_right.png'
    },
    attack_left:{
        framerate:8,
        divisore_frame:3,
        loop:false,
        source: './immagini/link/attack_left.png'
    },
    attack_up:{
        framerate:8,
        divisore_frame:3,
        loop:false,
        source: './immagini/link/attack_up.png'
    },
    attack_down:{
        framerate:8,
        divisore_frame:3,
        loop:false,
        source: './immagini/link/attack_down.png'
    },
    
}}
if(current_skin==0){
    var source= './immagini/link/idle_down_blu.png'
    var animazioni={
    //Nome dell'animazione, quanti frame ha, il divisiore regola la velocità, tanto più è alto tanto più è lenta
    //lasciate perdere il loop, non è ancora implementato e non è necessaria, ovviamente source è la posizione dello sprite
    idle_down:{
        framerate:2,
        divisore_frame:12,
        loop:true,
        source: './immagini/link/idle_down_blu.png'
    },
    idle_up:{
        framerate:2,
        divisore_frame:12,
        loop:true,
        source: './immagini/link/idle_up_blu.png'
    },
    idle_left:{
        framerate:2,
        divisore_frame:12,
        loop:true,
        source: './immagini/link/idle_left_blu.png'
    },
    idle_right:{
        framerate:2,
        divisore_frame:12,
        loop:true,
        source: './immagini/link/idle_right_blu.png'
    },
    walking_up:{
        framerate:16,
        divisore_frame:6,
        loop:true,
        source: './immagini/link/walking_up_blu.png'
    },
    walking_left:{
        framerate:16,
        divisore_frame:6,
        loop:true,
        source: './immagini/link/walking_left_blu.png'
    },
    walking_right:{
        framerate:16,
        divisore_frame:6,
        loop:true,
        source: './immagini/link/walking_right_blu.png'
    },
    walking_down:{
        framerate:16,
        divisore_frame:6,
        loop:true,
        source: './immagini/link/walking_down_blu.png'
    },
    attack_right:{
        framerate:8,
        divisore_frame:3,
        loop:false,
        source: './immagini/link/attack_right_blu.png'
    },
    attack_left:{
        framerate:8,
        divisore_frame:3,
        loop:false,
        source: './immagini/link/attack_left_blu.png'
    },
    attack_up:{
        framerate:8,
        divisore_frame:3,
        loop:false,
        source: './immagini/link/attack_up_blu.png'
    },
    attack_down:{
        framerate:8,
        divisore_frame:3,
        loop:false,
        source: './immagini/link/attack_down_blu.png'
    },
}}
const player = new Player({
    source:source,
    numero_frame: 2,
    animazioni:animazioni,
 })
 //la funzione animate è il loop di requestanimationframe, cioè quella che crea ogni singolo frame
const background_stanza = new Sprite({
    position :{
    x: 0,
    y:0
},
source: './immagini/mappabase.png',
})
//dichiarazione porte
const portasinistra = new Sprite({
    position: { x: 0, y: 355 },
    source: './immagini/porte/portaorizzontale.png',
});

const portadestra = new Sprite({
    position: { x: 984, y: 355 },
    source: './immagini/porte/portaorizzontale.png',
});

const portasopra = new Sprite({
    position: { x: 435, y: 0 },
    source: './immagini/porte/portaverticale.png',
});

const portasotto = new Sprite({
    position: { x: 435, y: 710},
    source: './immagini/porte/portaverticale.png',
});

levels[level].init()
function checkDoorCollision() {
    // Controlla collisione con la porta destra (passa alla stanza successiva)
    if (
        player.position.x + player.width >= portadestra.position.x &&
        player.position.y + player.height >= portadestra.position.y &&
        player.position.y <= portadestra.position.y + portadestra.height
    ) {
        cambiaStanza(level + 1, 'destra'); // Passa alla stanza successiva
    }

    // Controlla collisione con la porta sinistra (torna alla stanza precedente)
    if (
        player.position.x <= portasinistra.position.x + portasinistra.width &&
        player.position.y + player.height >= portasinistra.position.y &&
        player.position.y <= portasinistra.position.y + portasinistra.height
    ) {
        cambiaStanza(level - 1, 'sinistra'); // Torna alla stanza precedente
    }

    // Controlla collisione con la porta superiore (passa alla stanza sopra)
    if (
        player.position.x + player.width >= portasopra.position.x &&
        player.position.x <= portasopra.position.x + portasopra.width &&
        player.position.y <= portasopra.position.y + portasopra.height
    ) {
        cambiaStanza(level + 2, 'sopra'); // Passa alla stanza sopra (3)
    }
}

function cambiaStanza(nuovoLevel, direzione) {
    if (levels[nuovoLevel]) { // Controlla se la stanza esiste
        level = nuovoLevel;
        levels[level].init(); // Inizializza la nuova stanza

        // Posiziona il player all'entrata della nuova stanza in base alla direzione
        if (direzione === 'destra') {
            player.position.x = portasinistra.position.x + portasinistra.width + 10; // Entra da sinistra
        } else if (direzione === 'sinistra') {
            player.position.x = portadestra.position.x - player.width - 10; // Entra da destra
        } else if (direzione === 'sopra') {
            player.position.x = portasotto.position.x + (portasotto.width / 2) - (player.width / 2); // Centra il player
            player.position.y = portasotto.position.y - player.height ; // Appena sotto la porta
        } else if (direzione === 'sotto') {
            player.position.x = portasopra.position.x ; // Allinea al centro della porta
            player.position.y = 50; // Entra dall'alto della stanza sotto
        }
    }
}



function animate(){
    frame_veloce =1

    //reset della velocità ad ogni frame così viene decisa solo dal tasto premuto
    player.velocity.x=0
    player.velocity.y=0
   
    if(pulsanti.su.pressed){
        
        if(!player.isattacking)
            {player.cambia_sprite('walking_up')
                player.velocity.y=-4
            }
            else 
            //per bilanciamento durante gli attacchi la velocità è ridotta la velocità di attacco (oltre che cambiare lo sprite con il corrispondente
        // sprite)
        {player.cambia_sprite('attack_up')
            player.velocity.y=-2
        }
    }
    else if(pulsanti.giu.pressed){
        player.velocity.y=4
        if(!player.isattacking)player.cambia_sprite('walking_down')
            else 
        {player.cambia_sprite('attack_down')
            player.velocity.y=2
        }
    }
    else if(pulsanti.destra.pressed) {player.velocity.x=4
        if(!player.isattacking)player.cambia_sprite('walking_right')
            else 
        {player.cambia_sprite('attack_right')
            player.velocity.x=2
        }
    }
    else if(pulsanti.sinistra.pressed) {player.velocity.x=-4
        if(!player.isattacking)player.cambia_sprite('walking_left')
            else 
        {player.cambia_sprite('attack_left')
            player.velocity.x=-2
        }
    }
    //questo else è l'animazione di idle che viene generata se nessun tasto è premuto, collegato al cambio se il player attacca
    else{
        if(player.ultimo_lato === 'su'){
            if(!player.isattacking)player.cambia_sprite('idle_up')
            else player.cambia_sprite('attack_up')}
            if(player.ultimo_lato === 'giu'){
                if(!player.isattacking)player.cambia_sprite('idle_down')
                else player.cambia_sprite('attack_down')}
                if(player.ultimo_lato === 'destra'){
                    if(!player.isattacking)player.cambia_sprite('idle_right')
                        else player.cambia_sprite('attack_right')}
                    if(player.ultimo_lato === 'sinistra'){
                        if(!player.isattacking)player.cambia_sprite('idle_left')
                            else player.cambia_sprite('attack_left')}
    } 
    //DISEGNO BACKGROUND
    background_stanza.draw()
    // Disegna le porte solo se sono visibili
    if (level == 1 || level == 2) {
        portasinistra.draw();
    }
    if (level == 1 || level == 0){
        portadestra.draw();
    }
    if (level == 1){
        portasopra.draw();
    }
    if (level == 3){
        portasotto.draw();
    }
    //disegno del player e del nemico
    player.draw()
    enemy_group.draw()
    enemy_group.update()
    //disegno del frame di animazione relativo al player in se( dato che è diverso da uno sprite generico)
    player.update()
    //chiama la funzione
    checkDoorCollision();
    //se è attiva la visualizzazione delle hitbox dei blocchi questa funzione la disegna
    blockclass.draw()
    //loop di tutta la funzione
    window.requestAnimationFrame(animate)
}
animate()
//funzione che legge i tasti premuti
window.addEventListener('keydown', (event) =>{
console.log(event)
switch(event.key){
case 'ArrowUp' :
    event.preventDefault()
pulsanti.su.pressed=true
pulsanti.giu.pressed=false
pulsanti.destra.pressed=false
pulsanti.sinistra.pressed=false
player.ultimo_lato='su'
    break
case 'ArrowDown' :
    event.preventDefault()
    pulsanti.giu.pressed=true
    pulsanti.su.pressed=false
    pulsanti.destra.pressed=false
    pulsanti.sinistra.pressed=false
    player.ultimo_lato='giu'
    break
case 'ArrowRight' :
    event.preventDefault()
    pulsanti.destra.pressed=true
    pulsanti.su.pressed=false
    pulsanti.giu.pressed=false
    pulsanti.sinistra.pressed=false
    player.ultimo_lato='destra'
    break
case 'ArrowLeft' :
    event.preventDefault()
    pulsanti.sinistra.pressed=true
    pulsanti.su.pressed=false
    pulsanti.giu.pressed=false
    pulsanti.destra.pressed=false
    player.ultimo_lato='sinistra'
    break
case ' ':
    event.preventDefault()
    player.attack()
    break
}

})
//funzione che legge quando il tasto viene alzato, altrimenti rimane come input "premuto"
window.addEventListener('keyup', (event) =>{
    console.log(event)
    switch(event.key){
    case 'ArrowUp' :
    pulsanti.su.pressed=false
    player.isattacking= false
        break
    case 'ArrowDown' :
        pulsanti.giu.pressed=false
        player.isattacking= false
        break
    case 'ArrowRight' :
        pulsanti.destra.pressed=false
        player.isattacking= false
        break
    case 'ArrowLeft' :
        pulsanti.sinistra.pressed=false
        player.isattacking= false
        break
    }
    
    })
    //funzione che stampa nella console la attuale posizione del mouse relativa al canvas
    canvas.addEventListener('mousemove', (event) =>{
        
        const x = event.clientX -canvas.getBoundingClientRect().left;
        const y = event.clientY -canvas.getBoundingClientRect().top;
        console.clear()
        console.log('X:',x)
        console.log('Y:',y)

        })
