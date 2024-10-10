const fibonacci = function(n) {
    let prev = 0;
    let curr = 1;
    n = Number(n);
    if(n == 0) return 0;
    if(n < 0) return 'OOPS';
    for (let i = 1; i<n; i++){
        [[prev],[curr]] = [[curr],[curr+prev]];
    }
    return curr; 
};

// Do not edit below this line
module.exports = fibonacci;
