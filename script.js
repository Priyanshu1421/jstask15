let arr = [4,8,2,11,6,7,10];

//Maximum Number :
let max = Math.max(...arr);
console.log("Maximum Number :", max);



// Sum of all element
let sum = 0;
for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
}
console.log("Sum of all element :", sum);


// Find odd number

let odd = arr.filter(num => num % 2 !== 0). length ;
console.log("Count of odd number :", odd);