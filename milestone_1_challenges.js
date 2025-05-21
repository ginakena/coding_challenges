//Challenge 1:Sum of two numbers
function addition (num1, num2) {
    return num1+num2; 
}

//console.log(addition(3, 5)); //8
//console.log(addition(-6, 9)); //3

//Challenge 2:converting minutes to seconds
function convert (minutes) {
    return minutes*60;
}
//console.log(convert(5)); //300
//console.log(convert(2)); //120

//Challenge 3:Perimeter of a rectangle
function findPerimeter (length, width) {
    return 2*(length+width);
}
//console.log(findPerimeter(6, 7));
//console.log(findPerimeter(20, 10));

//Challenge 4: Check Negative
function isNegative (num) {
    if (num < 0) {
        return true;
    }
    else {
        return false;
    }
}
//console.log(isNegative(-23));
//console.log(isNegative(55));

//Challenge 5: Can Drive
function canDrive (name, age) {
    if (age>18) {
        return name + ' is old enough to drive'
    }
    else {
        return name + ' is not old enough to drive'
    }
}
//console.log(canDrive("Jane", 22));
//console.log(canDrive("June", 12));

//Challenge 6: Write a function called that returns the largest 
function findLargest (a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
 
}
//console.log(findLargest(5, 9, 3));
//console.log(findLargest(10, 10, 10));
//console.log(findLargest(-1, -5, -3));

//challenge 7. BMI Calculator
function calculateBMI(height, width) {
    let BMI = width / (height*height); 
    if (BMI < 18.5) {
    return "Your BMI is ${BMI}-under weight" 
    } else if (BMI > 18.5 && BMI < 24.9) {
    return "Your BMI is ${BMI}-normal weight" 
    } else if(BMI > 25 && BMI < 29.9) {
     return  "Your BMI is ${BMI}-over weight"
    } else {
      return  "Your BMI is ${BMI}-obese"
    }
}

//console.log(calculateBMI(68, 1.75));
//console.log(calculateBMI(85, 1.8));

//challenge 8:  Greeting Based On Time

function greetUser(name, hour) {
    if (hour >= 5 && hour <= 11) {
        return `Good morning, ${name}!`;
    } else if (hour >= 12 && hour <= 17) {
        return `Good afternoon, ${name}!`;
    } else if (hour >= 18 && hour <= 21) {
        return `Good evening, ${name}!`;
    } else { 
        return `Good night, ${name}!`;
    }
}

//console.log(greetUser("Regina", 9)); 

//challenge 9: 

//challenge 11: Write a function called sumEvenNumbers(n) that takes a number n and returns the sum of all even numbers from 1 up to and including n.
function sumEvenNumbers (n) {
    let sum = 0;
    for (let i =1; i <= n; i++) {
        if (i % 2 === 0) {
            sum =+ i;
        }
    }
    return sum;
}

console.log(sumEvenNumbers(6));
console.log(sumEvenNumbers(10));
console.log(sumEvenNumbers(5));
        
     


 

