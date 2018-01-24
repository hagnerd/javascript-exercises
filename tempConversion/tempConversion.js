var ftoc = function(temp) {
  return Math.round( ( ((temp - 32) * 5) / 9) * 10 ) / 10
  
}

var ctof = function(temp) {
  return Math.round( ((temp * 1.8) + 32) * 10 ) / 10
}

module.exports = {
  ftoc,
  ctof
}
