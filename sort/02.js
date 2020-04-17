// 冒泡排序

// 通过外循环来减少内循环比较次数
// 通过内循环俩俩比较 符合条件并交换

const arr = [2, 9, 10, 1, 3, 4, 8, 9, 5, 13, 11, 7];

function swap(arr, i , j) {
    var middle = arr[i];
    arr[i] = arr[j];
    arr[j] = middle;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {
        for (let j = 0; j < arr.length - i - 1; j ++) {
            if (arr[j] < arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}


console.log(bubbleSort(arr));
