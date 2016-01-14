'use strict';

if (!/[a-zA-Z]/.test(process.argv[2]))
  return console.log('INVALID INPUT');

const from = 'A'.charCodeAt(0);
const to = process.argv[2].toUpperCase().charCodeAt(0);
const size = to - from;
const numberOfLines = 2 * size;

let diamond = [];

for (let i = -1; i++ < to - from;) {
  let line = [];
  let letter = String.fromCharCode(i + from);
  line[size - i] = line[size + i] = letter;
  line.splice(-2, 1).push('\n');
  diamond[i] = diamond[numberOfLines - i] = line;
}

diamond.forEach(line => console.log(line.join(' ')));
