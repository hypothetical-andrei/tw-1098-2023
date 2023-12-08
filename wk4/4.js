function memo(f) {
  const cache = {}
  return function (...args) {
    const key = JSON.stringify(args)
    if (!(key in cache)) {
      cache[key] = f(...args)
      console.log(`i had to generate for key: ${key}`)
    }
    return cache[key]
  }
}

function simple(a, b, c) {
  return a + b + c
}

const f1 = memo(simple)
f1(1,2,3)
f1(2,2,2)
f1(1,2,3)
f1(1,2,3)