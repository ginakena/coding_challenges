//Challenge 1:Sum of two numbers
function addition(num1, num2) {
  return num1 + num2;
}

//console.log(addition(3, 5)); //8
//console.log(addition(-6, 9)); //3

//Challenge 2:converting minutes to seconds
function convert(minutes) {
  return minutes * 60;
}
//console.log(convert(5)); //300
//console.log(convert(2)); //120

//Challenge 3:Perimeter of a rectangle
function findPerimeter(length, width) {
  return 2 * (length + width);
}
//console.log(findPerimeter(6, 7));
//console.log(findPerimeter(20, 10));

//Challenge 4: Check Negative
function isNegative(num) {
  if (num < 0) {
    return true;
  } else {
    return false;
  }
}
//console.log(isNegative(-23));
//console.log(isNegative(55));

//Challenge 5: Can Drive
function canDrive(name, age) {
  if (age > 18) {
    return name + " is old enough to drive";
  } else {
    return name + " is not old enough to drive";
  }
}
//console.log(canDrive("Jane", 22));
//console.log(canDrive("June", 12));

//Challenge 6: Write a function called that returns the largest
function findLargest(a, b, c) {
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
function calculateBMI(weight, height) {
  let BMI = weight / (height * height);
  let BMIcategory = "";
  if (BMI < 18.5) {
    BMIcategory = "Underweight";
  } else if (BMI > 18.5 && BMI < 24.9) {
    BMIcategory = "Normal weight";
  } else if (BMI > 25 && BMI < 29.9) {
    BMIcategory = "Overweight";
  } else {
    BMIcategory = "Obese";
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

//challenge 9: Write a function called fizzBuzzCheck(number) that takes a number and returns:
function fizzBuzzCheck(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return "number";
  }
}
//console.log(fizzBuzzCheck(15));
//console.log(fizzBuzzCheck(3));
//console.log(fizzBuzzCheck(7));
//console.log(fizzBuzzCheck(10));

//challenge 10:  Finding perimeter
function perimeter(shape, num) {
  let perimeter;
  if (shape === "s") {
    perimeter = 4 * num;
  } else if (shape === "c") {
    perimeter = 6.28 * num;
  }
  return perimeter;
}
//console.log(perimeter("s", 7));
//console.log(perimeter("c", 4));

//challenge 11: Write a function called sumEvenNumbers(n) that takes a number n and returns the sum of all even numbers from 1 up to and including n.
function sumEvenNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum = +i;
    }
  }
  return sum;
}

//console.log(sumEvenNumbers(6));
//console.log(sumEvenNumbers(10));
//console.log(sumEvenNumbers(5));

//Challenge 12: Write a function called powerUp(num, times) that takes two numbers and returns the result of multiplying num by itself times times using only a loop and arithmetic operators (no Math.pow() allowed).
function powerUp(num, times) {
  let result = 1;
  for (let i = 0; i < times; i++) {
    result = result * num;
  }
  return result;
}
//console.log(powerUp(2, 3));
//console.log(powerUp(5, 0));
//console.log(powerUp(3, 4));
//console.log(powerUp(0));

//challenge 13: Write a function called factorial(n) that takes a non-negative integer n and returns the factorial of n — that’s the product of all positive integers from 1 up to n. By definition, factorial of 0 is 1.
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
//console.log(factorial(0));
//console.log(factorial(4));
//console.log(factorial(6));

//Challenge 14: Write a function called sumMultiples(n, divisor) that returns the sum of all numbers from 1 up to n that are divisible by divisor.
function sumMultiples(n, divisor) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % divisor === 0) {
      sum = sum = +i;
    }
  }
  return sum;
}
//console.log(sumMultiples(10, 2));
//console.log(sumMultiples(15, 3));
//console.log(sumMultiples(7, 5));

//Challenge 15: Sum of Digitss
function sumDigits(num) {
  let sum = 0;
  if (num == 0) {
    return 0;
  }
  while (num != 0) {
    let last = num % 10;
    sum = sum + last;
    num = Math.floor(num / 10);
  }
  return sum;
}
//console.log(sumDigits(123));
//console.log(sumDigits(4567));
//console.log(sumDigits(0));
