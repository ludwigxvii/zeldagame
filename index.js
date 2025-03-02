// Codice javascript da importare
//sleziono canvas dal body e c il suo contesto 2d
const canvas =document.querySelector('canvas')
const voto = document.getElementById('voto')
console.log("Stampa qualcosa")
voto.innerHTML="voto:30"
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

let eliminatedEnemies = new Set();

//level è la variabile che se cambiata cambia la stanza corrente, andrà implementata la collisione della porta nell'index, poi vi mando un
//video con il minutaggio
let level = 4;
let levels = {
    1: {
        init: () => {
            blockclass = new BlocchiCollisione(1);
            player.blocchiCollisione = blockclass.blocchiCollisione;
            console.log('Blocchi di collisione caricati:', player.blocchiCollisione.length);

            enemy_group = new Enemy_Group(1);

            let enemySprite = new Image();
            enemySprite.src = './immagini/nemici/warrior_walkdown.png';
            

            player.enemies = enemy_group.enemies;
            enemy_group.blocchiCollisione = blockclass.blocchiCollisione;
            background_stanza.image.src = './immagini/stanze/mapcenter.png';
            player.position.x = 512;
            player.position.y = 500;
        }
    },
    2: {
        init: () => {
            blockclass = new BlocchiCollisione(2);
            player.blocchiCollisione = blockclass.blocchiCollisione;
            console.log('Blocchi di collisione caricati:', player.blocchiCollisione.length);

            enemy_group = new Enemy_Group(2);
            let enemySprite = new Image();
            enemySprite.src = './immagini/nemici/warrior_walkdown.png';
            enemySprite.onload = function () {
                let nemiciStanza = [
                    { id: "enemy2A", position: { x: 330, y: 520 } },
                    { id: "enemy2B", position: { x: 450, y: 520 } },
                    { id: "enemy2C", position: { x: 570, y: 520 } }
                ];
            
                nemiciStanza.forEach(nemico => {
                    if (!eliminatedEnemies.has(nemico.id)) { // Non rigenera i nemici eliminati
                        enemy_group.add(new StationaryEnemy({
                            id: nemico.id,
                            numero_frame: 4,
                            source: enemySprite.src,
                            blocchiCollisione: blockclass.blocchiCollisione,
                            position: nemico.position
                        }));
                    }
                });
            };
            
            player.enemies = enemy_group.enemies;
            enemy_group.blocchiCollisione = blockclass.blocchiCollisione;
            background_stanza.image.src = './immagini/stanze/mapright.png';
        }
    },
    0: {
        init: () => {
            blockclass = new BlocchiCollisione(0);
            player.blocchiCollisione = blockclass.blocchiCollisione;
            console.log('Blocchi di collisione caricati:', player.blocchiCollisione.length);

            enemy_group = new Enemy_Group(0);
            let shootingEnemySprite = new Image();
            shootingEnemySprite.src = './immagini/nemici/red_octorokdown.png';
            shootingEnemySprite.onload = function () {
                let nemiciStanza = [
                    { id: "enemy0A", position: { x: 840, y: 580 } },
                    { id: "enemy0B", position: { x: 160, y: 160 } },
                    { id: "enemy0C", position: { x: 160, y: 450 } }
                ];
            
                nemiciStanza.forEach(nemico => {
                    if (!eliminatedEnemies.has(nemico.id)) { // Non rigenera i nemici eliminati
                        enemy_group.add(new ShootingEnemy({
                            id: nemico.id,
                            numero_frame: 4,
                            source: shootingEnemySprite.src,
                            blocchiCollisione: blockclass.blocchiCollisione,
                            position: nemico.position
                        }));
                    }
                });
            };
            
            player.enemies = enemy_group.enemies;
            enemy_group.blocchiCollisione = blockclass.blocchiCollisione;
            background_stanza.image.src = './immagini/stanze/mapleft.png';
        }
    },
    3: {
        init: () => {
            blockclass = new BlocchiCollisione(3);
            player.blocchiCollisione = blockclass.blocchiCollisione;
            enemy_group = new Enemy_Group(3);
    
            let chasingEnemySprite = new Image();
            chasingEnemySprite.src = './immagini/nemici/lynel_down.png';
    
            chasingEnemySprite.onload = function () {
                let nemiciStanza = [
                    { id: "enemy3A", position: { x: 820, y: 400 } },
                    { id: "enemy3B", position: { x: 110, y: 400 } }
                ];
    
                nemiciStanza.forEach(nemico => {
                    if (!eliminatedEnemies.has(nemico.id)) {
                        enemy_group.add(new ChasingEnemy({
                            id: nemico.id,
                            numero_frame: 4,
                            source: chasingEnemySprite.src,
                            blocchiCollisione: blockclass.blocchiCollisione,
                            position: nemico.position
                        }));
                    }
                });
            };
    
            player.enemies = enemy_group.enemies;
            enemy_group.blocchiCollisione = blockclass.blocchiCollisione;
            background_stanza.image.src = './immagini/stanze/maptopv3.png';
        }
    },
    4: {
        init: () => {
            blockclass = new BlocchiCollisione(4);
            player.blocchiCollisione = blockclass.blocchiCollisione;
            console.log('Blocchi di collisione caricati:', player.blocchiCollisione.length);

            enemy_group = new Enemy_Group(4);
            // aggiungere nemici che inseguono
            
            //console.log('Nemici caricati:', enemy_group);

            // Assegna i blocchi di collisione anche ai nemici
            //player.enemies = enemy_group.enemies;
            //enemy_group.blocchiCollisione = blockclass.blocchiCollisione;

            // Carica l'immagine di sfondo della stanza
            background_stanza.image.src = './immagini/stanze/mapfuori.png';

           
        }
    },
    5: {
        init: () => {
            player.position.x=618
            player.position.y=30
            blockclass = new BlocchiCollisione(5);
            player.blocchiCollisione = blockclass.blocchiCollisione;
            console.log('Blocchi di collisione caricati:', player.blocchiCollisione.length);

            enemy_group = new Enemy_Group(4);
            // aggiungere nemici che inseguono
            enemy_group.add(new BossGanon({position:{x:302,y:305},blocchiCollisione:blockclass.blocchiCollisione}))
            console.log('Nemici caricati:', enemy_group);

            // Assegna i blocchi di collisione anche ai nemici
            player.enemies = enemy_group.enemies;
            enemy_group.blocchiCollisione = blockclass.blocchiCollisione;

            // Carica l'immagine di sfondo della stanza
            background_stanza.image.src = './immagini/stanze/mapboss.png';

           
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
    position: { x: 0, y: 253 },
    source: './immagini/stanze/porta_sinistra_aperta.png',
});

const portadestra = new Sprite({
    position: { x: 919, y: 253 },
    source: './immagini/stanze/porta_destra_aperta.png',
});

const portasopra = new Sprite({
    position: { x: 395, y: 0 },
    source: './immagini/stanze/porta_sopra_aperta.png',
});
const portaboss = new Sprite({
    position: { x: 395, y: 0 },
    source: './immagini/stanze/porta_boss_aperta.png',
});

const portasotto = new Sprite({
    position: { x: 384, y: 663},
    source: './immagini/stanze/porta_sotto_aperta.png',
});
//funzione per aggiornare il voto
function aggiornaVoto() {
    let votoTesto = player.voto === 31 ? "30L" : player.voto;
    document.getElementById("voto").innerText = `Voto: ${votoTesto}`;
}
levels[level].init()
function checkDoorCollision() {
    // Controlla collisione con la porta destra (passa alla stanza successiva)
    if (
        player.position.x + player.width >= portadestra.position.x+200 &&
        player.position.x<=portadestra.position.x+portadestra.width+200 &&
        player.position.y + player.height >= portadestra.position.y &&
        player.position.y <= portadestra.position.y + portadestra.height
    ) {
        cambiaStanza(level + 1, 'destra'); // Passa alla stanza successiva
    }

    // Controlla collisione con la porta sinistra (torna alla stanza precedente)
    if (
        player.position.x <= portasinistra.position.x-200 + portasinistra.width &&
        player.position.x+player.width >= portasinistra.position.x-200 &&
        player.position.y + player.height >= portasinistra.position.y &&
        player.position.y <= portasinistra.position.y + portasinistra.height
    ) {
        cambiaStanza(level - 1, 'sinistra'); // Torna alla stanza precedente
    }

    // Controlla collisione con la porta superiore (passa alla stanza sopra)
    if (
        player.position.x + player.width >= portasopra.position.x &&
        player.position.x <= portasopra.position.x + portasopra.width &&
        player.position.y <= portasopra.position.y + portasopra.height-200 &&
        player.position.y+player.height >= portasopra.position.y-200
    ) {
        if(level==3)cambiaStanza(level + 1, 'sopra');
        else cambiaStanza(level + 2, 'sopra'); // Passa alla stanza sopra (3)
    }
    if (
        player.position.x + player.width >= portasotto.position.x &&
        player.position.x <= portasotto.position.x + portasotto.width &&
        player.position.y <= portasotto.position.y + portasotto.height+200 &&
        player.position.y+player.height >= portasotto.position.y+200
    ) {
        cambiaStanza(level - 2, 'sotto'); // Passa alla stanza sotto (1)
    }
}

function cambiaStanza(nuovoLevel, direzione) {
    if (levels[nuovoLevel]) { // Controlla se la stanza esiste
        level = nuovoLevel;
        levels[level].init(); // Inizializza la nuova stanza

        // Posiziona il player al centro della porta della nuova stanza
        if (direzione === 'destra') {
            player.position.x = portasinistra.position.x + (portasinistra.width / 2) - (player.width / 2); // Centro esatto della porta sinistra
            player.position.y = portasinistra.position.y + (portasinistra.height / 2) - (player.height / 2);
        } else if (direzione === 'sinistra') {
            player.position.x = portadestra.position.x + (portadestra.width / 2) - (player.width / 2); // Centro esatto della porta destra
            player.position.y = portadestra.position.y + (portadestra.height / 2) - (player.height / 2);
        } else if (direzione === 'sopra') {
            if(nuovoLevel==4){
                player.position.x=598
            player.position.y=451
            } else {player.position.x = portasotto.position.x + (portasotto.width / 2) - (player.width / 2); // Centro della porta inferiore
            player.position.y = portasotto.position.y}
            
        } else if (direzione === 'sotto') {
            player.position.x = portasopra.position.x + (portasopra.width / 2) - (player.width / 2); // Centro della porta superiore
            player.position.y = portasopra.position.y
        }
    }
}
function game_over(player){
    //console.log("GAME OVER")
    if(player.voto!=31)voto_finale.innerHTML=player.voto
    else voto_finale.innerHTML="30 e Lode"
campo_gameover.style.setProperty("display","unset")

invio_classifica=document.getElementById("invio_classifica")
invio_classifica.onclick= function(){

                    
var xhr = new XMLHttpRequest();

var dataToSend = "current_user="+user_cl+"&voto="+player.voto;
// Create a new XMLHttpRequest object
xhr.open("POST", "punteggio.php", true);

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
    
// Send the data to the PHP script
        
                document.location.href='classifica.php';
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
    
    //disegno del player e del nemico
    player.draw()
    enemy_group.draw()
    enemy_group.update(player);
    if(level==5){console.log("I nemici nella stanza sono:",enemy_group.enemies.length)
        if(enemy_group.enemies.length==0)game_over(player)
    }
    //disegno del frame di animazione relativo al player in se( dato che è diverso da uno sprite generico)
    player.update()
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
        portaboss.draw()
    }
    //chiama la funzione per aggiornare il voto
    aggiornaVoto();
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
    audio_attack.play()
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
