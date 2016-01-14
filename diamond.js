'use strict';

if (!process.argv[2] || !/[a-zA-Z]/.test(process.argv[2]))
  return console.log('INVALID INPUT');

const from = 'A'.charCodeAt(0);
const to = process.argv[2].toUpperCase().charCodeAt(0);
const size = to - from;
const numberOfLines = 2 * size - 1;

let diamond = [];

for (let i = -1; i++ < to - from;) {
  let line = [];
  let letter = String.fromCharCode(i + from);
  line[size - i] = line[size + i] = letter;
  line.push('\n');
  diamond[i] = diamond[numberOfLines - i + 1] = line;
}

let output = '';
let write = string => output += (string || ' ');
diamond.forEach(line => {for (let character of line) write(character)});
console.log(output);