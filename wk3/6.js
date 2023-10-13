const sample = '{person} has a {attribute} {pet}'

function format(s, params) {
  let modified = s
  for (const prop in params) {
    modified = modified.replace(`{${prop}}`, params[prop])
  }
  return modified}

console.log(format(sample, { person: 'Mary', attribute: 'little', pet: 'lamb' }))