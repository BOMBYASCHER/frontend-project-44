import readlineSync from 'readline-sync';

const gameRounds = 3;
export const getGameRounds = () => {
    return gameRounds;
}

export const questionMessage = (expression) => {
    console.log(`Question: ${expression}`);
    let enter = readlineSync.question("Your answer: ")
    return enter;
}

export const passMessage = () => {
    console.log("Correct!");
}

export const stopMessage = (username, correctAnswer, userAnswer) => {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${username}!`);
}

export const congratsMessage = (username) => {
    console.log(`Congratulations, ${username}!`);
}

export const randomNumber = (minValue, maxValue) => {
    let number = Math.random() * (maxValue - minValue) + minValue;
    return Math.round(number);
}