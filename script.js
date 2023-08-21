// What does the following code return?
new Set([1, 1, 2, 2, 3, 4]);
// {1, 2, 3, 4}

// What does the following code return?
// [...new Set("referee")].join("")
// "ref"

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// 0: {Array(3) => true}
// 1: {Array(3) => false}

// **hasDuplicate**
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// **vowelCount**
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str) {
  const newMap = new Map();
  const vowels = "aeiou";
  for (let char of str) {
    let lowerCase = char.toLowerCase();
    if (vowels.includes(lowerCase)) {
      if (newMap.has(lowerCase)) {
        newMap.set(lowerCase, newMap.get(lowerCase) + 1);
      } else {
        newMap.set(lowerCase, 1);
      }
    }
  }
  return newMap;
}
