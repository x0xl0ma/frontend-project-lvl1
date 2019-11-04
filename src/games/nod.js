#!/usr/bin/env node

import { cons, car, cdr, toString } from '@hexlet/pairs';
import { startGame, getRandom } from '..';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  } return gcd(num2, num1 % num2);
};

const getQuestionAnswer = () => {
    const num1 = getRandom(1, 99);
    const num2 = getRandom(1, 99);
    const question = `${num1} ${num2}`;
    const correctAnswer = String(gcd(num1, num2));
    return cons(question, correctAnswer)
};


export default () => startGame(description, getQuestionAnswer);


