let sampleArray1 = [1, 2, 3, 4]
let sampleArray2 = ['a', 'b', 'c', 'd']

function intersperse(first, second) {
  if (first.length !== second.length) {
    return -1
  }
  let result = []
  for (let i = 0; i < first.length; i++) {
    result.push(first[i])
    result.push(second[i])
  }
  return result
}

console.log(intersperse(sampleArray1, sampleArray2))
