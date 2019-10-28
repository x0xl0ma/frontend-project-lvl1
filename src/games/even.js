#!/usr/bin/env node

import { cons, car, cdr, toString } from '@hexlet/pairs';
import { startGame, getRandom } from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (value) => value % 2 === 0;

const getQuestionAnswer = () => {
  const question = getRandom(1, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};


export default () => startGame(description, getQuestionAnswer);
