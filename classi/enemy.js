class Enemy extends Sprite {
    constructor({
        blocchiCollisione = [], source, numero_frame, animazioni
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
        constructor(x, y) {
          super(x, y);
          this.loadImages();
        }
      
        loadImages() {
          this.images = {
            up: new Image(),
            down: new Image(),
            left: new Image(),
            right: new Image()
          };
          Object.keys(this.images).forEach(dir => {
            this.images[dir].src = 'immagini/nemici/stationary_enemy_${dir}.png';
          });
          this.image = this.images[this.direction];
        }
      }
      
      class ChasingEnemy extends Enemy {
        constructor(x, y) {
          super(x, y);
          this.loadImages();
        }
      
        loadImages() {
          this.images = {
            up: new Image(),
            down: new Image(),
            left: new Image(),
            right: new Image()
          };
          Object.keys(this.images).forEach(dir => {
            this.images[dir].src = 'immagini/nemici/chasing_enemy_${dir}.png';
          });
          this.image = this.images[this.direction];
        }
      
        update(player) {
          if (player.x > this.x) { this.x += 1; this.direction = 'right'; }
          if (player.x < this.x) { this.x -= 1; this.direction = 'left'; }
          if (player.y > this.y) { this.y += 1; this.direction = 'down'; }
          if (player.y < this.y) { this.y -= 1; this.direction = 'up'; }
          this.image = this.images[this.direction];
        }
      }
      
      class ShootingEnemy extends Enemy {
        constructor(x, y) {
          super(x, y);
          this.loadImages();
          this.projectiles = [];
          this.shootCooldown = 0;
        }
      
        loadImages() {
          this.images = {
            up: new Image(),
            down: new Image(),
            left: new Image(),
            right: new Image()
          };
          Object.keys(this.images).forEach(dir => {
            this.images[dir].src = 'immagini/nemici/shooting_enemy_${dir}.png';
          });
          this.image = this.images[this.direction];
        }
      }
