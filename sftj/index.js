//
// const arr = [1, 2, 3, 4];
//
// function sum(arr) {
//     if (arr.length === 1) {
//         return arr[0];
//     }
//     const result = arr.pop();
//     return result + sum(arr)
// }
//
// console.log(sum(arr));


// const arr = [1, 2, 3, 4];
//
// function eleTotal(arr, num) {
//     if (arr.length > 0) {
//         arr.pop();
//         num ++;
//     } else {
//         return num;
//     }
//     return eleTotal(arr, num)
// }
//
// console.log(eleTotal(arr, 0));


// const arr = [1, 2, 3, 4];
//
// function matchMaxNum(arr, max) {
//     if (arr.length === 0) {
//         return max;
//     }
//     if (typeof max !== 'number') {
//         max = arr.pop();
//     }
//     const result = arr.pop();
//     max = max >= result ? max : result;
//     return matchMaxNum(arr, max)
// }
//
// console.log(matchMaxNum(arr));

// 二分法

// const arr = [2, 9, 10, 1, 3, 4, 8, 9, 5, 13, 11, 7];

// function binarySearch(arr, num, low, greater) {
//     low = low || 0;
//     greater = greater || arr.length - 1;
//     const middle = Math.floor((low + greater) / 2);
//     if (low > greater) {
//         return -1;
//     }
//     if (num === arr[middle]) {
//         return middle;
//     }
//
//     if (num > arr[middle]) {
//         low = middle + 1;
//     } else {
//         greater = middle - 1;
//     }
//
//     return binarySearch(arr, num, low, greater);
//
// }
//
// console.log(binarySearch(arr, 16));

// const arr = [2, 9, 10, 1, 3, 4, 8, 9, 5, 13, 11, 7];
// function binarySearch(arr, num) {
//     let low = 0;
//     let greater = arr.length - 1;
//     let middle = Math.floor((low + greater) / 2);
//     while (low < greater) {
//         if (num === arr[middle]) {
//             return middle;
//         }
//
//         if (num > arr[middle]) {
//             low = middle + 1;
//         } else {
//             greater = middle - 1;
//         }
//
//         middle = Math.floor((low + greater) / 2);
//     }
//     return -1;
// }
//
// console.log(binarySearch(arr, 4));

