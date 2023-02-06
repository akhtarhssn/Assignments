// mindGame
// You are given a function named mindGame() which will take a positive number as a parameter. Now you will multiply that number with 3 and then plus 10 and then divide by 2 and next minus 5. what will be the output if we use 5 as input parameter

//evenOdd()
// You are given a function named evenOdd() which will take string as parameter. Now check the string length and output the even when the length is even number and output odd when length is odd number.

// isLGSeven()
// You are give a function named isLGSeven() which will take number as input. Your task is to find the difference between 7 and input value. Now deduct 7 from the input value if the value is less the 7 output it. But if the deducted value is greater than 7 multiply it by 2 and output the value.

// findingBadData()
// You are given a function named findingBadData() which will take an array as parameter. The array will contain multiple negative and positive numbers. We will call the negative number "Bad Data" and "Good Data" to all positive numbers. Now find all the negative numbers from this array Input: [ 1,2,5 ] and output the length of negative numbers

// gemsToDiamond()
// You are given a function named gemsToDiamond() which take 3 numbers as an input parameter. Now multiply the first parameter with 21 second parameter with 32 and third parameter with 43. Find the total of the input parameter after multiplication. Now if the multiplication number is more than 2000 then deduct 2000 from it and output the remains. And if the multiplication number is less than 2000 output the total.

// Problem 1: Let’s play a mind game
function mindGame(number) {
  // checking if the input type is integer/number.
  const isNumber = typeof number === "number";
  if (isNumber) {
    const result = (number * 3 + 10) / 2 - 5;
    return result;
  } else {
    console.log("Please input Numbers only");
  }
}
// const inputNumber = 33;
// console.log(mindGame(inputNumber));

// Problem 2: Finding even or odd
function evenOdd(stringOnly) {
  // checking if input type is string
  const isString = typeof stringOnly === "string";
  const stringLength = stringOnly.length;
  const even = "even";
  const odd = "odd";
  if (isString) {
    // Determine if the length is even or odd
    const isEven = stringLength % 2 === 0;
    if (isEven) {
      return even;
    } else {
      return odd;
    }
  } else {
    console.log("Please input String only");
  }
}
// const inputString = "Batch7";
// console.log(evenOdd(inputString));

// Problem 3: Is Less or Greater than seven
function isLGSeven(number) {
  // checking if input type is number
  const isNumber = typeof number === "number";
  if (isNumber) {
    const mainNumber = 7;
    const condition = number - mainNumber;
    // Output the result if the condition is true
    if (mainNumber > condition) {
      return condition;
    } else if (mainNumber < condition) {
      return number * 2;
    }
  } else {
    console.log("Please input Numbers Only");
  }
}
// const givenNumber = 6;
// console.log(isLGSeven(givenNumber));

// Problem 4: Finding Bad data
function findingBadData(arr) {
  // checking if input type is an array
  const checkedArray = Array.isArray(arr);
  if (checkedArray) {
    let badData = 0;
    for (let i = 0; i < arr.length; i++) {
      // Output the result if condition is true
      if (arr[i] < 0) {
        badData++;
      }
    }
    return badData;
  } else {
    console.log("Please input array only");
  }
}

// const inputArray = [-4, -9, -5, -33, -55];
// console.log(findingBadData(inputArray));

// Problem 5: Convert your gems into diamond
function gemsToDiamond(num1, num2, num3) {
  // checking if input type is number
  const isNumber =
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    typeof num3 === "number";
  num1 = num1 * 21;
  num2 = num2 * 32;
  num3 = num3 * 43;
  const total = num1 + num2 + num3;
  const condition = 1000 * 2;
  if (isNumber) {
    if (total > condition) {
      const result = total - 2000;
      return result;
    } else if (total < condition) {
      return total;
    }
  } else {
    console.log("Please input Numbers Only");
  }
}

// const friendsOne = 1;
// const friendsTwo = 1;
// const friendsThree = 1;
// const diamond = gemsToDiamond(friendsOne, friendsTwo, friendsThree);
// console.log(diamond);
