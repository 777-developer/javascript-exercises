const leapYears = function(year) {
    const isYearsDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearsDivisibleByFourHundred = year % 400 === 0;

    if (isYearsDivisibleByFour && (!isCentury || isYearsDivisibleByFourHundred)) {
        return true;
    } else {
        return false;
    }

    return leapYears
};

// Do not edit below this line
module.exports = leapYears;
