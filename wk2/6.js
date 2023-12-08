const sample = 'the quick brown fox jumps over the lazy dog'

function dist(s) {
  const result = {}
  for (const letter of s) {
    if (letter === ' ') {
      continue
    }
    if (letter in result) {
      result[letter]++
    } else {
      result[letter] = 1
    }
  }
  const keyCount = Object.keys(result).length
  for (const key in result) {
    result[key] /= keyCount 
  }
  return result
}

console.log(dist(sample))