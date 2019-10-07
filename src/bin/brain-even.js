#!/usr/bin/env node

import { greeting, userName, rules, firstGame } from '..';

greeting();
const name = userName();
console.log(`Hello, ${name}!`);
firstGame();
