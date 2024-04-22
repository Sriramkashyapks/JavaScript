const phones = ['Apple' , 'Samsung', 'nubia'];
const cars = ['Jeep', 'Garuda', 'Honda'];
let nos = [66,69, 72, 37, 22, 46];

//eg1
console.log(phones[0]); 
console.log(phones[2]);
console.log(phones.slice(0,2));

//cocncat
console.log(phones.concat(cars));

// find()
//The .find() method returns the first element in the array that satisfies the given function.
let values = nos.find((element) => element >= 0);
console.log(values);


 
//foreach()
const ans = nos.forEach((nos) => console.log(nos));

//indexof()

const res = nos.indexOf('nubia')
console.log(res);

//join()
const withoutSeparator = nos.join();
const withSeparator = nos.join('+');

console.log(withoutSeparator);
console.log(withSeparator);

//.length

const result = nos.length;
console.log(result);

//map()
// Creates a new array with the results of calling a function for every element in array.
const any = nos.map((ele) => ele*2);
console.log(any);

//reduce
const arrayOne = ['b', 'c', 'd', 'e'];

console.log("The answer is ", arrayOne.reduce((acc, cur) => acc + cur)); //takes two parameters accumulator, current value
//accumulator => values returned from the funciton
//current value => current value iterated over

console.log("The answer is ", arrayOne.reduce((acc, cur) => acc + cur, 'a')); //abcde

//toString

numbers = nos.toString();
console.log(numbers);
console.log(typeof(numbers));
console.log(typeof(nos));