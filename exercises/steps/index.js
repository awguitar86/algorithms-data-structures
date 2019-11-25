// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    if(n === row) {
        return;
    }

    if(n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    const add = stair.length <= row ? '#' : ' ';

    steps(n, row, stair + add);
}

module.exports = steps;


/* 1st SOLUTION */
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';

//         for (let column = 0; column < n; column++) {
//             if(column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }


/* 2nd SOLUTION: Recursive Solution*/
// function steps(n, row = 0, stair = '') {
//     if(n === row) {
//         return;
//     }

//     if(n === stair.length) {
//         console.log(stair);
//         return steps(n, row + 1);
//     }

//     const add = stair.length <= row ? '#' : ' ';

//     steps(n, row, stair + add);
// }


/** RECURSION TIPS **/

// Figure out the bare minimum pieces of inormation to represent your problem

// Give reasonable defaults to the bare minimum pieces of info

// Check the base case. Is there any work left to do? If not, return.

// Do some work. Call your function again, making sure the arguments have changed in some fashion.