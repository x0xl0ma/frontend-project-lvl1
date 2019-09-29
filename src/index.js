import readlineSync from 'readline-sync';

export const greeting = () => console.log('Welcome to the Brain Games!');

export const userName = () => readlineSync.question('May I have your name?');

export const rules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const firstGame = () => {
    for (let i = 0; i < 3; i += 1) {

const randomNum = (num = 1000) => Math.floor(Math.random() * num);

const question = () => console.log(`${'Question:'}${randomNum()}`);

const yourAnswer = () => readlineSync.question('Your answer: ');

const isEven = (num) => {
 if (num % 2 === 0) {
   return true;
 } return false;
};

const isCorrectAnswer = () => (isEven(question())) ? 'yes' : 'no';
        
if (isCorrectAnswer === yourAnswer) {
          return console.log(`'Correct!'${question()}`);
        } return console.log(`"${yourAnswer()}" is wrong answer ;(. Correct answer was "${isCorrectAnswer()}".
Let's try again, ${userName()}!`);
        } return console.log(`Congratulations, ${userName()}!`);
};


