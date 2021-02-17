const arr = [1, -2, 4, 5, 6, 11, 3, 21, 23];

function getMaxNumber(numbersArray) {
    let max = numbersArray[0];
    for (let i = 1; i < numbersArray.length; i++) {
        if (numbersArray[i] > max) {
            max = numbersArray[i];
        }
    }
    return max;
}

console.log(getMaxNumber(arr));