/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const calculateAndTriple = function (a, b) {
  return a === b ? (a + b) * 3 : a + b;
};

console.log(calculateAndTriple(4, 3));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const checkIfItsEqual = function () {
  let firstNumber = 30;
  let secondNumber = 30;

  if (
    firstNumber === 50 ||
    secondNumber === 50 ||
    firstNumber + secondNumber === 50
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
};

checkIfItsEqual();
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeCharacter = function () {
  let string = "Strive";
  string1 = string.slice(0, 3);
  string1 += string.slice(4, 7);
  console.log(string1);
};

removeCharacter();
/*

4)
 Create a function to find the largest of three given integers.
*/

const largestNumber = function () {
  let a = 3;
  let b = 2;
  let c = 1;

  if (a > b && a > c) {
    return console.log(`a is the biggest number = ${a}`);
  } else if (b > a && b > c) {
    return console.log(`b is the biggest number = ${b}`);
  } else {
    console.log(`c is the biggest number = ${c}`);
  }
};
largestNumber();

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const checkTheRange = function () {
  let x = 30;
  let y = 70;

  if ((x + y >= 40 && x + y <= 60) || (x + y >= 70 && x + y <= 100)) {
    console.log(`${x + y} = in the range`);
  } else {
    console.log(`is not in the range`);
  }
};
checkTheRange();
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const displayCityNames = function () {
  let citys = ["New York", "Guadalajara", "Omotepe", "Los Angelos"];

  for (let i = 0; i < citys.length; i++) {
    currentCity = citys[i];
    if (
      currentCity.slice(0, 3) === "New" ||
      currentCity.slice(0, 3) === "Los"
    ) {
      console.log(currentCity);
    }
  }
};
displayCityNames();

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const calculateTheSumOfArray = function () {
  let numbersInArray = [1, 2, 3];
  console.log(numbersInArray.reduce((a, b) => a + b));
};
calculateTheSumOfArray();
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const isNumber1or3 = function () {
  let arrayWith2Numbers = [5, 2];
  console.log(arrayWith2Numbers);
  if (arrayWith2Numbers.includes(1 || 3)) {
    console.log("it cointains the number 1 or 3");
  } else {
    console.log("Tested if there is a 1 or 3, and it isn´t.");
  }
};
isNumber1or3();
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

const isNotNumber1or3 = function () {
  let arrayWith2Numbers = [4, 2];
  console.log(arrayWith2Numbers);
  if (!arrayWith2Numbers.includes(1 || 3)) {
    console.log("it  dont cointains the number 1 or 3");
  }
};

isNotNumber1or3();

/*
11)

Create a function to find the longest string from a given array of strings.
*/
const longestString = function () {
  let findLongestString = ["hi", "how", "you´re", "doing"];
  let longestString = "0";
  for (let i = 0; i < findLongestString.length; i++) {
    currentString = findLongestString[i];
    if (currentString.length > longestString.length)
      longestString = currentString;
  }
  console.log(longestString + " - is the longest string in the array");
};

longestString();
/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
const typesOfAngle = function (angle) {
  if (angle < 90) {
    return "Acute angle.";
  }
  if (angle === 90) {
    return "Right angle.";
  }
  if (angle < 180) {
    return "Obtuse angle.";
  }
  if (angle === 180) {
    return "Straight angle.";
  }
};
console.log(typesOfAngle(70));
console.log(typesOfAngle(90));
console.log(typesOfAngle(140));
console.log(typesOfAngle(180));

/*
13)

Create a function to find the index of the greatest element of a given array of integers
*/
function greatestElement() {
  let differentNumbers = [1, 50, 3, 40, 5, 60, 7, 8, 9];
  let greatestNumber = differentNumbers[0];
  let indexOfNumber = 0;

  for (let i = 0; i < differentNumbers.length; i++) {
    let currentNumber = differentNumbers[i];
    if (greatestNumber < currentNumber) {
      greatestNumber = currentNumber;
      indexOfNumber = i;
    }
  }
  console.log(indexOfNumber + " is the index of the highest element");
}
greatestElement();
/*
14)

Create a function to get the largest even number from an array of integers.

15)
*/
function largestEvenNumber() {
  let arrayOfNumbers = [2, 4, 5, 6, 8, 10, 1];
  let evenNumbers = [];
  let largestEvennumber = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 === 0) {
      evenNumbers.push(arrayOfNumbers[i]);
      for (let j = 0; j < evenNumbers.length; j++) {
        if (evenNumbers[j] > largestEvennumber) {
          largestEvennumber = evenNumbers[j];
        }
      }
    }
  }
  console.log(evenNumbers + "the list with the even numbers");
  console.log(largestEvennumber + "this is the largest number in the array");
}
largestEvenNumber();
/*
Create a function to check from two given integers, whether one is positive and another one is negative.

16)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

17)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

18)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
