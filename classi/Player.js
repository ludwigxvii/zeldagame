class Player extends Sprite {
    constructor({
        blocchiCollisione = [], source, numero_frame, animazioni,enemy = []
    }) {
        super({ source,numero_frame,animazioni })
        //posizione iniziale del giocatore, da definire meglio in base alla mappa
        this.position={
            x: 200,
            y:100
        }
        //array dei nemici che dovrà ereditare dall'index, attualmente è uno solo ma esattamente come per i blocchi dovrà essere
        //implementato come array da scorrere
        this.height = 60
        this.width = 40
        this.velocity = {
            x:0,
            y:0
        }
        this.audio_bloc = new Audio('suoni/blocco.wav');
        this.audio_bloc.volume=0.01
        //ultimo lato su cui si affaccia il player
        this.ultimo_lato='nullo'
        //variabile attiva solo durante l'attacco
        this.isattacking=false
        this.timer=0
        //raccolta della classe con l'array dei blocchi
        this.blocchiCollisione=blocchiCollisione
        //questo console log non è necessario ma scrive quanti blocchi sono stati caricati
        this.enemies=enemy
        
        //posizione iniziale dell'Hitbox dell'attacco (in giallo) per la quale sono calcolate le hitbox con i nemici quando subiscono danno
        //non fondamentale riempirla ma deve essere creata per poi essere modificata dall'update
        this.attack_box = {
            x:this.position.x,
            y:this.position.y,
            width: 5,
            height:5,
        }
        //due variabili che possono essere usate ed aggiornate per rappresentare un lato opposto ad x ed y
        this.other_sides = {
            bottom: this.position.y+this.height,
            right: this.position.x+this.width,
        }
        //voto del player
        this.voto = 31; 
        // All'inizio il player può subire danno
        this.invincibile = false; 
        // Indica se l'effetto lampeggiante è attivo
        this.lampeggia = false; 
    }
    //funzione che in base alle info della animazione corrispondente cambia e modifica le principali variabili dello sprite
    cambia_sprite(name){
        if (this.image === this.animazioni[name].image) return
        this.frame_corrente=0
        //imposto a zero perchè se un animazione interrompe un'altra, la seconda deve iniziare da zero
        this.image = this.animazioni[name].image
        //cambio l'immagine del player con quella dell'animazione attualmente selezionata (in base al name fornito viene selezionato l'elemento con quel nome)
        this.numero_frame = this.animazioni[name].framerate
        //cambio del framerate poichè non tutte sono da 16 frame
        this.divisore_frame = this.animazioni[name].divisore_frame
        //il divisore che decide la velocità di selezione del frame, più alto è  più lenta è l'animazione
    }
    //funzione chiamata alla pressione della barra spaziatrice
    attack(){
        console.log('attacco')
        if(!this.isattacking)this.isattacking = true
        
    }
    //funzione chiamata per aggiornare il voto del player e applica l'invincibilità per un periodo limitato
    subisciDanno() {
        if (this.invincibile) return; // Se è invincibile, ignora il danno
    
        this.voto--; // Diminuisce il voto
        aggiornaVoto(); // Aggiorna il voto visibile sullo schermo
    
        this.invincibile = true; // Attiva l'invincibilità
        this.lampeggia = true; // Inizia l'effetto lampeggiante
    
        let lampeggio = setInterval(() => {
            this.lampeggia = !this.lampeggia; // Alterna lo stato per creare il lampeggio
        }, 200); // Cambia ogni 200ms
    
        setTimeout(() => {
            clearInterval(lampeggio); // Ferma il lampeggio dopo 2 secondi
            this.invincibile = false; // Rimuove l'invincibilità
            this.lampeggia = false; // Rimuove l'effetto lampeggiante
        }, 2000);
    }
    
    
     update(){
        //lo switch case che regola la posizione della hitbox di atatcco
        
        //console.log('il player sta attaccando?:',this.isattacking)
        switch(this.ultimo_lato){
            case 'su':
                this.attack_box.x=this.position.x+50
                this.attack_box.y=this.position.y+5
                
            break
            case 'giu':
                this.attack_box.x=this.position.x+50
                this.attack_box.y=this.position.y+95
                
            break
            case 'destra':
                this.attack_box.x=this.position.x+95
                this.attack_box.y=this.position.y+50
                
            break
            case 'sinistra':
                this.attack_box.x=this.position.x+5
                this.attack_box.y=this.position.y+50
                
            break
        }
        //questo if può essere inserito in una funzione a parte ma è quello che controlla se uno dei nemici è nella hitbox di attacco, 
        //precisamente se il suo centro è nella hitbox, e rende danno true in quel frangente
        //FONDAMENTALE: QUESTO VA INSERITO IN UN FOREACH DELL'ARRAY DEI NEMICI ESATTAMENET COME IL CONTROLLO DELLE COLLISIONI DEI BLOCCHI
        for (let i = 0; i< this.enemies.length; i++){
            const nemico = this.enemies[i]
        if(this.isattacking && this.attack_box.x >nemico.hitbox.position.x && this.attack_box.x < nemico.hitbox.position.x+nemico.hitbox.width &&
            this.attack_box.y >nemico.hitbox.position.y && this.attack_box.y < nemico.hitbox.position.y+nemico.hitbox.height 
        ){
            nemico.danno=true
            
                switch(this.ultimo_lato){
                    case 'su':
                    nemico.velocity.y-=0.1
                break
                case 'giu':
                    nemico.velocity.y+=0.1
                break
                case 'destra':
                    nemico.velocity.x+=0.1
                break
                case 'sinistra':
                    nemico.velocity.x=-0.1
                break
            }   
            if (nemico.vita <= 0) {
                eliminatedEnemies.add(nemico.id);  // Aggiunge il nemico eliminato alla lista globale
                this.enemies.splice(i, 1);
            }
            
            }
        else nemico.danno=false
    }
    if(this.isattacking){
        this.timer+=1
        if(this.timer >= 20){
            this.timer=0
            this.isattacking=false
            console.log('FINE ATTACCO')
        }
    }
        //if(this.frame_corrente==7)this.isattacking = false
        //console.log('atatcco: ',this.isattacking)
        //console.log('ultimo lato:',this.ultimo_lato)
        this.position.x += this.velocity.x
        
        //controllo collisioni orizzontali
        //Aggiorna la hitbox alla posizione attuale prima dell controllo delle collisioni orizzontale
        this.hitbox = {
            position:{
            x: this.position.x+30,
            y:this.position.y+20
        },
        width: 40,
        height: 60,
    }
    //foreach che attraversa tutti i blocchi di collisione prima di aumentare la x
        for (let i = 0; i< this.blocchiCollisione.length; i++){
            const collisionBlock = this.blocchiCollisione[i]


            if(this.hitbox.position.x <= collisionBlock.position2.x &&
                this.hitbox.position.x+ this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position2.y
                ){
                    //collisione sulle varie direzioni
                console.log('COLLISIONE')
                this.audio_bloc.play();
                if(this.velocity.x <-0) {
                    const offset = this.hitbox.position.x - this.position.x
                    this.position.x = collisionBlock.position2.x-offset+1
                    break}
                if(this.velocity.x > 0) {
                    const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
                    this.position.x = collisionBlock.position.x-offset-1
                    
                    break}
                
            }
            
        }
        //aggiornamento della posizione della hitbox dopo il primo controllo
        this.position.y += this.velocity.y
        this.hitbox = {
            position:{
            x: this.position.x+30,
            y:this.position.y+20
        },
        width: 40,
        height: 60,}
        //visualizzatore hitbox del personaggio, coincide con link per l'animazioni di base
         //c.fillRect(this.hitbox.position.x,this.hitbox.position.y,this.hitbox.width,this.hitbox.height)
        
        //check verticale
        //foreach che attraversa tutti i blocchi di collisione prima di aumentare la y
        for (let i = 0; i< this.blocchiCollisione.length; i++){
            const collisionBlock = this.blocchiCollisione[i]


            if(this.hitbox.position.x <= collisionBlock.position2.x &&
                this.hitbox.position.x+ this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position2.y
                ){
                    //collisione sulle varie direzioni
                console.log('COLLISIONE')
                this.audio_bloc.play();
                if(this.velocity.y <0) {
                    const offset = this.hitbox.position.y - this.position.y
                    this.position.y = collisionBlock.position2.y- offset +1
                break}
                if(this.velocity.y > 0) {
                    
                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
                    this.position.y = collisionBlock.position.y- offset -1
                break}
            }
        }
        
        c.fillStyle = 'yellow'
        c.fillRect(this.attack_box.x,this.attack_box.y,this.attack_box.width,this.attack_box.height)
       
    if(this.other_sides.bottom + this.velocity.y < canvas.height){
         this.other_sides.bottom=this.position.y+this.height
        
    } else {this.velocity.y = 0 }
    if (this.lampeggia) {
        //c.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Colore rosso semi-trasparente
        //c.beginPath();
        //c.arc(this.position.x + this.width / 2, this.position.y + this.height / 2, 40, 0, Math.PI * 2);
        //c.fill();
        var cuore_rotto = new Image();
        cuore_rotto.src='immagini/cuore_rotto.png'
        c.drawImage(cuore_rotto,this.position.x+40,this.position.y)
    }
     }
    }