var removeFromArray = function(arr, el) {
  let args = arguments;

  for(let i=1; i < args.length; i++){
    if(arr.includes(args[i])) { arr.splice(arr.indexOf(args[i]), 1) }
  }

  return arr
}

module.exports = removeFromArray
