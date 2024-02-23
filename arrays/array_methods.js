// push(): Adds one or more elements to the end of an array and returns the new length of the array.

let arr = [1, 2, 3, 4, 5];
let length = arr.push(6, 7); 
// adds 6, 7 to the end of the array
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]


// pop(): Removes the last element from an array and returns that element.

let courses = ['HTML', 'CSS', 'JS', 'React'];
let lastCourse = courses.pop();
 // removes React from the end
console.log(courses); // ['HTML', 'CSS', 'JS']


// shift(): Removes the first element from an array and returns that element.

let dishes = ['chapati', 'pulao', 'curry', 'ice cream'];
let firstDish = dishes.shift(); 
// removes chapati from the beginning
console.log(dishes); // ['pulao', 'curry', 'ice cream']


//unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

let fruits = ['apple', 'banana', 'orange'];
fruits.unshift('grape'); 
// adds grape to the beginning
console.log(fruits); // Output: ['grape', 'apple', 'banana', 'orange']


//slice(): Returns a shallow copy of a portion of an array into a new array object.

let anime = ['One Piece', 'Dragon Ball', 'Death Note', 'Attack on Titan'];
let newAnime = anime.slice(1, 3); 
// returns a new array with Dragon Ball and Death Note
console.log(newAnime); // returns ['Dragon Ball', 'Death Note']


//splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let books = ['The Habit', 'Atomic Habits', 'The Power of Habit'];
books.splice(1, 2, 'The Alchemist', 'The Secret');
// removes 'The Power of Habit' and adds 'The Alchemist'
console.log(books); // ['The Habit', 'Atomic Habits', 'The Alchemist']


//forEach(): Calls a function for each element in the array.

let numbers = [1, 2, 3, 4, 5]; 
numbers.forEach(function(number) { // number is the current element
  console.log(number);
});
// Output: 1 2 3 4 5
