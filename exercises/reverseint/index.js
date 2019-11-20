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
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;


// function reverseInt(n) {
//     let reversed = n.toString().split('').reverse()
//     if(Math.sign(n) === -1) {
//         reversed.pop();
//         return parseInt(reversed.join('')) * Math.sign(n);
//     }else {
//         return parseInt(reversed.join(''));
//     }
// }