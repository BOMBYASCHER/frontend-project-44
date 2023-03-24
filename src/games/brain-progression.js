import { congratsMessage, getGameRounds, passMessage, questionMessage, randomNumber, stopMessage } from "../index.js";
import getName from "../cli.js";

const progressionGame = () => {
    const userName = getName();
    console.log("What number is missing in the progression?");
    let i = 0;
    while (i < getGameRounds()) {
        let correctAnswer = randomNumber(-100, 100);
        let userAnswer = questionMessage(generateProgression(10, correctAnswer));
        if (correctAnswer == userAnswer) {
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
}

export default progressionGame;

const generateProgression = (lengthOfProgression, correctAnswer) => {
    let stepValue = randomNumber(1, 10);
    let positionOfNumber = randomNumber(1, lengthOfProgression);
    let expression = "";
    for (let i = 1; i < positionOfNumber; i++) {
        expression = `${expression}${correctAnswer - stepValue * (positionOfNumber - i)} `;
    }
    expression = `${expression} .. `;
    for (let i = 0; i < lengthOfProgression - positionOfNumber; i++) {
        expression = `${expression}${correctAnswer + stepValue * (i + 1)} `;
    }
    return expression;
}