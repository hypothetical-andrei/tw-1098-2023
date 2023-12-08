function doSomething(o, a, s) {
  if (typeof o !== 'object') {
    throw new Error('first param should be an object')
  }
  if (!Array.isArray(a)) {
    throw new Error('second param should be an array')
  }
  if (!(typeof s === 'string' || s instanceof String)) {
    throw new Error('third param should be a string or String')
  }
  console.log('we are done')
}

try {
//  doSomething(4)
//  doSomething({}, {})
//  doSomething({}, [], 4)
 doSomething({}, [], '') 
} catch (error) {
  console.warn(error)
} finally {
  console.warn('i am always run')
}