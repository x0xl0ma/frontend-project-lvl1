#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';

const getQuestionAnswer = () => {
  const lengthProgression = 10;
  const firstNum = getRandom(0, 30);
  const diff = getRandom(1, 10);
  const hiddenNum = getRandom(0, lengthProgression - 1);
  let question = '';
  for (let i = 0; i < lengthProgression; i += 1) {
    if (i === hiddenNum) {
      question = `${question}..`;
    } else {
      question = `${question} ${firstNum + i * diff}`.trim();
    }
  }
  const correctAnswer = String(firstNum + hiddenNum * diff);

  return cons(question, correctAnswer);
};

export default () => startGame(description, getQuestionAnswer);
