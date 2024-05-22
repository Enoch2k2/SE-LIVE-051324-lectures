# Lecture: Javascript Context

### Agenda
* this keyword
* .call
* .bind



// let bob = {
//   name: "Bob"
// }

// // bob.greeting = greeting

// let sarah = {
//   name: "Sarah"
// }

// const greeting = function() {
//   console.log(`Hi! My name is ${this.name}`)
// }.bind(bob)

// greeting()
// greeting.call(sarah)


const player = {
  name: "NeverGonnaLose284",
  controls: "some controls"
}

const enemyAI = {
  name: "Bad Guy Id 2404"
}


const logName = function() {
  console.log(this.name)
}

logName.call({name: "Sarah"})

const logPlayer = logName.bind(player)
const logEnemy = logName.bind(enemyAI)

logPlayer() // bound to the player
logEnemy() // bound to the enemy