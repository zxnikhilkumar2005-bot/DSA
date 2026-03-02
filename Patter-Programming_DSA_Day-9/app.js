let prompt = require("prompt-sync")()
// let n = Number (prompt("Enter a number: "))//145
// let copy = n;
// let ans = 0; // 0 

// while(n>0){ //145 
//     let dig = n%10; //145 % 10 = 5 
//     let fact = 1;
//     for (let j = 1; j<=dig ;j++){ // dig = 5
//         fact = fact *j; // 1 * 2 * 3 * 4 * 5 
//     }
//     ans = ans + fact;
//     n=Math.floor(n/10);
// }

// if (copy == ans ){
//     console.log("Strong Number");
// }else{
//     console.log("Not Strong Number");
// }

// let r = Number(prompt("Enter a nuumber of rooe:"))
// // let c = Number(prompt("Enter a nuumber of colem:"))

// for (let i = 1; i <= r; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*")

//     }
//     console.log();
// }


// let r = Number(prompt("Enter a nuumber of rooe:"))
// let r = ["A","B","C","D","E"];
// for (let i = 0; i <= r.length; i++) {
//     for (let j = 0; j <= i; j++) {
//         process.stdout.write(r[j] +1);
//     }
//     console.log();
// }

// let r = ["A","B","C","D","E"];

// for (let i = 1; i <= r.length; i++) {
//     let str = "";

//     for (let j = 0; j < i; j++) {
//         str += r[j];
//     }

//     console.log(str);
// }
// A
// AB
// ABC
// ABCD
// ABCDE

// *****
// ****
// ***
// **
// *
// let n = Number(prompt("Enter a number of stare: "))
// for (let r= 0; r<=n; r++){
//     for (let c=0; n<=r;c++){
//          process.stdout.write("*")
//     }
//     console.log();
// }
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i + 1; j++) {
//         process.stdout.write("*")
//     }
//     console.log();
// }
// Enter a number of stare: 5
// *****
// **** 
// ***  
// **   
// *   
// let n = Number(prompt("Enter a number of stare: "))//n 

// for (let i = 1; i <= n; i++) {//i<5 
//     for (let j= 1;j<=n-i+1;j++) { // j=5  
//        process.stdout.write(" ")
//     } for (let j= 1;j<=i;j++) { // j=5  
//        process.stdout.write("* ")
//     }
//     console.log();
    
// }
// let n = Number(prompt("Enter a number of stare: "))//n 

// for (let i = 1; i <= n; i++) {//i<5 
//     for (let j= 1;j<=n;j++) {  
//       if (i==j || (i+j==n+1))process.stdout.write("*")
//          else process.stdout.write(" ")
//     }
//     console.log();
    
// }

// let n = Number(prompt("Enter a number of stare: "))//n 


// for (let i = 0; i < n; i++) {

//     // left spaces
//     for (let j = 0; j < i; j++) {
//         process.stdout.write(" ");
//     }

//     // first star
//     process.stdout.write("*");

//     // middle spaces
//     for (let j = 0; j < 2*(n-i)-3; j++) {
//         process.stdout.write(" ");
//     }

//     // second star (except last row)
//     if (i != n-1) {
//         process.stdout.write("*");
//     }

//     console.log();
// }

// let r = Number(prompt("Enter a nuumber of rooe:"))
// // let c = Number(prompt("Enter a nuumber of colem:"))

// for (let i = 1; i <= r; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*")

//     }
//     console.log();
// }


console.log("hello ji");
