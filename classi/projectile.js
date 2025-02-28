class Projectile {
    constructor({ position, direction, blocchiCollisione }) {
        this.position = { x: position.x, y: position.y };
        this.speed = 6;
        this.width = 30;
        this.height = 30;
        this.image = new Image();
        this.image.src = './immagini/nemici/proiettile.png';
        this.direction = direction;
        this.active = true;
        this.blocchiCollisione = blocchiCollisione; // Aggiunto
    }
  
    update(player) {
        if (!this.active) return;
  
        if (this.direction === 'right') this.position.x += this.speed;
        else if (this.direction === 'left') this.position.x -= this.speed;
        else if (this.direction === 'up') this.position.y -= this.speed;
        else if (this.direction === 'down') this.position.y += this.speed;
  
        if (this.outOfBounds() || this.checkCollisionWithBlocks()) {
            this.active = false;
        }
  
        // **Collisione con il player**
        if (this.checkCollision(player)) {
            player.subisciDanno();
            this.active = false;
        }
    }
  
    outOfBounds() {
        return (
            this.position.x < 0 || 
            this.position.x > canvas.width || 
            this.position.y < 0 || 
            this.position.y > canvas.height
        );
    }
  
    checkCollision(player) {
        const collisionThreshold = 30; 
        return (
            Math.abs(this.position.x - (player.position.x + player.width / 2)) < collisionThreshold &&
            Math.abs(this.position.y - (player.position.y + player.height / 2)) < collisionThreshold
        );
    }
  
    // **🔹 2. Metodo per controllare la collisione con i blocchi**
    checkCollisionWithBlocks() {
        for (let i = 0; i < this.blocchiCollisione.length; i++) {
            const block = this.blocchiCollisione[i];
            if (
                this.position.x < block.position2.x &&
                this.position.x + this.width > block.position.x &&
                this.position.y < block.position2.y &&
                this.position.y + this.height > block.position.y
            ) {
                return true; // Collisione con un blocco, il proiettile deve scomparire
            }
        }
        return false;
    }
  
    draw() {
        if (this.active) {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
  }
  



