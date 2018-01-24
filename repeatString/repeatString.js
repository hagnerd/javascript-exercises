var repeatString = function(str, num) {
  if(num <= -1){
    return "ERROR"
  }

  return str.repeat(num)
}

module.exports = repeatString
