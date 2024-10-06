const sumAll = function(a,b) {
    let sum = 0;
    if (a < 0 || b < 0 || a%1!=0 || b%1 != 0 || typeof a !=='number' || typeof b !== 'number') return 'ERROR';
    let start, end;
    if (a>b) {start = b; end = a}
    else {start = a; end = b}
    for (let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
