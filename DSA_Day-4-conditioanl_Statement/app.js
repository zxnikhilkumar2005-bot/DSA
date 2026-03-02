const prompt = require("prompt-sync")();
// let makes = Number(prompt("Enter your makes: "))

// if (makes>85 && makes<=95)console.log("excellent");
// else if(makes>80 && makes<=85)console.log();

// 10 Accept two number and print the greatest between them 

// let Number_a = Number( prompt ("Enter the number A: "));//10
// let Number_b = Number(prompt("Enter the nuber B: "));//5

// if (Number_a>Number_b){
//     console.log(`${Number_a} is bigger then ${Number_b}`)
// } else if(Number_b>Number_a){
//     console.log(`${Number_b} is bigger then ${Number_a}`)
// }else{
//     console.log("Bhot number are equle ");

// }

//11 Accpt an number form use and check whether it is an even nunber or odd. 

// let a = Number(prompt("Enter the number: "))
// if (a%2 === 0 ){
//     console.log(`${a} is even number`);
// }else{
//     console.log(`${a} is odd number`)
// }



// let number = Number(prompt("Enter the number: "));

// if ((number & 1) === 0) {
//     console.log(`${number} is even number`);
// } else {
//     console.log(`${number} is odd number`);
// }


// 13 Accept three number and print the greatest among them.

// let first_number = Number(prompt("Enter the fist number: "))
// let second_number = Number(prompt("Enter the Second number: "));
// let third_number = Number(prompt("Enter the Thrid number: "))

// if (first_number >= second_number && first_number >= third_number) {
//     console.log(`The greatest among them is ${first_number}`);
// } 
// else if (second_number >= first_number && second_number >= third_number) {
//     console.log(`The greatest among them is ${second_number}`);
// } 
// else {
//     console.log(`The greatest among them is ${third_number}`);
// }

//Q14 Accept a year and check if it a leap year or not (google to find out 
// what's a leap year)

// let year = Number(prompt('Enter a year'))

// if (year % 4==0 && year%100 !=0 )console.log("leap year");
// else if (year% 400 ==0)console.log("leap year");
// else console.log("no leap year");

// Q15 Shop discount - description on graphic 
//   AMOUNT       DISCOUNT
//    0-5000         0%
//   5001-7000       5%
//   7001-9000       10%
//  more than 9000   20%
// let amount = Number(prompt("Enter amount: "))//100 
// let five_percentage = (5*amount) / 100;
// let ten_percentage = (10 * amount) / 100;
// let twenty_percentage = (20 * amount) / 100;

// if (amount >= 0 && amount <= 5000) console.log(`The totale pay amount is ${amount}`);
// else if (amount >= 5001 && amount <= 7000) console.log(`The totale pay amount is ${Math.round(amount - five_percentage)}`);
// else if (amount >= 7001 && amount <= 9000) console.log(`The totale pay amount is ${Math.round(amount - ten_percentage)}`);
// else console.log(`The totale pay amount is ${Math.round(amount - twenty_percentage)}`);

//     UNIT             PRICE 


//  up to 100            4.2/unit 
//  101 to 200           6/unit 
//  201 to 400           8/unit 
//  more than 400       13 /unit 

// let unit = Number(prompt("Enter usit "));

// let six_unit = (100*4.2) + ((unit-100)*6);
// let eight_unit = (100*4.2) +(100*6) + ((unit-200)*8);

// let Thirteen_unit = (100*4.2)+(100*6) + (200*8) + ((unit-400)*13);


// if (unit>=0 && unit<=100)console.log(`The pay amount is:  ${(unit*4.2)}`);
// else if(unit>=101 && unit<=200)console.log(`The pay amount is: ${six_unit}`);
// else if(unit>=201 && unit<=400)console.log(`The pay amount is: ${eight_unit}`);
// else console.log(`The pay amount is: ${Thirteen_unit}`);

//Q17 Counting number of day in a given month of a year 

// let month = Number(prompt("Enter the month: "));
// let year = Number(prompt("Enter the year: "));

// let Day = 0;
// if (month == 2) {
//     if ((year % 400==0)||(year%4==0 & year %100 !=0)) {
//         Day = 29;
//     } else Day = 28;
// }else if(month ==1 || month == 3 || month == 5 || month == 7 || month == 8 || month== 10 || month ==12 ){
//     Day = 31
// }else
//     Day = 30;

// console.log(Day);

// let a = 5;
// let b = 10;
// let result = (a > b) ? a + b : a - b;
// console.log((result));


// let x = 1;
// if (x) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// }


let a = 5;
let b = "5";
if (a === b) {
    console.log("Equal");
} else {
    console.log("Not Equal");
}

