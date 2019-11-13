#!/usr/bin/env node

import startGame from '..';
import { cons } from '@hexlet/pairs';
import getRandom from '../utils';
export default () => startGame(description, getQuestionAnswer);

const description = 'What is the result of the expression?';

const signs = '+-*';

const mathSign = () => {
  const index = getRandom(0, signs.length - 1);
  return signs[index];
};

const getCorrectAnswer = (num1, num2, signs) => {
  switch (signs) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      return null;
 }
};

const getQuestionAnswer = () => {
    const num1 = getRandom(1, 99);
    const num2 = getRandom(1, 99);
    const sign = mathSign();
    const question = `${num1} ${sign} ${num2}`;
    const correctAnswer = String(getCorrectAnswer(num1, num2, sign));
    return cons(question, correctAnswer);
};

export default () => startGame(description, getQuestionAnswer);
