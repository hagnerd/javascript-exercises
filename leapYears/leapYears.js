var leapYears = function(year) {
  return (year % 100 === 0 && year % 400 != 0) ? false :
    year % 4 === 0 ? true : false;
}

module.exports = leapYears

