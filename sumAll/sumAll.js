var sumAll = function(n1, n2) {
  let sum = 0;
  let args = [].slice.call(arguments) 
  let sorted = args.sort((a,b) => a - b)

  if ( args[0] < 0 ) {
    return "ERROR"
  }

  if ( args.every((value) => typeof value === 'number' )) {
    for(let i = args[0]; i <= args[1]; i++){
      sum += i;
    }
  
    return sum

  } else {
    return "ERROR"
  }
}

module.exports = sumAll
