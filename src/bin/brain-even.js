#!/usr/bin/env node

import { greeting, userName, rules, randomNum, question, yourAnswer, isEven, isCorrectAnswer, firstGame } from '..';

greeting();
const name = userName();
console.log(`Hello, ${name}!`);
rules();
randomNum();
question();
yourAnswer();
isEven();
isCorrectAnswer();
firstGame();
