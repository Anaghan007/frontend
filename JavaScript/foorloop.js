// For Loop

{
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// While Loop

{
    let i = 20;
    while (i > 0) {
        console.log(i);
        i--;
    }
}

// Do While Loop

{
    let i = 5;
    do {
        console.log(`do while i ${i}`);
        i++;
    } while (i < 8);
}

// For of Loop

{
    let arr = [10, 50, 30, 560];
    let i = 0;
    for (let a of arr) {
        console.log(`Array[${i}]: ${a}`);
        i++;
    }    
}

// For in Loop

{
    const myObj = {"name": "Akash", "age": 10, "nationality": "India"};
    // console.log(myObj.nationality);
    // console.log(myObj["age"]);
    
    for (let obj in myObj) {
        console.log(`Keys: ${obj} : Value: ${myObj[obj]}`);
    }
}

// Nested For Loop

{
    for (let i = 1; i <= 5; i++) {
        // console.log(`Main Loop: ${i}`);
        for (let j = 1; j <= 10; j++) {
            // console.log(`Nested Loop: ${j}`);
        }
    }
}

// Break Statement

{
    for (let i = 1; i <= 5; i++) {
        // console.log(`Main Loop: ${i}`);
        for (let j = 1; j <= 5; j++) {
            if (j == 3) {
                break;
            }
            // console.log(`Nested Loop: ${j}`);
        }
    }
}

// Continue Statement

{
    for (let i = 1; i <= 5; i++) {
        console.log(`Main Loop: ${i}`);
        for (let j = 1; j <= 5; j++) {
            if (j == 3) {
                continue;
            }
            console.log(`Nested Loop: ${j}`);
        }
    }
}

// To break outer loop

{
    demo:for (let i = 1; i <= 5; i++) {
        console.log(`Main Loop: ${i}`);
        for (let j = 1; j <= 5; j++) {
            if (j == 3) {
                break demo;
            }
            console.log(`Nested Loop: ${j}`);
        }
    }
}


// 1. Write a program that calculates the sum of all numbers from 1 to 100.

{
    let sum = 0;

    for (let num = 1; num <= 100; num++) {
        sum = sum + num;
    }
    console.log("Sum of all numbers from 1 to 100: ", sum);
}

// 2. Write a program that prints the multiplication table of a given number (for example, 5).

{
    let num = 5;
    let i = 1;

    while (i <= 10) {
        console.log(`${num} * ${i} = ${num * i}`);
        i++;
    }
}

// 3. Write a program that calculates the factorial of a given number (for example, 5!).

{
    let i = 5;
    let fact = 1;

    while (i >= 1) {
        fact = fact * i;
        i--;
    }
    console.log("Factorial ", fact);
}

// 4. Write a program that prints the first 10 numbers in the Fibonacci sequence.

{
    let n1 = 0;
    let n2 = 1;
    let n3 = 1;
    let i = 1;

    console.log(`Fibonacci Series ${n1}`);

    while (i <= 10) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;

        i++;
        console.log(`Fibonacci Series ${n1}`);
    }
}

// 5. Write a program that reverses a given string.

{
    let str = "JavaScript";

    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
    }
}

// 6. Write a program that calculates the sum of all elements in an array.

{
    let numArray = [10, 20, 30, 40, 50];
    let sum = 0;

    for (let num of numArray) {
        sum += num;
    }
    console.log(`Sum of all elements of array ${sum}`);
}

// 7. Write a program that finds the largest number in an array.

{
    let arr = [5, 15, 2, 546, 85];
    let largest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    console.log(`Largest number in an array ${largest}`);
}

// 8. Write a program that counts the number of vowels in a given string.

{
    let word = "Hello";
    let countVowels = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
            countVowels++;
        }
    }
    console.log(`Vowels: ${countVowels}`);
}