const perf = require('execution-time')();


function doublerAppend(nums) {

    let new_nums = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums) {

    let new_nums = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend_large = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert_large = perf.stop();

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsAppend_medium = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(mediumArray);
let resultsInsert_medium = perf.stop();

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppend_small = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(smallArray);
let resultsInsert_small = perf.stop();

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend_tiny = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert_tiny = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

console.log('Results for the largeArray');
console.log("insert", resultsInsert_large.preciseWords);
console.log("append", resultsAppend_large.preciseWords);

console.log('Results for the mediumArray');
console.log("insert", resultsInsert_medium.preciseWords);
console.log("append", resultsAppend_medium.preciseWords);

console.log('Results for the smallArray');
console.log("insert", resultsInsert_small.preciseWords);
console.log("append", resultsAppend_small.preciseWords);

console.log('Results for the tinyArray');
console.log("insert", resultsInsert_tiny.preciseWords);
console.log("append", resultsAppend_tiny.preciseWords);