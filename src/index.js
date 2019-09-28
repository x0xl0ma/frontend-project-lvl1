import readlineSync from 'readline-sync';

export const greeting = () => console.log('Welcome to the Brain Games!');

export const userName = () => readlineSync.question('May I have your name?');

export const rules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const randomNum = (num = 1000) => Math.floor(Math.random() * num);

export const question = () => console.log('Question:'(randomNum());

export const yourAnswer = () => readlineSync.question('Your answer: ');

export const isEven = (num) => {
 if (num % 2 === 0) {
   return true;
 } return false;
};

export const isCorrectAnswer = (isEven(question)) ? 'yes' : 'no';

export const firstGame = () => {
 for(let i = 0; i < 3; i += 1) {
 if (isCorrectAnswer === yourAnswer) {
  console.log('Correct!');
 } else (isCorrectAnswer !== yourAnswer) {
  return console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${isCorrectAnswer}.
Let's try again, ${name}!`);
 } return console.log(`Congratulations, ${name}!`);
 }
};  


