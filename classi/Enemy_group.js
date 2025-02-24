class Enemy_Group {
  constructor() {
    this.enemies = [];
  }

  add(enemy) {
    this.enemies.push(enemy);
  }

  update(player) {
    this.enemies.forEach(enemy => enemy.update(player));
  }

  draw(context, images) {
    this.enemies.forEach(enemy => {
      enemy.draw(context, images);
    });
  }
}