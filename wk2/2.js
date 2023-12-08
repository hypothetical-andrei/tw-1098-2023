let sampleNumber = 5

let isDivisible = (n) => {
  if (n % 2 === 0) {
    return true
  } 
  return false
}

// console.log(isDivisible(sampleNumber))
if (process.argv.length > 2) {
  console.log(isDivisible(parseInt(process.argv[2])))
} else {
  console.log('not enough params')
}