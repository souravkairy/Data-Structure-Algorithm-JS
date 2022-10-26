function binarySearch(arr, target) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === target) {
    //         return i
    //     }
    // }
    // return -1

    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === arr[middleIndex]) {
            return middleIndex
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4))

//Binary search is applied for only sorted array. If the array is not sorted the we have to use linear search or have to sort before making binary search
//Big(O) = O(logn)