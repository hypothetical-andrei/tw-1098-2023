const sample = `
  best
  read
  on 
  windy
  nights
`
const dict = ['brown', 'orange', 'blue']

function checkAcrostic(a, d) {
  const candidate = a.split('\n').map(e => e.trim()).filter(e => e).map(e => e[0]).join('')
  return d.indexOf(candidate) !== -1
}

console.log(checkAcrostic(sample, dict))