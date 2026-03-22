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
// let arr = [20,30,40,50,60]
// let temp = new Array(arr.length)

// let i = arr.length-1;
// for (let j = 0;j<arr.length;j++){
//     temp[j] =arr[i];
//     i--;
// }

// console.log(arr)

// console.log(temp);
// ;















//Array rotation by one to right


let arr = [1, 2, 3, 4, 5]
console.log(arr);

let temp = arr[arr.length - 1]
for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1]
}
arr[0] = temp

console.log(arr);

//ARRAY LEFT ROTATION BY K ELEMENTS

let Array = [1, 2, 3, 4, 5,]
let k = 5;

for (let j = 1; j <= k; j++) {
    let temp = Array[0]
    for (let i = 1; i<Array.length; i++) {
        Array[i-1]=Array[i]
    }
    Array[Array.length-1] = temp
}
console.log(Array);

//print the count of subarrays whose sum is equal
//to the target.
let array1=[1,2,3,4,5,7,8]
let t=12;
let count=0;
for (i=0;i<array1.length;i++){
    let sum =0;
    for(j=i;j<array1.length;j++){
        sum+=array1[j]
        if (sum==t)count++
    }
}

console.log(count);



