const removeFromArray = function(array, ...valuesToRemove) {

    const newArray = array.filter(v => !valuesToRemove.includes(v))
    return (newArray);
};

// Do not edit below this line
module.exports = removeFromArray;
