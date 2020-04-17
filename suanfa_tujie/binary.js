const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getIndex(target) {
    let low = arr[0];
    let high = arr[arr.length - 1];
    if (target > high || target < low) {
        return 'current num not found';
    }
    let mid = Math.floor((low + high) / 2);
    while (target !== mid) {
        mid = Math.floor((low + high) / 2);
        if (target > mid) {
            low = mid + 1;
        } else {
            high = mid -1;
        }
        console.log(1);
    }
    return mid;
}

console.log(getIndex(11));
