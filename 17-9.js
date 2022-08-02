// Practice Problem 1

var fruits = ['Apple', 'Banana', 'Orange'];
var i = fruits.indexOf('Banana');
fruits[i] = 'Mango';
console.log(fruits);

fruits.pop();
fruits.push('Watermelon');
console.log(fruits);

// Practice Problem 2

var Me = 85;
var Tom = 66;
var Jane = 95;
var Peter = 56;
var John = 40;

var marks = John;

if (marks >= 80) {
    console.log('A grade');
}
else if (marks >= 60) {
    console.log('B grade');
}
else if (marks >= 50) {
    console.log('C grade');
}
else if (marks >= 40) {
    console.log('D grade');
}
else {
    console.log('F grade');
}

// Practice Problem 3

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log(num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2);
}
else {
    console.log(num3);
}

var t = [9,8,9];
if (t[0] === t[1] || t[0] === t[2] || t[1] === t[2]) {
    console.log('Isosceles');
}
else {
    console.log('Not Isosceles');
}