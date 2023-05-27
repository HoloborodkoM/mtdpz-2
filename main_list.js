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
console.log("\nMethod append:");
process.stdout.write("Symbolically added 'My list' : ");
console.log(`Size list: ${list.length()}, result: ${list.result()}\n`);

// Checking insert for list
list.insert('!', 0);
list.insert('!', list.length());
list.insert('l', 4);
list.insert('o', 5);
list.insert('v', 6);
list.insert('e', 7);
list.insert(' ', 8);

console.log("Method insert:");
process.stdout.write("Inserted by symbols '!', 'love ', '!': ");
console.log(`Size list: ${list.length()}, result: ${list.result()}\n`);

// Checking delete for list
const deleteElemlent_1 = list.delete(0); // '!'
const deleteElemlent_2 = list.delete(list.length() - 1); // '!'
const deleteElemlent_3 = list.delete(2); // ' '
const deleteElemlent_4 = list.delete(1); // 'y'
const deleteElemlent_5 = list.delete(1); // 'l'

console.log("Method delete:");
process.stdout.write("Delete by symbols: ");
console.log(`Size list: ${list.length()}, result: ${list.result()}`);
console.log(`Delete this: '${deleteElemlent_1}', '${deleteElemlent_2}', '${deleteElemlent_3}', '${deleteElemlent_4}', '${deleteElemlent_5}'\n`);

list.insert('K', 0);
list.insert('K', 3);
list.insert('K', 4);
list.insert('K', 8);
list.insert('K', list.length());

process.stdout.write("Insert 'K' for deleteAll: ");
console.log(`Size list: ${list.length()}, result: ${list.result()}\n`);

// Checking deleteAll for list
list.deleteAll('K'); // deleteAll 'K'
list.deleteAll('+'); // nothing change

console.log("Method deleteAll:");
process.stdout.write("Delete all symbols 'K', nothing change with '+': ");
console.log(`Size list: ${list.length()}, result: ${list.result()}\n`);

// Checking reverse for list
list.reverse();

console.log("Method reverse:");
process.stdout.write("Reverse list: ");
console.log(`Size list: ${list.length()}, result: ${list.result()}\n`);

list.append('!');

process.stdout.write("Append '!': ");
console.log(`Size list: ${list.length()}, result: ${list.result()}\n`);

list.reverse();

process.stdout.write("Reverse list again with add '!' in start: ");
console.log(`Size list: ${list.length()}, result: ${list.result()}\n`);

// Checking get for list
const getElement_1 = list.get(2); // 'o'
const getElement_2 = list.get(0); // '!'
const getElement_3 = list.get(4); // 'e'
const getElement_4 = list.get(list.length() - 1); // 'e'

console.log("Method get:");
console.log("Index: 2, 0, 4, 9");
process.stdout.write("Get this: ");
console.log(`Elements: '${getElement_1}', '${getElement_2}', '${getElement_3}', '${getElement_4}'\n`);

// Checking clone for list
const cloneList = list.clone();

console.log("Method clone:");
process.stdout.write("Main list: ");
console.log(`Size list: ${list.length()}, result: ${list.result()}`);
process.stdout.write("Cloned list: ");
console.log(`Size list: ${cloneList.length()}, result: ${cloneList.result()}\n`);

list.append('!');
cloneList.append('P');

console.log("Check difference of these lists:");
process.stdout.write("Main list (append '!'): ");
console.log(`Size list: ${list.length()}, result: ${list.result()}`);
process.stdout.write("Cloned list (append 'P'): ");
console.log(`Size list: ${cloneList.length()}, result: ${cloneList.result()}\n`);

list.insert('l', 3);

process.stdout.write("Insert 'l' for find elements: ");
console.log(`Size list: ${list.length()}, result: ${list.result()}\n`);

// Checking findFirst and findLast for list
const findElement_1 = list.findFirst('l');
const findElement_2 = list.findLast('l');
const findElement_3 = list.findFirst('z');
const findElement_4 = list.findLast('p');

console.log("Methods findFirst findLast:");
console.log(`Size list: ${list.length()}, result: ${list.result()}`);
process.stdout.write("Find first: ");
console.log(`Try find 'l': '${findElement_1}', try find 'z': '${findElement_3}'`);
process.stdout.write("Find last: ");
console.log(`Try find 'l': '${findElement_2}', try find 'p': '${findElement_4}'\n`);

// Checking extend for list
const shortList = new List();

shortList.append('k');
shortList.append('y');
shortList.append('s');

list.extend(shortList);

console.log("Method extend:");
process.stdout.write("Main list: ");
console.log(`Size list: ${list.length()}, result: ${list.result()}`);
process.stdout.write("Short list: ");
console.log(`Size list: ${shortList.length()}, result: ${shortList.result()}\n`);

list.delete(3); // 'l'
shortList.append('a');

console.log("Delete 'l' for main list and append 'a' for second list\n");

console.log("Check difference of these lists:");
process.stdout.write("Main list: ");
console.log(`Size list: ${list.length()}, result: ${list.result()}`);
process.stdout.write("Short list: ");
console.log(`Size list: ${shortList.length()}, result: ${shortList.result()}\n`);

// Checking clear for list
list.clear();

console.log("Method clear:");
process.stdout.write("Clear list: ");
console.log(`Size list: ${list.length()}, result: ${list.result()}\n`);