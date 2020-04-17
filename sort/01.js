// 选择排序

// 每次外循环都会逐个比较来确定一个值

/*
* 从小到大
* 每一次内循环 确定一个最小值, 每次缩小内循环范围
*
* */


const arr = [2, 9, 10, 1, 3, 4, 8, 9, 5, 13, 11, 7];

function swap(arr, i , j) {
    var middle = arr[i];
    arr[i] = arr[j];
    arr[j] = middle;
}

function chooseSort(arr) {
    let index = '';
    for (let i = 0; i < arr.length - 1; i ++) {
        index = i;
        for (let j = i + 1; j < arr.length; j ++) {
            if (arr[index] > arr[j]) { // 从小到大
                index = j;
            }
        }
        if (index !== i) {
            swap(arr, i, index);
        }
    }
    return arr;
}
console.log(chooseSort(arr));
