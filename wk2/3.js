let strDiff = function(first, second) {
  if (first.length !== second.length) {
    return -1
  }
  let count = 0
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      count++
    }
  }
  return count
}

console.log(strDiff('cat', 'mat'))
console.log(strDiff('cat', 'mate'))
console.log(strDiff('cat', 'cat'))