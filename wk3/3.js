const sample = [1, 2, 3, 4]

function totalArea(a) {
  return a.map(e => e * e).reduce((a, e) => a + e, 0)
}

console.log(totalArea(sample))

const sample1 =[[1,2,3], [2], [3,4,5]]
// let acc = []
// for (const element of sample1) {
//   acc = acc.concat(element)
// }
console.log(sample1.reduce((a, e) => a.concat(e), []))