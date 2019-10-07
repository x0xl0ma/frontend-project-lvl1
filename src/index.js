import readlineSync from 'readline-sync';

export const greeting = () => console.log('Welcome to the Brain Games!');

export const userName = () => readlineSync.question('May I have your name?');

 const rules = 'Answer "yes" if the number is even, otherwise answer "no".'; 
 const question = (num) => Math.floor(Math.random() * num);
 const isEven = (num) => num % 2 === 0;
 const isCorrectAnswer = isEven(question) ? 'yes' : 'no';

export const firstGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const rightAnswers = 3;
  let counter = 0;

  for(; counter < rightAnswers; counter += 1) {
    console.log(`Question: ${question(1000)}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    
    if(yourAnswer !== isCorrectAnswer) {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${isCorrectAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } console.log('Correct!');
  }
  if (counter === rightAnswers) {
    console.log(`Congratulations, ${userName}!`);
  }
};




