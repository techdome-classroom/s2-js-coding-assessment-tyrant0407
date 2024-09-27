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
            if(top ===null || (char ===')' && top!=='(') || (char ==='}' && top!=='{') || (char ===']' && top!=='[')  ){
                return false;
            }
        }
    }
};

module.exports = { isValid };


