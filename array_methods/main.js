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




function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate('3 + 6')
console.log(result)

