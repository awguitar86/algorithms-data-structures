// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = '';
  for(let char of str){
    reversed = char + reversed;
  }
  return reversed;
}

module.exports = reverse;

/* SOULTION 1 */
// function reverse(str) {
//   return str.split('').reverse().join('');
// }


/* SOULTION 2 */
// function reverse(str) {
//   let reversed = '';
//   for(let char of str){
//     reversed = char + reversed;
//   }
//   return reversed;
// }


/* SOLUTION 3 */
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char = char += rev);
// }