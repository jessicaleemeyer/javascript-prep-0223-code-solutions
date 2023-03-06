function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);

console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);

console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  return ('"Hello World!"');
}

var getGreetingResult = getGreeting('World!');
console.log('getGreetingResult Exercise:', getGreetingResult);

function addAndMultipyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultipyBy5(10, 5);

console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivdeBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivdeBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}

var getCircleCicumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', getCircleCicumferenceResult);

function getFullName(firstnName, lastName) {
  var fullName = firstnName + ' ' + lastName;
  return fullName;
}

var getFullNameResults = getFullName('Juan', 'Ramirez');
console.log('getFullName Exercise:', getFullNameResults);

function cube(number) {
  return number * number * number;
}
var cubeResults = cube(5);
console.log('cube Exercise:', cubeResults);
