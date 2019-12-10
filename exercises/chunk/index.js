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
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

module.exports = chunk;

/* 1st SOLUTION */
// function chunk(array, size) {
//     const chunked = [];                                  // Create empty array to hold chunks called 'chunked'
    
//     for (let el of array) {                              // For each element in the "unchunked" array
//         const last = chunked[chunked.length - 1];        //      Retrieve the last element in 'chunked'
//         if (!last || last.length === size) {             //      If last element does not exist, or if its length is equal to chunk size
//             chunked.push([el]);                          //              Push a new chunk into 'chunked' with the current element
//         } else {                                         //      Else add the current element into the chunk
//             last.push(el);
//         }
//     }

//     return chunked;
// }

/* 2nd SOLUTION */
// function chunk(array, size) {
//     const chunked = [];                                  // Create empty "chunked" array
//     let index = 0;                                       // Create "index" start at 0

//     while(index < array.length) {                        // While "index" is less than array.length
//         chunked.push(array.slice(index, index + size));  //      Push a slice of length "size" from "array" into "chunked"
//         index += size;                                   //      Add "size" to "index"
//     }

//     return chunked;
// }