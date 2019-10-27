#!/usr/bin/env node

import { getRandom, startGame } from '..';
import { cons, car, cdr, toString } from '@hexlet/pairs';


const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const operations = (operation, num1, num2) => {
    switch (operation) {
        case '+': 
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        default: break;
    }
};

const getOper = operators[getRandom(0, operators.length)];

const getQuestionAnswer = () => {
    const numberOne = getRandom(1, 99);
    const numberTwo = getRandom(1, 99);
    const question = `${numberOne} ${operation} ${numberTwo}`;
    const correctAnswer = toString(operations(numberOne, numberTwo, getOper));
    return cons(question, correctAnswer)
};

export const calcGame = () => startGame(description, getQuestionAnswer);

