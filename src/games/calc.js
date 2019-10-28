#!/usr/bin/env node

import { getRandom, startGame } from '..';
import { cons, car, cdr, toString } from '@hexlet/pairs';


const description = 'What is the result of the expression?';

const mathSign = (signs = '-+*') => {
  const index = getRandom(0, signs.length - 1);
  return signs[index];
};

const getCorrectAnswer = (num1, num2, sign) => {
  if (sign === '+') {
    return num1 + num2;
  }
  if (sign === '-') {
    return num1 - num2;
  }
  if (sign === '*') {
    return num1 * num2;
  }
  return null;
};
const getQuestionAnswer = () => {
    const num1 = getRandom(1, 99);
    const num2 = getRandom(1, 99);
    const getMathSign = mathSign();
    const question = `${num1} ${getMathSign} ${num2}`;
    const correctAnswer = String(getCorrectAnswer(num1, num2, getMathSign));
    return cons(question, correctAnswer)
};

export default () => startGame(description, getQuestionAnswer);

