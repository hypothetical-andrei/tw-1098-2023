const sample = [{
  name: 'jim',
  age: 22
}, {
  name: 'jane',
  age: 25
}]

function matches(obj, mask) {
  let isMatch = true
  for (const prop in mask) {
    if (!(prop in obj) || obj[prop] !== mask[prop]) {
      isMatch = false
    }
  }
  return isMatch
}

function maskFilter(a, cond) {
  for (let i = 0; i < a.length; i++) {
    if (matches(a[i], cond)) {
      a.splice(i, 1)
    }
  }
  return a
}

console.log(maskFilter(sample, { name: 'jim' }))