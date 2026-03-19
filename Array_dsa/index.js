const prompt = require("prompt-sync")();

let n = Number(prompt("Enter size: "));
let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(Number(prompt("Enter number: ")));
}

let sum = 0;
for (let i = 0; i < n; i++) {
  sum += arr[i];
}

let mean = sum / n;

console.log("Sum:", sum);
console.log("Mean:", mean);