function findMaxNumber(numArr) {
let intial = 0
numArr.forEach(i=> {
    if (i>intial) intial = i
});
return intial
}

module.exports = findMaxNumber;
