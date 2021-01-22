Homework 1

// function story ( a, b, c) {
//     let newArray = [];
//     newArray [0] = a;
//     newArray [1] = b;
//     newArray [2] = c;

//     console.log ("This is", newArray[0], ".", newArray[0], "is a nice person. today he is", newArray[1], ". He is", newArray[2], "all day. That's all folks");
// }

// let clientName = prompt ("Type a name");
// let clientMood = prompt ("Type a mood");
// let clientActivity = prompt ("Type a activity");

// story (clientName, clientMood, clientActivity);

Homework 2 

// function newArray (a, b, c, d, e) {
//     let numArray = [];
//     numArray [0] = a;  
//     numArray [1] = b;  
//     numArray [2] = c;  
//     numArray [3] = d;  
//     numArray [4] = e;

//     let sum = numArray[0] + numArray[1] + numArray[2] + numArray[3] + numArray[4];

//     console.log (sum)
// }

// let numberOne = parseInt(prompt("Please insert number one"));
// let numberTwo = parseInt(prompt("Please insert number two"));
// let numberThree = parseInt(prompt("Please insert number three"));
// let numberFour = parseInt(prompt("Please insert number four"));
// let numberFive = parseInt(prompt("Please insert number five"));

// newArray (numberOne, numberTwo, numberThree, numberFour, numberFive)

Homework 3

// function newArray (parameter) {
//     for (let i = 0; i < parameter.length; i++) {
//         if (parameter [i] === parameter [parameter.length - 1]) {
//             document.write(parameter[i] + ".");
//         }
//         else {
//             document.write(parameter[i] + " ");
//         }
//     }
// }
// newArray([ "Hello", "there", "students", "of", "SEDC"]);                // Zdravo decki, ako moze da proverite zasto vo console mi dava -> [Violation], prv pat go sretnuvam ova, kako da imam nesto na 47 i 51 red ama ne mozam da najdam sto e problemot, a zadacata si raboti

Homework 4

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write (i + "<br>");
//     }
//     else {
//         document.write (i + " ");
//     }
// }

Homework 5

// function maximumSum (array) {
//     let smallestLength = array[0];
//     let biggestLength = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (array [i] > biggestLength) {
//             biggestLength = array[i];
//         }
//         if (array [i] < smallestLength) {
//             smallestLength = array[i];
//         }
//     }
//     console.log (biggestLength + smallestLength);
// }

// maximumSum ([15, 2, 8, 10, 12, 25, 4, 20, 6, 28]);

Homework 6

// function summedArray (name, surname) {
//     var emptyArray = [];
//     var checkedLength

//     if(name.length < surname.length) {
//         checkedLength = name.length;
//     }
//     else {
//         checkedLength = surname.length;
//     }

//     for (var i = 0; i < checkedLength; i++) {
//         emptyArray [i] = ([(i + 1) + ". " + name[i] + " " + surname[i]]);
//     }

//     return emptyArray;
// }

// let firstNameArray = ["Filip", "Charles", "Michael", "Sebastian"];
// let secondNameArray = ["Tomeski", "Leclerc", "Schumaher"];

// console.log (summedArray (firstNameArray, secondNameArray));

Student excercise 1

// function sumPow (number1, number2) {
//     let sum = 0;

//     for (let i = number1; i <= number2; i++){
//         sum += Math.pow (i, 2);
//     }
//     return sum;
// }

// console.log (sumPow(101, 150));

Student exercise 2

// function numberCount (numberIndex, numberArray) {
//     let index = 0;

//     for (let i = 0; i < numberArray.length; i++) {
//         if (numberArray [i] === numberIndex) {
//             index++
//         }
//     }
//     return index;
// }
// let inputNumber = parseInt(prompt("Please enter a number from 1 to 8"));
// let testArray = [8, 8, 6, 3, 2, 6, 7, 8, 4, 1, 5, 2, 1, 3];
// console.log (`There are ${numberCount(inputNumber, testArray)} occurences of ${inputNumber} in the array`);

Student exercise 3

// function number (myArray, myType) {
//     let emptyArray = [];
//     if (myType === "even") {
//         for (let i of myArray) {
//             if (i % 2 === 0) {
//             emptyArray.push (i);
//         }
//     }
//     console.log (emptyArray)
// }
//     else if (myType === "odd") {
//         for ( i of myArray) {
//             if (i % 2 !== 0) {
//                 emptyArray.push(i);
//             }
//         }
//         console.log (emptyArray)
//     }
//     else {
//         console.log ("Incorrect input.");
//         return null;
//     }
// }

// number ([5, 34, 28, 15, 10, 23, 8, 4, 3, 18, 50, 100, 55], "even");