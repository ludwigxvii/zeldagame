class BossGanon extends Enemy {
    constructor({ blocchiCollisione = [], position, }) {
        source='immagini/Boss/ganon_idle.png'
        var animazioni = {
            walk_up: {
                framerate: 4,
                divisore_frame: 10,
                loop: true,
                source: './immagini/Boss/ganon_idle_up.png'
            },
            walk_down: {
                framerate: 4,
                divisore_frame: 10,
                loop: true,
                source: './immagini/Boss/ganon_idle.png'
            },
            walk_right: {
                framerate: 4,
                divisore_frame: 10,
                loop: true,
                source: './immagini/Boss/ganon_idle_right.png'
            },
            walk_left: {
                framerate: 4,
                divisore_frame: 10,
                loop: true,
                source: './immagini/Boss/ganon_idle_left.png'
            },
            fireball_left: {
                framerate: 4,
                divisore_frame: 4,
                loop: true,
                source: './immagini/Boss/ganon_fireball_left.png'
            },
            fireball_right: {
                framerate: 4,
                divisore_frame: 4,
                loop: true,
                source: './immagini/Boss/ganon_fireball_right.png'
            },
            fireball_down: {
                framerate: 4,
                divisore_frame: 4,
                loop: true,
                source: './immagini/Boss/ganon_fireball_down.png'
            },
            summon_idle: {
                framerate: 4,
                divisore_frame: 10,
                loop: true,
                source: './immagini/Boss/ganon_summon.png'
            },
            attack_down: {
                framerate: 4,
                divisore_frame: 10,
                loop: true,
                source: './immagini/Boss/ganon_attack_down.png'
            },
            attack_up: {
                framerate: 4,
                divisore_frame: 10,
                loop: true,
                source: './immagini/Boss/ganon_attack_up.png'
            },
        };
        super({ blocchiCollisione, source, numero_frame: 4, animazioni });
        this.position = position;
        this.vita = 12; // Vita totale (4 per ogni fase)
        this.initial_vita= 12
        this.fase = 1;
        this.teletrasporto = false;
        this.timerTeletrasporto = 0;
        this.speed = 1;
        this.projectiles = [];
        this.lastShotTime = 0;
        this.shootInterval = 1000; // Tempo tra un proiettile e l'altro
        this.attackTimer = 0;
        this.attackInterval = 100;
        this.nemiciEvocati = 0;
        this.maxEvocazioni = 3;
        this.offset_box.top=40;
        this.offset_box.left=50;
        this.offset_box.right=110;
        this.offset_box.down=120
        const image_cuori = new Image()
                image_cuori.src = './immagini/ganon_healt.png'
                this.cuori = image_cuori
                const image_cont = new Image()
                image_cont.src = './immagini/ganon_container.png'
                this.container = image_cont
        
    }

    cambiaFase() {
        if (this.vita <= 8 && this.fase === 1) {
            this.fase = 2;
            this.teletrasporto = true;
            console.log('Fase 2');
        } else if (this.vita <= 4 && this.fase === 2) {
            this.fase = 3;
            this.speed = 2;
            console.log('Fase 3');
        }
    }

    teletrasporta() {
        if (this.timerTeletrasporto <= 0) {
            this.position.x = Math.random() * canvas.width;
            this.position.y = Math.random() * canvas.height;
            this.timerTeletrasporto = 200;
        } else {
            this.timerTeletrasporto--;
        }
    }

    shootProjectile(direction) {
        this.projectiles.push(new Projectile({
            position: { x: this.position.x + this.width / 2, y: this.position.y + this.height / 2 },
            direction: direction,
            blocchiCollisione: this.blocchiCollisione // Passiamo i blocchi di collisione
        }));
    }

    attaccoMagico(player) {
        let now = Date.now();
        if (this.fase >= 2 && now - this.lastShotTime >= this.shootInterval) {
            this.lastShotTime = now;
            let dx = player.position.x - this.position.x;
            let dy = player.position.y - this.position.y;
            let angle = Math.atan2(dy, dx) * (180 / Math.PI);
            this.isattacking=true;
            setTimeout(() => {
                this.isattacking = false;
            }, 800); // Dopo 800 ms torna a muoversi
            if (angle < 0) angle += 360;
            if ((angle >= 0 && angle <= 45) || (angle > 315 && angle <= 360)) {
                this.cambia_sprite('fireball_right')
                this.shootProjectile('right');
            } else if (angle > 45 && angle <= 135) {
                this.cambia_sprite('fireball_down')
                this.shootProjectile('down');
            } else if (angle > 135 && angle <= 225) {
                this.cambia_sprite('fireball_left')
                this.shootProjectile('left');
            } else if (angle > 225 && angle <= 315) {
                
                this.shootProjectile('up');
            }
            console.log('Attacco Magico');
        }
    }

    evocaNemici(player) {
        //enemySprite.src = './immagini/nemici/lynel_down.png';
        if (this.fase === 3 && this.nemiciEvocati < this.maxEvocazioni && player.enemies.length < 3) {
            this.isattacking=true;
            this.cambia_sprite('summon_idle')
            setTimeout(() => {
                this.isattacking = false;
            }, 1000); // Dopo 800 ms torna a muoversi
            player.enemies.push(new ChasingEnemy({ blocchiCollisione: this.blocchiCollisione, position: { x: this.position.x + 50, y: this.position.y + 50 } }));
            this.nemiciEvocati++;
            console.log('Nemici Evocati:', this.nemiciEvocati);
        }
    }

    attaccoFisico(player) {
        let dx = player.position.x - this.position.x-this.width/2;
            let dy = player.position.y - this.position.y-this.height/2;
        let distanza = Math.sqrt(dx * dx + dy * dy);

        if (distanza < 50) {
            player.subisciDanno();
            console.log('Attacco fisico');
            this.isattacking=true;
            if(this.velocity.y>0)this.cambia_sprite('attack_up')
                else this.cambia_sprite('attack_down')
            setTimeout(() => {
                this.isattacking = false;
            }, 800);
        }
    }

    selezionaAttacco(player) {
        if (this.attackTimer <= 0) {
            let scelta = Math.floor(Math.random() * 3);
            switch (scelta) {
                case 0:
                    this.attaccoFisico(player);
                    break;
                case 1:
                    this.attaccoMagico(player);
                    break;
                case 2:
                    if (this.fase === 3) {
                        this.evocaNemici(player);
                    }
                    break;
            }
            this.attackTimer = this.attackInterval;
        } else {
            this.attackTimer--;
        }
    }

    update(player) {
        
        this.cambiaFase();
        console.log("Vita Ganon: ",this.vita,"sta attaccando?",this.isattacking)
        if (this.fase === 2 || this.fase === 3) {
            this.selezionaAttacco(player);
        } else if (this.fase === 1) {
            this.attaccoFisico(player);
        }

        if (this.fase === 2) {
            this.teletrasporta();
        }
        let dx = player.position.x+player.width/2 - this.position.x-this.width/2;
        let dy = player.position.y+player.height/2 - this.position.y-this.height/2;
        let distanza = Math.sqrt(dx * dx + dy * dy);

        if (distanza > 40) {
            if(this.danno){this.velocity.x = (dx / distanza) * (this.speed/2);
                this.velocity.y = (dy / distanza) * (this.speed/2);}
                else{
            this.velocity.x = (dx / distanza) * this.speed;
            this.velocity.y = (dy / distanza) * this.speed;
                }
        }

        this.projectiles.forEach((projectile, index) => {
            projectile.update(player);
            if (!projectile.active) {
                this.projectiles.splice(index, 1);
            }
        });
        if(!this.isattacking){
        if (Math.abs(dx) > Math.abs(dy)) {
            this.cambia_sprite(dx > 0 ? 'walk_right' : 'walk_left');
        } else {
            this.cambia_sprite(dy > 0 ? 'walk_down' : 'walk_up');
        }
    }
    this.position.x += this.velocity.x
            this.position.y += this.velocity.y
            this.healthbar = {
                x:320+((this.vita-this.initial_vita)/this.initial_vita)*this.cuori.width,
                y:650,
                width:this.cuori.width,
                green_width:((this.vita-this.initial_vita)/this.initial_vita)*this.cuori.width,
                height:this.cuori.height
            }
            
            c.drawImage(this.container,320,650)
        super.update();
        
    }

    draw() {
        super.draw();
        this.projectiles.forEach(projectile => projectile.draw());
    }
    
    
}
