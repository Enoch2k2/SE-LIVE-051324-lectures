const game = new Game()
const player = new Player((GAME_WIDTH/2) - 20, (GAME_HEIGHT/2) - 20, 40, 40)

function update() {
  // all classes will update here
  game.update()
  player.update()
  LaserBeam.all.forEach(lb => lb.update())
}

function draw() {
  // all classes wil draw here
  game.draw()
  player.draw()
  LaserBeam.all.forEach(lb => lb.draw())
}

function render() {
  update()
  draw()
  animate(render)
}

function start() {
  animate(render)
}

start()