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

// Checking reverse for linked list
linkedList.reverse();

console.log("Method reverse:");
process.stdout.write("Reverse linked list: ");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}\n`);

linkedList.append('!');

process.stdout.write("Append '!': ");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}\n`);

linkedList.reverse();

process.stdout.write("Reverse linked list again with add '!' in start: ");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}\n`);

// Checking get for linked list
const getElement_1 = linkedList.get(2); // 'o'
const getElement_2 = linkedList.get(0); // '!'
const getElement_3 = linkedList.get(4); // 'e'
const getElement_4 = linkedList.get(linkedList.length() - 1); // 't'

console.log("Method get:");
console.log("Index: 2, 0, 4, 9");
process.stdout.write("Get this: ");
console.log(`Elements: '${getElement_1}', '${getElement_2}', '${getElement_3}', '${getElement_4}'\n`);

// Checking clone for linked list
const cloneLinkedList = linkedList.clone();

console.log("Method clone:");
process.stdout.write("Main linked list: ");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}`);
process.stdout.write("Cloned linked list: ");
console.log(`Size list: ${cloneLinkedList.length()}, result: ${cloneLinkedList.result()}\n`);

linkedList.append('!');
cloneLinkedList.append('P');

console.log("Check difference of these linked lists:");
process.stdout.write("Main linked list (append '!'): ");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}`);
process.stdout.write("Cloned linked list (append 'P'): ");
console.log(`Size list: ${cloneLinkedList.length()}, result: ${cloneLinkedList.result()}\n`);

linkedList.insert('l', 3);

process.stdout.write("Insert 'l' for find elements: ");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}\n`);

// Checking findFirst and findLast for linked list
const findElement_1 = linkedList.findFirst('l');
const findElement_2 = linkedList.findLast('l');
const findElement_3 = linkedList.findFirst('z');
const findElement_4 = linkedList.findLast('p');

console.log("Methods findFirst findLast:");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}`);
process.stdout.write("Find first: ");
console.log(`Try find 'l': '${findElement_1}', try find 'z': '${findElement_3}'`);
process.stdout.write("Find last: ");
console.log(`Try find 'l': '${findElement_2}', try find 'p': '${findElement_4}'\n`);

// Checking extend for linked list
const shortLinkedList = new LinkedList();

shortLinkedList.append('k');
shortLinkedList.append('y');
shortLinkedList.append('s');

linkedList.extend(shortLinkedList);

console.log("Method extend:");
process.stdout.write("Main linked list: ");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}`);
process.stdout.write("Short linked list: ");
console.log(`Size list: ${shortLinkedList.length()}, result: ${shortLinkedList.result()}\n`);

linkedList.delete(3); // 'l'
shortLinkedList.append('a');

console.log("Delete 'l' for main list and append 'a' for second list\n");

console.log("Check difference of these linked lists:");
process.stdout.write("Main linked list: ");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}`);
process.stdout.write("Short linked list: ");
console.log(`Size list: ${shortLinkedList.length()}, result: ${shortLinkedList.result()}\n`);

// Checking clear for linked list
linkedList.clear();

console.log("Method clear:");
process.stdout.write("Clear linked list: ");
console.log(`Size list: ${linkedList.length()}, result: ${linkedList.result()}\n`);