// string + sring = sting (contenation)


// let s1 = "helllo";
// let s2 = " world";
// console.log(s1 + s2);

// let  prompmt =require ("prompt-sync")()
// let age = Number(prompmt("Enter your age "))
// console.log(typeof(age));

// console.log(`Age ${age}`);

// let a = 10
// let b = 20
// console.log(a+b)
// console.log(a+b)
// console.log(a+b)

// let useName = "Nikhil "
// let age = 12;
// console.log(`Hello ${useName}you are ${age} years olde.`);


// let  prompmt =require ("prompt-sync")()
// let a = Number(prompmt("Enter a number"))//5
// let b = Number(prompmt("Enter b number"))//10
// a = a+ b//23+14 = 37
// b= a-b //37-14= 23
// a= a-b//37-23= 14



// console.log(a,b);


let  prompt = require ("prompt-sync")()

let p = prompt ("Enter principle")
let r = prompt ("Enter reate of interest ")
let t = prompt ("Enter time")

console.log(p*Math.pow(1+(r/100),t)-p);
