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
//console.log(findMax([3, 7, 2, 9, 5])); 

//Challenge 3: Write a function called findWinner that takes an array of objects. Each object has two properties: name (string) and votes (number). The function should return the object representing the candidate with the highest number of votes. Assume there’s always one clear winner (no ties).
function findWinner(candidates) {
     let winner = candidates[0];
    for (let i=1; i < candidates.length; i++) {
        if (candidates[i].votes > winner.votes) {
            winner = candidates[i];
        }
      } 
return winner;      
}
//const candidates = [
//  { name: "Alice", votes: 50 },
//  { name: "Bob", votes: 75 },
//  { name: "Charlie", votes: 65 }
//];
//console.log(findWinner(candidates));

//challenge 4: Find the longest word
function findLongestWord(words) {
    let longestword = words[0]
    for (let i=0; i < words.length; i++) {
        if (words[i].length > longestword.length) {
            longestword = words[i];
        }
    }
    return longestword;
} 
//console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));


//challenge 5: Write a function called countProperties that takes an object and returns the number of properties (keys) it has.
function countProperties(object) {
    let count = Object.keys(object).length
    return count
};
//console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));

//challenge 6: Filter by Length
function filterByLength(array, minlength) {
    let items = array.filter(i => i.length >= minlength)
    return items
}
//console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));


//challenge 7: Sum of Even Numbers
const sumEvenNumbers = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));