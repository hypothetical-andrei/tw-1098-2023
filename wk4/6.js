Number.prototype.times = function (f) {
  for (let i = 0; i < this; i++) {
    f()
  }
}

let n = 5

n.times(() => {
  console.log('called once')
})