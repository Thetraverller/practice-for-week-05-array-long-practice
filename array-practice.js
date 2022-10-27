const findMinimum = arr => {

  // Your code here
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];

    if (num < min) {
      min = num;
    }
  }

  return min;
};

// Time complexity: O(n)
// Space complexity: O(1)

const runningSum = arr => {

// Your code here

 let sum = 0;
 let sums = [];
 for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  sums.push(sum);
 }
 return sums;
};

const evenNumOfChars = arr => {

  // Your code here
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];

    if (el.length % 2 === 0) {
      count++;
    }
  }

  return count;
};
// Time complexity: O(n)
// Space complexity: O(1)

const smallerThanCurr = arr => {

  // Your code here
  let smallerThan = [];

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      let check = arr[j];

      if (i !== j && check < el) {
        count++;
      }
    }

    smallerThan.push(count);
  }

  return smallerThan;
};
// Time complexity: O(n ^ 2)
// Space complexity: O(n)

const twoSum = (arr, target) => {

  for (let i = 0; i < arr.length; i++) {
    let el1 = arr[i];

    for (let j = 0; j < arr.length; j++) {
      let el2 = arr[j];
      let sum = el1 + el2;

      if (i !== j && sum === target) {
        return true;
      }
    }

  }

  return false;
};
// Time complexity: O(n ^ 2)
// Space complexity: O(1)

const secondLargest = arr => {

  // Your code here
  if (arr.length < 2) {return undefined};

  let largest = Math.max(arr[0], arr[1]);
  let second = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest
      largest = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
  };
// Time complexity: O(n)
// Space complexity: O(n)

const shuffle = (arr) => {

  // Your code here
  if(arr.length === 0) {return []};
  if(arr.length === 1) {return [arr[0]]};
  let randomized = [];

  let index = Math.floor(Math.random() * arr.length);
  randomized.push(arr[index]);

  let sliced = [...arr.slice(0, index), ...arr.slice(index+1)];

  randomized = [...randomized, ...(shuffle(sliced))]

  return randomized;
};
// Time complexity: O(n^2)
// Space complexity: O(n^2)

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
