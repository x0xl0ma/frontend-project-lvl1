#!/usr/bin/env node

import { cons, car, cdr, toString } from '@hexlet/pairs';
import { startGame } from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (value) => value % 2 === 0;
const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);
const getQuestionAnswer = () => {
  const question = getRandom(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export const evenGame = () => startGame(description, getQuestionAnswer);
