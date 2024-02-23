// program to print all the even numbers present in an array

const age = [21, 22, 23, 24, 25, 26]; // decalring an array

for (let i =0; i <= age.length; i++){ //iterarting each element in the array
    if ((age[i] % 2) == 0){ // checking if the element is even => eg : 22 % 2 = 0
        console.log(age[i]);
    } 
}


// program to print biggest numbers in array

const array = [29, 22, 23, 24, 88, 66];
let max = array[0]; // assuming first element is the biggest
 
for (let i=1; i < array.length; i++){
    if (max < array[i]){  // comparing each element with the first element
        max = array[i];            // if current element is greater than first elemnt replce it with max
    }
}

console.log(max);



// program to reverse all the element in array

let number = [1, 2, 3, 4, 10, 20];
let temp = 0;
for (let i = 0; i < number.length/2; i++){ // iterating from 0 to half of the array
        number[i] = temp;                  // palcing the first element in temp
        number[i] = number[number.length -1 -i]; // placing the last element in the first position
        number[number.length -1 -i] = temp;       // placing value of temp to last position
}   
console.log(number);





