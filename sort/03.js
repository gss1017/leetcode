// 快速排序
/*
* 找出一个基准值 根据这个基准值将数组分为两部分
*
* */

const arr = [2, 9, 10, 1, 3, 4, 8, 9, 5, 13, 11, 7];

// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//     const baseNum = arr[0];
//     const greater = [];
//     const low = [];
//     for(var i = 1; i < arr.length; i ++) {
//         if (arr[i] <= baseNum) {
//             low.push(arr[i]);
//         } else {
//             greater.push(arr[i]);
//         }
//     }
//     return [].concat(quickSort(low), baseNum, quickSort(greater));
//
// }

function swap(arr, i , j) {
    var middle = arr[i];
    arr[i] = arr[j];
    arr[j] = middle;
}

// 标准快速排序 -> 冒泡升级版

/*
* 根据对应的基准值来排列数组
*
* */

// function quickSort(arr, start, end) {
//     if (start >= end) { // 基线条件（终止条件）
//         return;
//     }
//     let left = start;
//     let right = end;
//     let baseIndex = left; // 基准值索引
//     while(left < right) {
//         while(arr[right] >= arr[baseIndex] && left < right) {
//             right --;
//         }
//
//         if (baseIndex < right) {
//             swap(arr, baseIndex, right);
//             baseIndex = right;
//             left ++;
//         }
//
//         while(arr[left] <= arr[baseIndex] && left < right) {
//             left ++;
//         }
//
//         if (baseIndex > left) {
//             swap(arr, baseIndex, left);
//             baseIndex = left;
//             right --;
//         }
//     }
//
//     quickSort(arr, start, baseIndex - 1);
//     quickSort(arr, baseIndex + 1, end);
//
//     return arr;
// }
//
//
//
// console.log(quickSort(arr, 0, arr.length -1));

// 快速排序去除递归
// 模拟栈

function quickSort(arr) {
    const stack = [[0, arr.length - 1]];
    while (stack.length) { // 调用栈为空，循环终止
        const [start, end] = stack.pop();

        if (start >= end) { // 基线条件（终止条件）
            return;
        }
        let left = start;
        let right = end;
        let baseIndex = left; // 基准值索引
        // 递归条件 (持续条件)
        while(left < right) {
            while(arr[right] >= arr[baseIndex] && left < right) {
                right --;
            }

            if (baseIndex < right) {
                swap(arr, baseIndex, right);
                baseIndex = right;
                left ++;
            }

            while(arr[left] <= arr[baseIndex] && left < right) {
                left ++;
            }

            if (baseIndex > left) {
                swap(arr, baseIndex, left);
                baseIndex = left;
                right --;
            }
        }

        if (start < (baseIndex - 1)) stack.push([start, baseIndex - 1]);
        if (end > (baseIndex + 1)) stack.push([baseIndex + 1, end]);
    }

    return arr;
}



console.log(quickSort(arr));
