# (Optional) Lecture: Object Oriented Javascript

##  Agenda:
  - what are classes? blue prints for creating objects
  - Instances and instantiation
  - class constructors
  - instance functions
  - class variables
  - class scope functions
  - inheritance
  - binding functions

objects consist of properties and functionality

```
class Controls {
  goUp() {
    console.log(`${this.name} is going up!`)
  }
  
  goDown() {
    console.log(`${this.name} is going down!`)
  }
}

class Actor {
  constructor(name, x, y) {
    this.name = name
    this.x = x
    this.y = y
  }
  
  greeting() {
      console.log(`${this.name} says hi`)
  }
}

class Player extends Actor {
  static all = []
  
  constructor(name, x, y) {
    super(name, x, y)
    this.controls = new Controls()
    this.bindControls()
    Player.all.push(this)
  }

  bindControls() {
    this.controls.goUp = this.controls.goUp.bind(this)
    this.controls.goDown = this.controls.goDown.bind(this)
  }

  static listPlayers() {
    this.all.forEach(player => console.log(player.name))
  }

}

class Enemy extends Actor {

}

const player = new Player("Bob", 0, 0)
const player2 = new Player("Good Guy Sam", 200, 0)
const enemy = new Enemy("Bad Guy Sam", 100, 200)


// console.log(player.name)
// console.log(player2.name)
// console.log(enemy.name)

// player.greeting()
// player2.greeting()
// enemy.greeting()

player.controls.goUp()
player.controls.goDown()
player2.controls.goUp()
player2.controls.goDown()
```