#!/usr/bin/env node
import { congratsMessage, getGameRounds, passMessage, questionMessage, randomNumber, stopMessage } from "../src/index.js";
import getName from "../src/cli.js";

const userName = getName();
console.log("What is the result of the expression?");
let i = 0;
let correctAnswer;

while (i < getGameRounds()) {
    let firstNumber = randomNumber(0, 100);
    let secondNumber = randomNumber(0, 100);
    let key = randomNumber(1, 3);
    let expression = "";
    if (key == 3) {
        secondNumber = randomNumber(0, 10);
    }
    switch (key) {
        case 1:
            expression = `${firstNumber} + ${secondNumber}`;
            correctAnswer = firstNumber + secondNumber;
            break;
        case 2:
            expression = `${firstNumber} - ${secondNumber}`;
            correctAnswer = firstNumber - secondNumber;
            break;
        case 3:
            expression = `${firstNumber} * ${secondNumber}`;
            correctAnswer = firstNumber * secondNumber;
            break;
    }
    let userAnswer = questionMessage(expression);
    if (userAnswer == correctAnswer) {
        passMessage();
        i++;
    } else {
        stopMessage(userName, correctAnswer, userAnswer);
        break;
    }    
}
if (i == getGameRounds()) {
    congratsMessage(userName);
}