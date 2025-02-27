class Enemy extends Sprite {
    constructor({
        id, blocchiCollisione = [], source, numero_frame, animazioni
    }) {
        super({ source,numero_frame,animazioni })
        this.position={
            x: 500,
            y:100
        }
        this.height = 60
        this.width = 40
        this.velocity = {
            x:0,
            y:0
        }
        this.id = id; // Assegna un ID unico
        //immagine dei cuori che mostrano la vita 3 cuori del nemico
        const image_cuori = new Image()
                image_cuori.src = './immagini/cuori.png'
                this.cuori = image_cuori
        this.ultimo_lato='nullo'
        this.vita=3
        //la vita iniziale del nemico, è usata in rapporto di quella corrente per
        this.initial_vita=3
        this.isattacking=false
        this.blocchiCollisione=blocchiCollisione
        this.invincibilita=false
        this.danno=false
        this.timer=0
        console.log('Blocchi di collisione caricati:',this.blocchiCollisione.length)
        this.attack_box = {
            x:this.position.x,
            y:this.position.y,
            width: 30,
            height:30,
        }
        this.healthbar = {
            x:(this.position.x+this.width/2)-30,
            y:(this.position.y+5),
            width:60,
            green_width:60,
            height:20
        }
        this.other_sides = {
            bottom: this.position.y+this.height,
            right: this.position.x+this.width,
        }
    }
    cambia_sprite(name){
        if (this.image === this.animazioni[name].image) return
        this.frame_corrente=0
        this.image = this.animazioni[name].image
        this.numero_frame = this.animazioni[name].framerate
        this.divisore_frame = this.animazioni[name].divisore_frame
    }
    attack(){
        console.log('attacco')
        if(!this.isattacking)this.isattacking = true
        if(this.frame_corrente==7)this.isattacking = false
    }
    
     update(){
         //console.log('invincibilità:',this.invincibilita)
        // console.log('danno:',this.danno)
        if(this.danno && !this.invincibilita){
                this.vita--
                    this.danno=false
                    this.invincibilita=true
            console.log('vita',this.vita)
            
        }
        if(this.invincibilita){                                              
                this.timer+=1
            if(this.timer >= 30){
                this.timer=0
                this.invincibilita=false
                this.velocity.x=0
                this.velocity.y=0
                console.log('FINE ATTACCO')
            }
        
        }
        this.healthbar = {
            x:(this.position.x+this.width/2)-25,
            y:(this.position.y+7),
            width:46,
            green_width:((this.vita-this.initial_vita)/this.initial_vita)*46,
            height:12
        }
        c.drawImage(this.cuori,this.healthbar.green_width,
        0,this.healthbar.width,this.healthbar.height, this.healthbar.x,
          this.healthbar.y, this.healthbar.width, this.healthbar.height)
        
       
        
        //console.log('atatcco: ',this.isattacking)
        //console.log('ultimo lato:',this.ultimo_lato)
        this.position.x += this.velocity.x
        
        //controllo collisioni orizzontali
        
        this.hitbox = {
            position:{
            x: this.position.x+30,
            y:this.position.y+20
        },
        width: 40,
        height: 60,}

        for (let i = 0; i< this.blocchiCollisione.length; i++){
            const collisionBlock = this.blocchiCollisione[i]


            if(this.hitbox.position.x <= collisionBlock.position2.x &&
                this.hitbox.position.x+ this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position2.y
                ){
                    //collisione sulle varie direzioni
                console.log('COLLISIONE')
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
        for (let i = 0; i< this.blocchiCollisione.length; i++){
            const collisionBlock = this.blocchiCollisione[i]


            if(this.hitbox.position.x <= collisionBlock.position2.x &&
                this.hitbox.position.x+ this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position2.y
                ){
                    //collisione sulle varie direzioni
                console.log('COLLISIONE')
                
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
        
        //c.fillStyle = 'yellow'
        //c.fillRect(this.attack_box.x,this.attack_box.y,this.attack_box.width,this.attack_box.height)
       
    if(this.other_sides.bottom + this.velocity.y < canvas.height){
         this.other_sides.bottom=this.position.y+this.height
        
    } else {this.velocity.y = 0 }
     }
    }

    class StationaryEnemy extends Enemy {
        constructor({ id, blocchiCollisione = [], source, numero_frame, animazioni, position = { x: 200, y: 300 } }) {
            var animazioni = {
                walk_up: {
                    framerate: 4,
                    divisore_frame: 6,
                    loop: true,
                    source: './immagini/nemici/warrior_walkup.png'
                },
                walk_down: {
                    framerate: 4,
                    divisore_frame: 6,
                    loop: true,
                    source: './immagini/nemici/warrior_walkdown.png'
                },
                walk_right: {
                    framerate: 4,
                    divisore_frame: 6,
                    loop: true,
                    source: './immagini/nemici/warrior_walkright.png'
                },
                walk_left: {
                    framerate: 4,
                    divisore_frame: 6,
                    loop: true,
                    source: './immagini/nemici/warrior_walkleft.png'
                },
            };
    
            super({id, blocchiCollisione, source, numero_frame, animazioni });
    
            // **Imposta la posizione dal parametro ricevuto**
            this.position = { x: position.x, y: position.y };
    
            this.cambia_sprite('walk_down'); // Sprite iniziale
        }
    
        update(player) {
            if (!player) return; // Evita errori se player non è definito
    
            let dx = player.position.x - this.position.x;
            let dy = player.position.y - this.position.y;
            
            let angle = Math.atan2(dy, dx) * (180 / Math.PI); // Calcola angolo in gradi
            
            if (angle < 0) {
                angle += 360; // Porta gli angoli negativi nel range 0-360
            }
        
            // Cambia sprite in base all'angolo
            if ((angle >= 0 && angle <= 45) || (angle > 315 && angle <= 360)) {
                this.cambia_sprite('walk_right'); // 0-45° e 316-360° → Destra
            } else if (angle > 45 && angle <= 135) {
                this.cambia_sprite('walk_down'); // 46-135° → Sotto
            } else if (angle > 135 && angle <= 225) {
                this.cambia_sprite('walk_left'); // 136-225° → Sinistra
            } else if (angle > 225 && angle <= 315) {
                this.cambia_sprite('walk_up'); // 226-315° → Sopra
            }
        
            // **CONTROLLA SE IL PLAYER È TROPPO VICINO E SUBISCE DANNO**
            let distanza = Math.sqrt(dx * dx + dy * dy);
            if (distanza < 40) { // Se il player è troppo vicino (spazio per attaccare lasciato)
                player.subisciDanno();
            }
        
            super.update(); // Mantiene il comportamento base
        }
    }
    
    
      
    class ChasingEnemy extends Enemy {
        constructor({id, blocchiCollisione = [], source, numero_frame, animazioni, position }) {
            var animazioni = {
                walk_up: {
                    framerate: 4,
                    divisore_frame: 6,
                    loop: true,
                    source: './immagini/nemici/lynel_up.png'
                },
                walk_down: {
                    framerate: 4,
                    divisore_frame: 6,
                    loop: true,
                    source: './immagini/nemici/lynel_down.png'
                },
                walk_right: {
                    framerate: 4,
                    divisore_frame: 6,
                    loop: true,
                    source: './immagini/nemici/lynel_right.png'
                },
                walk_left: {
                    framerate: 4,
                    divisore_frame: 6,
                    loop: true,
                    source: './immagini/nemici/lynel_left.png'
                }
            };
    
            super({id, blocchiCollisione, source, numero_frame, animazioni });
            this.position = { x: position.x, y: position.y };
            this.speed = 1; // Il player si muove a 4, il nemico più lento
            this.cambia_sprite('walk_down');
        }
    
        update(player) {
            if (!player) return;
    
            // Calcola la direzione verso il player
            let dx = player.position.x - this.position.x;
            let dy = player.position.y - this.position.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
    
            if (distance > 5) { // Evita tremori quando è molto vicino
                // Normalizza il movimento e applica la velocità
                this.velocity.x = (dx / distance) * this.speed;
                this.velocity.y = (dy / distance) * this.speed;
    
                // Controllo per cambiare sprite in base alla direzione
                if (Math.abs(dx) > Math.abs(dy)) {
                    this.cambia_sprite(dx > 0 ? 'walk_right' : 'walk_left');
                } else {
                    this.cambia_sprite(dy > 0 ? 'walk_down' : 'walk_up');
                }
            } else {
                this.velocity.x = 0;
                this.velocity.y = 0;
            }
    
            // Applica il movimento controllando le collisioni
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
    
            // Controllo collisioni con i blocchi della stanza
            this.blocchiCollisione.forEach(block => {
                if (
                    this.position.x < block.position2.x &&
                    this.position.x + this.width > block.position.x &&
                    this.position.y < block.position2.y &&
                    this.position.y + this.height > block.position.y
                ) {
                    // Se c'è una collisione, annulla il movimento
                    this.position.x -= this.velocity.x;
                    this.position.y -= this.velocity.y;
                }
            });
    
            // Controlla se il player è troppo vicino e infligge danno
            if (distance < 40) {
                player.subisciDanno();
            }
    
            super.update();
        }
    }
    
    class ShootingEnemy extends Enemy {
        constructor({id, blocchiCollisione = [], source, numero_frame, animazioni, position }) {
            var animazioni = {
                walk_up: {
                    framerate: 4,
                    divisore_frame: 8,
                    loop: true,
                    source: './immagini/nemici/red_octorokup.png'
                },
                walk_down: {
                    framerate: 4,
                    divisore_frame: 8,
                    loop: true,
                    source: './immagini/nemici/red_octorokdown.png'
                },
                walk_right: {
                    framerate: 4,
                    divisore_frame: 8,
                    loop: true,
                    source: './immagini/nemici/red_octorokright.png'
                },
                walk_left: {
                    framerate: 4,
                    divisore_frame: 8,
                    loop: true,
                    source: './immagini/nemici/red_octorokleft.png'
                }
            };
    
            super({id, blocchiCollisione, source, numero_frame, animazioni });
    
            this.position = { x: position.x, y: position.y };
            this.projectiles = [];
            this.shootInterval = 1000;
            this.lastShotTime = 0;
    
            this.cambia_sprite('walk_down');
        }
    
        shoot(direction) {
            this.projectiles.push(new Projectile({
                position: { x: this.position.x + this.width / 2, y: this.position.y + this.height / 2 },
                direction: direction,
                blocchiCollisione: this.blocchiCollisione // Passiamo i blocchi di collisione
            }));
        }
        
    
        update(player) {
            if (!player) return;
    
            let dx = player.position.x - this.position.x;
            let dy = player.position.y - this.position.y;
            let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    
            if (angle < 0) angle += 360;
    
            if ((angle >= 0 && angle <= 45) || (angle > 315 && angle <= 360)) {
                this.cambia_sprite('walk_right');
            } else if (angle > 45 && angle <= 135) {
                this.cambia_sprite('walk_down');
            } else if (angle > 135 && angle <= 225) {
                this.cambia_sprite('walk_left');
            } else if (angle > 225 && angle <= 315) {
                this.cambia_sprite('walk_up');
            }
    
            let now = Date.now();
            if (now - this.lastShotTime >= this.shootInterval) {
                this.lastShotTime = now;
                if ((angle >= 0 && angle <= 45) || (angle > 315 && angle <= 360)) {
                    this.shoot('right');
                } else if (angle > 45 && angle <= 135) {
                    this.shoot('down');
                } else if (angle > 135 && angle <= 225) {
                    this.shoot('left');
                } else if (angle > 225 && angle <= 315) {
                    this.shoot('up');
                }
            }
    
            this.projectiles.forEach((projectile, index) => {
                projectile.update(player);
                if (!projectile.active) {
                    this.projectiles.splice(index, 1);
                }
            });
    
            super.update();
        }
    
        draw() {
            super.draw();
            this.projectiles.forEach(projectile => projectile.draw());
        }
    }
    
    
    
