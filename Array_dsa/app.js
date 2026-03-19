const prompt = require("prompt-sync")()


// let arr = new Array(5).fill(23)
// console.log(arr.length);

// console.log(arr);

// arr[0] =23
// arr[1] =34
// arr[2] =2
// arr[3] =3
// arr[4] =236
// arr[5] =237
// console.log(arr.length);
// console.log(arr);

// let n = Number(prompt("Enter the size of array: "));
// let arr = [23, 45, 67, 89, 12];
// let arr = new Array(n);
// let sum = 0;
// let max= Math.max(arr[0],arr[1])
// let sMax = Math.min(arr[0],arr[1])

// let min = Infinity;
// let sMin = Infinity;


// for (let i = 0;i<arr.length;i++){
//     arr [i]= Number(prompt("Enter the value: "));
// }
// for (let i =0;i<arr.length;i++){
//     sum =sum + arr[i];
// }

// max elment in array


// for(let i =0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }

// second max element in array


// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         sMax = max;
//         max = arr[i];
//     }else if(arr[i]>sMax && arr[i]!=max){
//         sMax =arr[i];
//     }
// }
// min element in array

// for (let i =0;i<arr.length;i++){
//     if (arr[i] < min){
//         min =arr[i];
//     }
// }

// second min element in array

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         sMin = min;
//         min = arr[i];
//     } else if (arr[i] < sMin && arr[i] != min) {
//         sMin = arr[i];
//     }
// }

// console.log(arr);
// // console.log("The sum of Arr",sum);
// console.log("The second minimum element in array is: ", sMin);


//All zeroes to lefrt and all one to right 
let arr = [20,30,40,50,60]
let temp = new Array(arr.length)

let i = arr.length-1;
for (let j = 0;j<arr.length;j++){
    temp[j] =arr[i];
    i--;
}

console.log(arr)

console.log(temp);
;


