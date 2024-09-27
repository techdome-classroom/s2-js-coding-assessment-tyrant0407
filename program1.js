/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for(let char of s){
        if(char === '(' || char ==='{' || char ==='['){
            stack.push(char);
        }else{
            const top = stack.pop();
            if(top ===null ||)
        }
    }
};

module.exports = { isValid };


