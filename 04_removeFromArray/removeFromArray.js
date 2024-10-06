const removeFromArray = function(arr, ...nums) {
    let newArr = arr.filter((num)=> !nums.includes(num));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
