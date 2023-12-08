class NumberStream {
  #value
  #update
  #limit
  constructor(initial, update, limit) {
    this.#value = initial
    this.#update = update
    this.#limit = limit
  }
  hasNext() {
    return !(this.#update(this.#value) > this.#limit)
  }
  next() {
    const result = this.#value
    this.#value = this.#update(this.#value)
    return result
  }
}

const ns = new NumberStream(0, x => x + 2, 10)
while (ns.hasNext()) {
  console.log(ns.next())
}