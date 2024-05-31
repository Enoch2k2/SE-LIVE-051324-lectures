class Player {
  constructor(x, y, height, width) {
    this.x = x
    this.y = y
    this.height = height
    this.width = width
    this.color = 'red'
    this.speed = 1
    this.moving = false
    this.controls = new Controls(this)
    this.facing = {
      up: true,
      down: false,
      left: false,
      right: false
    }
    this.readyToFire = true;
  }
  
  update() {
    if(this.moving){
      this.move()
    }
  }

  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  move() {
    if(this.facing.up) {
      if(this.y < 0) {
        this.y = 0
      } else {
        this.y -= this.speed
      }
    } else if (this.facing.down) {
      if((GAME_HEIGHT - this.height) < this.y) {
        this.y = GAME_HEIGHT - this.height
      } else {
        this.y += this.speed
      }
    } else if (this.facing.right) {
      if((GAME_WIDTH - this.width) < this.x) {
        this.x = GAME_WIDTH - this.width
      } else {
        this.x += this.speed
      }
    } else {
      if(this.x < 0) {
        this.x = 0
      } else {
        this.x -= this.speed
      }
    }
  }

  fireLaserBeam() {
    if(this.readyToFire) {
      this.createLaserbeam()
      this.readyToFire = false
      setTimeout(function() {
        this.readyToFire = true
      }.bind(this), 500)
    }
  }

  createLaserbeam() {
    if(this.facing.up == true) {
      new LaserBeam(
        this.x + (this.width / 2) - 2.5,
        this.y - 22,
        5, 
        20, 
        'up')
    } else if (this.facing.down == true) {
      new LaserBeam(
        this.x + (this.width / 2) - 2.5,
        this.y + this.height + 2,
        5,
        20,
        'down'
      )
    } else if (this.facing.left == true) {
      new LaserBeam(
        this.x - 22,
        this.y + (this.height / 2) - 2.5,
        20,
        5,
        'left'
      )
    } else {
      new LaserBeam(
        this.x + this.width + 2,
        this.y + (this.height / 2) - 2.5,
        20,
        5,
        'right'
      )
    }
  }
}