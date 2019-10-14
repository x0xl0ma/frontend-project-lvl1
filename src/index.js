import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from '@hexlet/pairs';

export const greeting = () => console.log('Welcome to the Brain Games!');

export const userName = () => readlineSync.question('May I have your name?');

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (value) => value % 2 === 0;
const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);
const getQuestionAnswer = () => {
  const question = getRandom(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const correctAnswersCount = 3;
export const firstGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
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



