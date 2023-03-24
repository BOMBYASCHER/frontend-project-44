import { congratsMessage, getGameRounds, passMessage, questionMessage, randomNumber, stopMessage } from '../index.js';
import getName from '../cli.js';

const gcdGame = () => {
  const userName = getName();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < getGameRounds()) {
    let firstNumber = randomNumber(0, 100);
    let secondNumber = randomNumber(0, 100);
    let correctAnswer = getGcd(firstNumber, secondNumber);
    let expression = `${firstNumber} ${secondNumber}`;
    let userAnswer = questionMessage(expression);
    if (correctAnswer === userAnswer) {
      passMessage();
      i++;
    } else {
        stopMessage(userName, correctAnswer, userAnswer);
        break;
      }
    }
  if (i === getGameRounds()) {
    congratsMessage(userName);
  }
};

export default gcdGame;

const getGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return getGcd(secondNumber, firstNumber % secondNumber)
};
