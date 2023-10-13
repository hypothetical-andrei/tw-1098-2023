const sampleArray = ['cat', 'dog', 'elephant', 'giraffe', 'mouse']

// function filterMinLength(a, n) {
//   const results = []
//   for (const element of a) {
//     if (element.length > n) {
//       results.push(element)
//     }
//   }
//   return results
// }

function filterMinLength(a, n) {
  return a.filter(e => e.length > n)
}

console.log(filterMinLength(sampleArray, 3))