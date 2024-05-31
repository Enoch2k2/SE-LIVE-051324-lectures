class LaserBeam {
  static all = []

  constructor(x, y, width, height, facing) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.facing = facing;
    this.speed = 2
    LaserBeam.all.push(this)
  }

  update() {
    switch(this.facing) {
      case "up":
        this.y -= this.speed
        break
      case "down":
        this.y += this.speed
        break
      case "left":
        this.x -= this.speed
        break;
      case "right":
        this.x += this.speed
        break;
    }
    if(
      this.y + this.height < 0 || // checking if laserbeam moved out of top of screen
      this.y > GAME_HEIGHT || // checking if laserbeam moved out of the bottom of screen
      this.x + this.width < 0 || // checking if laserbeam moved out of the left of the screen
      this.x > GAME_WIDTH
      ) {
        let lbIdx = LaserBeam.all.indexOf(this)
        LaserBeam.all.splice(lbIdx, 1)
    }
  }

  draw() {
    ctx.fillStyle = 'green'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}