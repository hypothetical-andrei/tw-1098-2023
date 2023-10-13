const sample = [1, 2, 3, 4, 5, 6]

function sumOfDivisible(a, n) {
  return a.filter(e => !(e % n)).reduce((a, e) => a + e, 0)
}

console.log(sumOfDivisible(sample, 3))