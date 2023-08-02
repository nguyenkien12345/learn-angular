function add(a,b) {
  c = parseFloat(a) + parseFloat(b)
  if (isNaN(c)) {
    throw new Error('Input is not a number')
  }
  return c
}

function minus(a,b) {
  c = parseFloat(a) - parseFloat(b)
  if (isNaN(c)) {
    throw new Error('Input is not a number')
  }
  return c
}

module.exports = { add, minus }
