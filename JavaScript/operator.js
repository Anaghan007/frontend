// 1.Add two numbers input by the user

let num1 = prompt("enter number1: ");
let num2 = prompt("enter number2: ");

alert(`Addition is: ${Number(num1) + Number(num2)}`);

// 2.Calculate the area of a rectangle

let length = 10;
let width = 50;

console.log(`Area of rectangle is ${length * width}`);

// 3.Convert temperature from Celsius to Fahrenheit

let celsius = 27;
let fahrenheit = ((celsius * 9) / 5) + 32;
console.log("Fahrenheit is : ", fahrenheit);

// 4.Find the remainder when one number is divided by another

console.log(10 % 6);

// 5.Calculate the power of a number

let value = 5;
let power = 3;

console.log(`Power of a number ${value} is ${value ** power}`);

// 6. Combination of Arithmetic Operators

{
    console.log(5 + 5);
    console.log(25 - 5);
    console.log(25 * 25);
    console.log(10 / 5);
    console.log(10 % 5);
    console.log(12 ** 2);
}


// 7.Comparing Numbers [5 number]

let n1 = 10;
let n2 = 55;

if (n1 > n2) {
    console.log("n1 is greater");
} else if (n1 < n2) {
    console.log("n2 is greater");
} else if (n1 == n2) {
    console.log("n1 is equal to n2");
} else {
    console.log("n1 is not equal to n2");
}

// 8.Comparing Strings [5 String]

{
    let val1 = "javascript";
    let val2 = "Javascript";

    console.log(val1 == val2);
    console.log(val1 === val2);
}

// 9.Comparing Different Types [4 types]

{
    let compareX = 10;
    let compareY = "10";
    let str = "10";
    let ud;
    let value = null;

    console.log(compareX == compareY);
    console.log(compareX === compareY);
    console.log(compareY === str);
    // console.log(typeof ud);
    console.log(ud === value);
    console.log("0" === false);
}

// 10. Using Multiple Operators [4 types]

{
    console.log((5 > 3) && (-5 < 3));
}

// 11. Javascript Program to Check if a Number is Odd or Even

{
    function checkOddOrEven(number) 
    {
    if (number % 2 === 0) 
        {
        console.log(`${number} is Even`);
    } 
    else 
    {
        console.log(`${number} is Odd`);
    }
}
    const number = 7; 
    checkOddOrEven(number);
}

// 12. JavaScript Program to Find the Largest Among Three Numbers

// function findLargestNumber(a, b, c) 
// {
//     if (a >= b && a >= c) 
//     {
//       return a;
//     } 
//     else if (b >= a && b >= c) 
//     {
//       return b;
//     } 
//     else 
//     {
//       return c;
//     }
//   }
//   let num1 = 10;
//   let num2 = 20;
//   let num3 = 15;
  
//   let largest = findLargestNumber(num1, num2, num3);
//   console.log("The largest number is: " + largest);  