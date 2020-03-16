const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num1 = Math.round(Math.random() * 10);
let num2 = Math.round(Math.random() * 10);
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}?\n`, userInput => {
  if (userInput.trim() === answer) {
    console.log("Great job, you're really smart!");
  } else {
    console.log("Better luck next time...");
  }
  rl.close();
});
