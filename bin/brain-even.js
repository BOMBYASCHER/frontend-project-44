#!/usr/bin/env node
import getName from '../src/cli.js';
import { congratsMessage, getGameRounds, passMessage, questionMessage, randomNumber, stopMessage } from '../src/index.js';

const userName = getName();
console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");
let i = 0;
let correctAnswer = "";

while (i < getGameRounds()) {
    let number = randomNumber(0, 100);
    if (number % 2 == 0) {
        correctAnswer = "yes";
    } else {
        correctAnswer = "no";
    }
    let userAnswer = questionMessage(number);
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