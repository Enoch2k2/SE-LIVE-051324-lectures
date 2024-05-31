class Game {
  update() {

  }

  draw() {
    this.drawBackground()
  }

  drawBackground() {
    this.clearBackground()
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
  }

  clearBackground() {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
  }
}