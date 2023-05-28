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