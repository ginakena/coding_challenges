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
console.log(canDrive("Jane", 22));
console.log(canDrive("June", 12));

