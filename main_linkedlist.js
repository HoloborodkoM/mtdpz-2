'use strict';

const LinkedList = require('./source/LinkedList');

const linkedList = new LinkedList();

// Checking append for linked list
linkedList.append('M');
linkedList.append('y');
linkedList.append(' ');
linkedList.append('l');
linkedList.append('i');
linkedList.append('s');
linkedList.append('t');

// Checking length for linked list (result just easier to see)
console.log("\nMethod append:");
process.stdout.write("Symbolically added 'My list' : ");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}\n`);

// Checking insert for linked list
linkedList.insert('!', 0);
linkedList.insert('!', linkedList.length());
linkedList.insert('l', 4);
linkedList.insert('o', 5);
linkedList.insert('v', 6);
linkedList.insert('e', 7);
linkedList.insert(' ', 8);

console.log("Method insert:");
process.stdout.write("Inserted by symbols '!', 'love ', '!': ");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}\n`);

// Checking delete for linked list
const deleteElemlent_1 = linkedList.delete(0); // '!'
const deleteElemlent_2 = linkedList.delete(linkedList.length() - 1); // '!'
const deleteElemlent_3 = linkedList.delete(2); // ' '
const deleteElemlent_4 = linkedList.delete(1); // 'y'
const deleteElemlent_5 = linkedList.delete(1); // 'l'

console.log("Method delete:");
process.stdout.write("Delete by symbols: ");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}`);
console.log(`Delete this: '${deleteElemlent_1}', '${deleteElemlent_2}', '${deleteElemlent_3}', '${deleteElemlent_4}', '${deleteElemlent_5}'\n`);

linkedList.insert('K', 0);
linkedList.insert('K', 3);
linkedList.insert('K', 4);
linkedList.insert('K', 8);
linkedList.insert('K', linkedList.length());

process.stdout.write("Insert 'K' for deleteAll: ");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}\n`);

// Checking deleteAll for linked list
linkedList.deleteAll('K'); // deleteAll 'K'
linkedList.deleteAll('+'); // nothing change

console.log("Method deleteAll:");
process.stdout.write("Delete all symbols 'K', nothing change with '+': ");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}\n`);