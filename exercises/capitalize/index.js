// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++) {
        if(str[i -1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

module.exports = capitalize;



/* 1st SOLUTION */
// function capitalize(str) {
//     const words = [];                                            // Make and empty array called 'words'
//     for (let word of str.split(' ')) {                           // Split the input string by spaces to get an array and For each word in the array
//         words.push(word[0].toUpperCase() + word.slice(1));       //      Uppercase the first letter of the word. Join first letter with the rest of the string. Push result into 'words' array
//     }
//     return words.join(' ');                                      // Join 'words into a string and return it.
// }


/* 2nd SOLUTION */
// function capitalize(str) {
//     let result = str[0].toUpperCase();               // Create 'result' which is the first character of the input string capitalized.

//     for(let i = 1; i < str.length; i++) {            // For each character in the string
//         if(str[i -1] === ' ') {                      // IF the character to the left is a space
//             result += str[i].toUpperCase();          // Capitalize it and add it to teh 'result' string
//         } else {
//             result += str[i];                        // Else add it to the 'result' string
//         }
//     }
//     return result;
// }