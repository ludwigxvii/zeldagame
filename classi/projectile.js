class Projectile {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.speed = 3;
    this.direction = direction;
    this.width = 16;
    this.height = 16;
  }

  update() {
    switch (this.direction) {
      case 'up': this.y -= this.speed; break;
      case 'down': this.y += this.speed; break;
      case 'left': this.x -= this.speed; break;
      case 'right': this.x += this.speed; break;
    }
  }

  draw(context, image) {
    context.drawImage(image, this.x, this.y, this.width, this.height);
  }
}