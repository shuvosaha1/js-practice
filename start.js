var math =  75.25;
var bio = 65;
var chem = 80;
var phys = 35.45;
var ban = 99.50;

var tot = math + bio + chem + phys + ban;
console.log(tot);

var avg = tot / 5;
console.log(avg.toFixed(2));

var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.indexOf('Banana'))
var i = fruits.indexOf('Banana')
fruits[i] = 'Mango';
console.log(fruits)
fruits.pop()
fruits.push('Watermelon')
console.log(fruits)

var Me = 85;
var Tom = 66;
var Jane = 95;
var Peter = 56;
var John = 40;

var grade = John

if (grade >= 80) {
    console.log('A grade');
}
else if (grade >= 60) {
    console.log('B grade');
}
else if (grade >= 50) {
    console.log('C grade');
}
else if (grade >= 40) {
    console.log('D grade');
}
else {
    console.log('F grade');
}

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
if (t[0] === t[1]) {
    console.log('Isosceles');
}
else if (t[1] === t[2]) {
    console.log('Isosceles');
}
else if (t[0] === t[2]) {
    console.log('Isosceles');
}
else {
    console.log('Not Isosceles');
}