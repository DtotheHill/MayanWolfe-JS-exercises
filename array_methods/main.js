// 1. Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// function camelize(str){
//     let newString = str.split('-')
//     newString = newString.map(
//         function (word, index){
//             if (index === 0){
//                 return word.toLowerCase()
//             }else {
//                 return word [0].toUpperCase() + word.slice(1)
//             }
//         }
//     )
//         newString = newString.join('')
//         return newString
// }


// console.log(camelize("-webkit-transition"))


// function camelizeTwo(str){
//     return str .split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
// }

// console.log(camelizeTwo("background-color"))
// console.log(camelizeTwo("list-style-image")) 
// console.log(camelizeTwo("-webkit-transition"))


// 2. Filter Range

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// function filterRange(arr, a, b){
//     return arr.filter(item => (a <= item && item <= b))
// }

// let arr = [5,3,8,1]

// let filtered = filterRange(arr, 1, 4)

// console.log(filtered)

// console.log(arr)


// 3. Filter Range 'in place'

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.


// function filterRangeInPlace(arr, a, b){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < a || arr[i] > b){
//             arr.splice(i, 1)
//             i--
//         }
//     }
// }

// let arr = [5, 2, 3, 4, 0, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// console.log( arr ); // [3, 1]

// 4. Sort in decreasing order

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b)=> b-a )

// console.log(arr)


// 5. Copy and sort array

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.


// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr){
//     return arr.slice().sort()
// }

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)



// 6. Create an extendable calculator




// function Calculator() {

//     this.methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b
//     };
  
//     this.calculate = function(str) {
  
//       let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2];
  
//       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//       }
  
//       return this.methods[op](a, b);
//     };
  
//     this.addMethod = function(name, func) {
//       this.methods[name] = func;
//     };
//   }

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// // console.log(powerCalc.methods)


// let result = powerCalc.calculate('3 + 6')
// console.log(result)

// 7. Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];


// let names = users.map(item => `My name is ${item.name} and I'm ${item.age} years old`)


// // let names = users.map(item => item.name)

// console.log( names ); // John, Pete, Mary

// 8. Map to objects
// importance: 5
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map (user => ({
//   fullName: `${user.name} ${user.surname}`, id: user.id
// }))

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// // console.log(usersMapped)

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith


// 9. Sort users by age

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let frank = {name: "Frank", age: 69 };

// let arr = [ pete, john, mary, frank ];

// function sortByAge (arr){
//   arr.sort((a,b)=> a.age-b.age)
// }

// sortByAge(arr)

//Arrow function 
// let sortByAge = arr => arr.sort((a,b)=> a-b)

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete
// console.log(arr[3].name);



// 10. Shuffle an array
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];



// console.log(shuffle(arr));
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...

//Fisher Yates method is the best way to truly randomize an array

// function shuffle(array){
//  for (let i = array.length-1; i > 0; i-- ){
//    let j = Math.floor(Math.random()* (i + 1));
//    [array[i], array[j]] = [array[j], array[i]];
//  }
// }

// 11. Get average age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(users){
//   return users.reduce((prev, user)=> prev + user.age, 0 ) / users.length
// }

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// 12. Filter unique array members
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.


// function unique(arr) {
//   let result =[]

//   for (let str of arr){
//     if(!result.includes(str)) {
//       result.push(str)
//     }
//   }

//   return result;

// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(strings) ); // Hare, Krishna, :-O


// 13. Create keyed object from array
// importance: 4
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.


// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];




// let usersById = groupById(users);


// function groupById(array){
//   return array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj
//   }, {})
// }

// console.log(usersById)

// after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }

// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.


// Alternative method to solving problem//

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];


// let usersById = groupById(users);


// function groupById(array){
//   let result = {}
//   array.forEach((item) => result [item.id] = item)
//   return result;
// }




// console.log(usersById)


