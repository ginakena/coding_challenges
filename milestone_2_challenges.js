//Challenge 1: Write a function called sumOfPositives that takes an array of numbers and returns the sum of all the positive numbers in the array
function sumOfPositives(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
//console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));

//Challenge 2: Write a function called findMax that takes an array of numbers and returns the maximum number in the array. Don’t use built-in functions like Math.max().
function findMax(arr) {
    let max = arr[0];
    for (let i=1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([3, 7, 2, 9, 5])); 
        
