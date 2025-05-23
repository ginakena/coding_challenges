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
//console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));


//challenge 8: Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(array) {
    let evenArray = array.filter(i => i % 2 ===0)
    let oddArray = array.filter(i => i % 2 !== 0)
    let sumEven = 0;
    let sumOdd = 0;

    for (let i=0; i < evenArray.length; i++) {
        sumEven += evenArray[i];
    }
    for (let i=0; i < oddArray.length; i++) {
        sumOdd += oddArray[i];
    }
    return sumEven-sumOdd;

}
//console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));  

//challenge 9: count truthly
const countTruthly = (object) => {
    let count = 0;
    for (let key in object) {
        if (object[key]) {
            count = count + 1;
        }
    }
    return count;
};
//console.log(countTruthly({ a: 0, b: "hello", c: false, d: 42, e: null }));

//challenge 10: Average of Numbers
const average = (array) => {
    let sum =0;
    for (let i=0; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum / array.length;
    return average;
};
//console.log(average([2, 4, 6, 8]));
//console.log([0]); 

//challenge 11. Linear  Search
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1; 
}

//console.log(linearSearch([5, 3, 7, 1, 4], 7));  
//console.log(linearSearch([5, 3, 7, 1, 4], 10));

//challenge 12: Reverse Linear Search
function reverseLinearSearch(array, target) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

//console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));  
//console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10));

//Challenge 13: Write a function called linearSearchAll that takes an array and a value. It should return an array of all the indices where the value appears. If the value isn’t found, return an empty array.
function linearSearchAll(array, target) {
    let indices = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            indices.push(i);
        }
    }
    return indices;
}
//console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7));
//console.log(linearSearchAll([5, 3, 7, 1, 4], 10));

//challenge 14: Write a function called countOccurrences that takes an array of strings and returns an object where each key is a string from the array and the corresponding value is the number of times it appears.
function countOccurrences(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (obj[item]) {
            obj[item]++;
        }
        else {
            obj[item] = 1;
        }
    }
    return obj;
}
//console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]));

//challenge 15: Write a function called removeDuplicates that takes an array and returns a new array with all duplicate values removed. Preserve the original order of elements.
const removeDuplicates = (array) => {
    const noDuplicateArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!noDuplicateArray.includes(array[i])) {
            noDuplicateArray.push(array[i]);
        }
    } 
    return noDuplicateArray;
};
//console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));

//challenge 16: Write a function called mostFrequent that takes an array and returns the value that appears most frequently. If there’s a tie, return any one of the most frequent values.
const mostFrequent = (array) => {
    let maxcount = 0;
    let result = array[0];
    for (let i = 0; i < array.length; i++) {
        let count = 0;
   
    for (let j = 0; j < array.length; j++) {
        if (array[i] == array[j]) {
            count++;
        } 
       if (count > maxcount) {
        maxcount = count;
       result = array[i];
       } 
    } 
}
return result;
};
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]));
