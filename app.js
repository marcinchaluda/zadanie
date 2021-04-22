const getSortedNames = require('./getSortedNames');
const getUniqueNames = require('./getUniqueNames');
const getFirstLetters = require('./getFirstLetters');
const isPalindrome = require('./isPalindrome');

const names = ['Zenon', 'Anna', 'Anna', 'Tomasz', 'Robert', 'Kasia', 'Janek', 'Kasia'];
const text = "Żartem dano nadmetraż";

// display sorted list in alphabetic order
console.log(getSortedNames(names));
// display only unique names from table
console.log(getUniqueNames(names));
// display an array with first letters of names
console.log(getFirstLetters(names));
// check if a text is a palindrome
console.log(isPalindrome(text));
