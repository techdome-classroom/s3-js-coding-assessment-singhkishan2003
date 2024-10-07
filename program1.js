/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const matchingBrackets = {')': '(', '}': '{', ']': '['};
    const stack = [];

    for (const char of s) {
        if (char in matchingBrackets) {
            if (stack.length === 0 || stack[stack.length - 1] !== matchingBrackets[char]) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};

// Example usage:
console.log(isValid("()"));        // Output: true
console.log(isValid("()[]{}"));    // Output: true
console.log(isValid("(]"));        // Output: false

module.exports = { isValid };
