class Projectile {
  constructor({ position, direction }) {
      this.position = { x: position.x, y: position.y };
      this.speed = 6;
      this.width = 16;
      this.height = 16;
      this.image = new Image();
      this.image.src = './immagini/nemici/proiettile.png';
      this.direction = direction;
      this.active = true;
  }

  update(player) {
      if (!this.active) return;

      if (this.direction === 'right') this.position.x += this.speed;
      else if (this.direction === 'left') this.position.x -= this.speed;
      else if (this.direction === 'up') this.position.y -= this.speed;
      else if (this.direction === 'down') this.position.y += this.speed;

      if (this.outOfBounds()) {
          this.active = false;
      }

      // **Collisione con il player con area ridotta**
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
      // **Riduciamo la hitbox del proiettile**
      const collisionThreshold = 30; // Distanza minima per subire danno
      return (
          Math.abs(this.position.x - (player.position.x + player.width / 2)) < collisionThreshold &&
          Math.abs(this.position.y - (player.position.y + player.height / 2)) < collisionThreshold
      );
  }

  draw() {
      if (this.active) {
          c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
      }
  }
}



