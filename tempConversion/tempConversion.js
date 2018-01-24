var ftoc = function(temp) {
  return ((temp - 32) * 5) / 9
  
}

var ctof = function(temp) {
  return (temp * 1.8) + 32
}

module.exports = {
  ftoc,
  ctof
}
