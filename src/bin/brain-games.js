#!/usr/bin/env node

import { greeting, userName } from '..';

greeting();
const name = userName();

console.log(`Hello, ${name}!`);



