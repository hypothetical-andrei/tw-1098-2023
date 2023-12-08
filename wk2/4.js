// function f(a, b, c = 3) {
//   return a + b + c
// }

// console.log(f(1,2,3))
// console.log(f(1,2,3,4))

// console.log(f(1,2))
function buildArray(source, ...elements) {
  for (let element of elements) {
    source.push(element)
  }
  return source
}

console.log(buildArray([1, 2, 3], 6, 7, 8))