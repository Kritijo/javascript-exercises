const palindromes = function (string) {
    let punctuations = ["!",".",","," "];
    string = string
    .toLowerCase()
    .split('')
    .filter(char=>!punctuations.includes(char))
    .join('')

    let revString = string.split('').reverse().join('');
    return string === revString;
};

// Do not edit below this line
module.exports = palindromes;
