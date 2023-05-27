'use strict';

const List = require('./source/List.js');

const list = new List();

// Checking append for list
list.append('M');
list.append('y');
list.append(' ');
list.append('l');
list.append('i');
list.append('s');
list.append('t');

// Checking length for list (result just easier to see)
console.log("Method append:");
process.stdout.write("Symbolically added 'My list' : ")
console.log(`Size list: ${list.length()}, result: ${list.result()}`);

// Checking insert for list
list.insert('!', 0);
list.insert('!', list.length());
list.insert('l', 4);
list.insert('o', 5);
list.insert('v', 6);
list.insert('e', 7);
list.insert(' ', 8);

console.log("Method insert:");
process.stdout.write("Inserted by symbols '!' 'love ' '!': ");
console.log(`Size list: ${list.length()}, result: ${list.result()}`);

// Checking delete for list
const deleteElemlent_1 = list.delete(0); // '!'
const deleteElemlent_2 = list.delete(list.length() - 1); // '!'
const deleteElemlent_3 = list.delete(2); // ' '
const deleteElemlent_4 = list.delete(1); // 'y'
const deleteElemlent_5 = list.delete(1); // 'l'

console.log("Method delete:");
process.stdout.write("Delete by symbols '!' x2, ' ', 'y', 'l': ");
console.log(`Size list: ${list.length()}, result: ${list.result()}`);