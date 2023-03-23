#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from '../src/cli.js'
const userName = getName();
console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");
let i = 0;
const gameRounds = 3;
let correctAnswer = "";
while (i < gameRounds) {
    let number = Math.random() * 100;
    number = Math.round(number);
    if (number % 2 == 0) {
        correctAnswer = "yes";
    } else {
        correctAnswer = "no";
    }
    console.log("Question: " + number);
    let userAnswer = readlineSync.question("Your answer: ");
    if (userAnswer == correctAnswer) {
        console.log("Correct!");
        i++;
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
    }
}
if (i == gameRounds) {
    console.log(`Congratulations, ${userName}!`);
}