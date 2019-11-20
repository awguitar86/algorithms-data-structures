// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('asdf');

module.exports = reverse;


/* 1st SOLUTION */
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

/* 2nd SOLUTION */
// function reverse(str) {
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }

/* 3rd SOLUTION: Best solution to show interviewer you understand how to reverse a string */
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }