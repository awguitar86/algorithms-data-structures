// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return parseInt(n.toString().split('').reduce((rev, num) => num += rev)) * Math.sign(n);
}

module.exports = reverseInt;



/* SPLIT-REVERSE-JOIN SOLUTION */
// function reverseInt(n) {
//   return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
// }


/* REDUCE SOLUTION */
// function reverseInt(n) {
//   return parseInt(n.toString().split('').reduce((rev, num) => num += rev)) * Math.sign(n);
// }