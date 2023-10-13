const sample = '{0} has a {1} {2}'

function format(s, ...args) {
  let modified = s
  for (let i = 0; i < args.length; i++) {
    modified = modified.replace(`{${i}}`, args[i])
  }
  return modified
}

console.log(format(sample, 'Mary', 'little', 'lamb'))

