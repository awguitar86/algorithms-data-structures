// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];																	// create empty array to chunk array
  let index = 0;																			// create index variable to keep track of chunks in chunked array

  while( index < array.length ) {											// while index is less than the length of the array
    chunked.push(array.slice(index, index + size));		// push a slice of the array from the index to the index plus the size into chunked
    index += size;																		// add the size to the index
  }

  return chunked;																			// return the chunked array
}

module.exports = chunk;

/* FOR LOOP SOLUTION */
// function chunk(array, size) {
//   const chunked = [];
//   for (let el of array) {
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([el]);
//     }
//     else {
//       last.push(el);
//     }
//   }
//   return chunked;
// }


/* WHILE LOOP SOLUTION */
// function chunk(array, size) {
//   const chunked = []
//   let index = 0;

//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }

//   return chunked;
// }