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

function steps(n, row = 0, stair = '') {          // add row and stair parameters
  if(n === row) {                                 // if n equlas row then the steps are made and the recursion is done
    return;
  }

  if (n === stair.length) {                       // if n equals the stair length then it's time to move onto the next stair or step
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';    // if the stair length is less than or equal to the row then we need to add a #. If it's greater than row we need to add a space

  steps(n, row, stair + add);                     // call the function again and add the # or a space to the stiar string.
}

module.exports = steps;


/* ITERATIVE SOLUTION */
// function steps(n) {
//   for (let row = 0; row < n; row ++) {    // create a row variable and loop through n times
//     let stair = '';

//     for (let col = 0; col < n; col++) {   // create a column variable and loop through n times
//       if(col <= row) {                    // if column is less than or equal to row then add a # to stair
//         stair += '#';
//       } else {                            // if column is greater than row thenadd a space to stair
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }



/* RECURSIVE SOLUTIOIN */
// function steps(n, row = 0, stair = '') {          // add row and stair parameters
//   if(n === row) {                                 // if n equlas row then the steps are made and the recursion is done
//     return;
//   }

//   if (n === stair.length) {                       // if n equals the stair length then it's time to move onto the next stair or step
//     console.log(stair);
//     return steps(n, row + 1);
//   }

//   const add = stair.length <= row ? '#' : ' ';    // if the stair length is less than or equal to the row then we need to add a #. If it's greater than row we need to add a space

//   steps(n, row, stair + add);                     // call the function again and add the # or a space to the stiar string.
// }