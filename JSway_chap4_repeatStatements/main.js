/* Tasks from https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md

1. Carousel
Write a program that launches a carousel for 10 turns, showing the turn number each time.*/

// for (let i=1; i <=10; i++){
//   console.log(`You have gone around ${i} times`)
// }

// When it's done, improve it so that the number of turns is given by the user.

// let userAsk = Number(prompt('How many times would you like to go around?'))

// for(let i = 1; i <= userAsk; i++){
//   console.log(`As requested, you've gone around ${i} times`)
// }


/* 2. Parity 
Check the following program that shows even numbers (divisible by 2) between 1 and 10.
for (let i = 1; i <= 10; i++) {
if (i % 2 === 0) {
console.log(`${i} is even`);
}
}*/

// Improve the program so that it also shows odd numbers. 

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//   console.log(`${i} is even`);
//   }else {
//     console.log('odd')
//   }
// }


// Improve it again to replace the initial number 1 by a number given by the user. */

// let userNumber = + prompt('What number would you like to check?')

// for (let i = userNumber; i<=userNumber; i++){
//   if (i % 2 === 0){
//     console.log(`${i} is even`)
//   }else {
//     console.log(`${i} is odd`)
//   }
// }



// 3. Input validation

// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// let userGuess = 101;

// while (userGuess >= 100){
//   userGuess = +prompt('please enter a number', 200)
//   if(userGuess <=99){
//     console.log('We got a winner!')
//   }else {
//     console.log('keep guessing')
//   }
// }


// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

// let userPrompt = 101;

// while (userPrompt > 100 || userPrompt < 50){
//   userPrompt = +prompt('Pick a number')
// }

// 4. Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.

// let askUser = +prompt('Please enter a number.')

//  for (let i=1; i<=10; i++){
//    let timesEquals = askUser * i
//    console.log(`${askUser} * ${i} = ${timesEquals}`)
//  }


 // When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

// let userInput = 0;

// while(userInput < 2 || userInput > 9){
//   userInput = prompt('Enter an integer', 0)
// }

// for (let i = 1; i<=10; i++){
//   let time = userInput * i
//   console.log(`${userInput} * ${i} = ${time}`)
// }


// 5.  Neither yes nor no

// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

// let userWord = ''

// while (userWord !=='yes' && userWord !== 'no'){
//   userWord = prompt('Enter a word').toLowerCase()
// }

// 6. FizzBuzz

// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.


// for (let i=1; i <=100; i++){
//   if(i % 15 === 0){
//     console.log(`${i} Fizz Buzz`)
//   }else if (i % 5 === 0){
//     console.log(`${i} Buzz`)
//   }else if (i % 3 === 0) {
//     console.log(`${i} Fizz`)
//   }
// }

// ====== Shortening codiitional statements ======//

// let word = prompt('please insert something')


// Long version 

// if (word =='hello there!'){
//   console.log('Hello to you too!')
// }else {
//   console.log('sorry wrong person')
// }

//======Shortened verson ======//

// Ternary expression//

// word == 'hello there!' ? console.log('Hello to you too!') : console.log('sorry wrong person')




// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//   console.log(`${i} is even`);
//   }else {
//     console.log('odd')
//   }
// }


for (let i = 1; i <= 10; i++) {

i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`)
}