class Controls {
  constructor(player) {
    this.attachListeners(player)
  }

  attachListeners(player) {
    document.addEventListener("keydown", this.move.bind(player))
    document.addEventListener("keydown", this.fireLaserBeam.bind(player))
    document.addEventListener("keyup", this.stop.bind(player))
  }

  move(event) {
    if(event.which !== SPACE_BAR) {

      this.facing = {
        up: false,
        down: false,
        left: false,
        right: false
      }
      switch(event.which) {
        case UP:
          this.facing.up = true
          this.moving = true
          break;
        case DOWN:
          this.facing.down = true
          this.moving = true
          break;
        case LEFT:
          this.facing.left = true
          this.moving = true
          break;
        case RIGHT:
          this.facing.right = true
          this.moving = true
          break;
        }
    }
  }

  stop() {
    this.moving = false
  }

  fireLaserBeam(event) {
    if(event.which == SPACE_BAR) {
      this.fireLaserBeam()
    }
  }


}