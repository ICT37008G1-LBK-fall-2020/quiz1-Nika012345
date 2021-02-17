const arr = [3, 2, -4, 5, 7, -1, 12, 4, -21, 23];

function getPositiveNumbersAverage(numbersArray) {
    const positives = numbersArray.filter(num => num > 0);
    return positives.reduce((total, current) => total + current) / positives.length;
}

console.log(getPositiveNumbersAverage(arr));