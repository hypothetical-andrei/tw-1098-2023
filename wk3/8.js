function reduce(a, t, initial) {
  let acc = initial
  for (const element of a) {
    acc = t(acc, element)
  }
  return acc
}

console.log(reduce([1, 2, 3], (a, e) => a + e, 0))
