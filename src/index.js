import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from '@hexlet/pairs';

export const greeting = () => console.log('Welcome to the Brain Games!');

const userName = () => readlineSync.question('May I have your name?');

const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);

const correctAnswersCount = 3;
export const startGame = () => {
  console.log(greeting);
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  for (let i = 0; i < correctAnswersCount; i += 1) {
    const questionAnswer = getQuestionAnswer();
    const question = car(questionAnswer);
    const correctAnswer = cdr(questionAnswer);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log();
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    console.log();
  }
  console.log(`Congratulations, ${userName}!`);
};



