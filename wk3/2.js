const sample = [1999, 2001, 2015, 1985]

function getAdults(a) {
// TODO: implement 
  return a.map(e => 2023 - e).filter(e => e >= 18)
}

console.log(getAdults(sample))