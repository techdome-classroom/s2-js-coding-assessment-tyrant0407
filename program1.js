/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for(let char of s){
        if(char === '(' || char ==='{' || char ==='['){
            stack.push(char);
        }
    }
};

module.exports = { isValid };


