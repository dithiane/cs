/*
1) Sum Zero
Write a function that takes in an array of numbers. 
The function should return True if any two numberss in list sum to 0, and false otherwise.

*/

const addToZero = (arr) => {
    let res = false
    arr.some(el => {
        if (arr.includes(-el)) {
            res = true
            return true
        }
    })
    return res
}

// I think some() is O(n) in the worst case 
// Space complexity: O(1) 
// This method executes a provided function once for each array element

console.log(addToZero([]));
// // -> False

console.log(addToZero([1]));
// // -> False

console.log(addToZero([1, 2, 3]));
// // -> False

console.log(addToZero([1, 2, 3, -2]))
// // -> True


/* 2) Unique Characters
Write a function that takes in a single word, as a string.
It should return True if that word contains only unique characters.Return False otherwise. */


const hasUniqueChars = (word) => {
    const arr = word.split('')
    let res = true

    arr.some((el, index) => {
        if (arr.includes(el) && (index != arr.indexOf(el))) {
            res = false
            return true
        }
    })
    return res
}

// Time complexity: Some() is O(n) in the worst case
// Space complexity: O(1) 


console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False


/* 3) Pangram Sentence
A pangram is a sentence that contains all the letters of the English alphabet at least once,
like “The quick brown fox jumps over the lazy dog.”
Write a function to check a sentence to see if it is a pangram or not. */

let alphabet = new Set('abcdefghijklmnopqrstuvwxyz')

const isPangram = (sentence) => {
    let sSet = new Set(sentence.match(/[a-z]/gi).join('').toLowerCase())
    if (sSet.size >= alphabet.size && [...sSet].every(s => alphabet.has(s)))
        return true

    return false
}

// Time complexity: Running a regular expression against a string is indeed O(n), 
// every() - 0(n), so 2*O(n) => O(n)
// Space complexity: O(1) 


console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

/*
4) Longest Word
Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// -> 5
*/
const findLongestWord = (arr) => {
    let longest = 0
    arr.forEach(el => {
        if (el.length > longest) {
            longest = el.length
        }
    })
    return longest
}

// Time complexity: 0(n)
// Just execute a function for each element in the array size n
// Space complexity: O(1) 


console.log(findLongestWord(["hi", "hello"]));