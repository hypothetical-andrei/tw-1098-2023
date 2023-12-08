class Robot {
  constructor(name) {
    this.name = name
  }
  move() {
    console.log(`${this.name} is moving`)
  }
}

const r1 = new Robot('some robot')
r1.move()

class Weapon {
  constructor(name) {
    this.name = name
  }
  fire() {
    console.log(`${this.name} is firing`)
  }
}

class CombatRobot extends Robot {
  constructor(name) {
    super(name)
    this.weapons = []
  } 
  addWeapon(w) {
    this.weapons.push(w)
  }
  fire() {
    this.weapons.forEach(e => {
      e.fire()
    })
  }
}

let r2 = new CombatRobot('some combat robot')
let w1 = new Weapon('pew pew')
r2.addWeapon(w1)
r2.fire()