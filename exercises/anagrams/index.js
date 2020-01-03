// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;


/* 1st SOLUTION */
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);
                                                                                // If the length of the two strings do not match then they automatically are not anagrams.            
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {     // Object.keys() creates an array of all the keys of an object. This is seeing if the array of keys from stringA is not equal to array of keys of stringB.
//         return false;                                                        
//     }

//     for (let char in aCharMap) {                                             // If the length of the two strings match then they could be anagrams and we just need to check that each character is the same.
//         if(aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {              // the RegEx here gets rid of everything that is not a word.
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }


/* 2nd SOLUTION */
// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');    // This is gettign rid of all non-word characters, then split the string, sorting it from a to z and joining them into one string.
// }