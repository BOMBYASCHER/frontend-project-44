import getName from '../cli.js';
import { congratsMessage, getGameRounds, passMessage, questionMessage, randomNumber, stopMessage } from '../index.js';

const evenGame = () => {
    const userName = getName();
    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");
    let i = 0;
    while (i < getGameRounds()) {
        let correctAnswer;
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
}

export default evenGame;