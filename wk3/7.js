function map(a, t) {
  let results = []
  for (const element of a) {
    results.push(t(element))
  }
  return results
}

console.log(map([1, 2, 3], x => x * 2))