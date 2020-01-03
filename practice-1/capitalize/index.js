// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = []
  for (let word of str.split(' ')) {                      // loop through string that's split by spaces
    words.push(word[0].toUpperCase() + word.slice(1));    // take the 0 index of the word which is the first letter and uppercase it, then push it along with the rest of the word into the words array.
  }
  return words.join(' ');                                 // return the words array joined by the spaces into a string
}

module.exports = capitalize;

/* SPLIT STRING SOLUTION */
// function capitalize(str) {
//   const words = []
//   for (let word of str.split(' ')) {                      // loop through string that's split by spaces
//     words.push(word[0].toUpperCase() + word.slice(1));    // take the 0 index of the word which is the first letter and uppercase it, then push it along with the rest of the word into the words array.
//   }
//   return words.join(' ');                                 // return the words array joined by the spaces into a string
// }



/* CHECK SPACE TO THE LEFT SOLUTION */
// function capitalize(str) {
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if(str[i - 1] === ' '){
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i]
//     }
//   }
//   return result;
// }