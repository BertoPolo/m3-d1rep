/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
ex1 = (a, b) => {
  if (a === b) {
    return a * b;
  } else {
    return a + b;
  }
};
console.log(ex1(4, 2));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
ex2 = (num1, num2) => {
  if (num1 || num2 === 50 || num1 + num2 === 50) {
    return true;
  } else {
    return false;
  }
};
console.log(ex2(4, 2));
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
ex3 = (str, pos2) => {
  let stringToReturn = str.slice(0, pos2);
  return stringToReturn;
};
console.log(ex3("hello mates", 2));

/*
4)
 Create a function to find the largest of three given integers.
*/
ex4 = (num1, num2, num3) => {
  /* Math.max() */
  if (num1 > (num2 && num3)) {
    return num1;
  }
  if (num2 > (num1 && num3)) {
    return num2;
  } else num3 > (num1 && num2);
  {
    return num3;
  }
};
console.log(ex4(3, 7, 22));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
ex5 = (num1, num2) => {
  let result;
  if ((num1 && num2) >= 40 && 60 > (num1 && num2)) {
    return (result = "they are in 40-60 range");
  }
  if ((num1 && num2) >= 70 && 100 > (num1 && num2)) {
    return (result = "they are in 70-100 range");
  } else {
    return (result = "they are not in a acceptable range");
  }
  return result;
};
console.log(ex5(55, 59));
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
const ex6 = function (str, copyNum) {
  let theString = "";
  for (let i = 0; i < copyNum; i++) {
    theString += str + " ";
  }
  return theString;
};
console.log(ex6("hi", 3));
/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
// why dont work?
const ex7 = function (str) {
  if (str.toLowerCase(str.startsWith("los" || "new"))) {
    return str;
  } else {
    return false;
  }
};
console.log(ex7("los angeles"));
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const ex8 = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};
console.log(ex8([123, 324, 435]));
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const ex9 = (arr) => {
  return arr.includes(1 || 3);
};
console.log(ex9([123, 144]));

/* 10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
 */
const ex10 = (arr) => {
  return !arr.includes(1 || 3);
};
console.log(ex10([123, 144]));

/* 11)
Create a function to find the longest string from a given array of strings.
 */

/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

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

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
