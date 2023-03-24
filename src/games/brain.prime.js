import { congratsMessage, getGameRounds, passMessage, questionMessage, randomNumber, stopMessage } from "../index.js";
import getName from "../cli.js"

const primeGame = () => {
    const userName = getName();
    console.log("Answer \"yes\" if given number is prime. Otherwise answer \"no\".");
    let i = 0;
    while (i < getGameRounds()) {
        let number = randomNumber(0, 100);
        let userAnswer = questionMessage(number);
        let correctAnswer = "no";
        if (isPrime(number)) {
            correctAnswer = "yes";
        }
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

export default primeGame;

const isPrime = (number) => {
    let i = 2;
    while (i < Math.sqrt(number)) {
        if (number % i == 0) {
            return false;
        }
        i++;
    }
    return true;
}