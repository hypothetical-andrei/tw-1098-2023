class Software {
  constructor(name) {
    this.name = name
  }
  run() {
    console.log(`${this.name} running`)
  }
}

const r1 = new Software('openoffice')
r1.run()

class Plugin {
  constructor(name) {
    this.name = name
  }
  run() {
    console.log(`${this.name} is running`)
  }
}

class Browser extends Software {
  constructor(name) {
    super(name)
    this.plugins = []
  } 
  loadPlugin(p) {
    this.plugins.push(p)
  }
  loadAll() {
    this.plugins.forEach(e => {
      e.run()
    })
  }
}

let r2 = new Browser('chrome')
let w1 = new Plugin('adblock')
r2.loadPlugin(w1)
r2.loadAll()

Software.prototype.uninstall = function () {
  console.log(`${this.name} is uninstalling`)
}

r2.uninstall()