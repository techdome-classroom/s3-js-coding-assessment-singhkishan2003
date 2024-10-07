/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = 0; i < s.length; i++) {
        const currentValue = romanMap[s[i]];

        if (currentValue > prevValue) {
            total += currentValue - 2 * prevValue; // Adjust for previously added value
        } else {
            total += currentValue;
        }

        prevValue = currentValue;
    }

    return total;
};

// Example usage:
console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994

module.exports = { romanToInt };
