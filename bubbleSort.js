function Bs(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }

        }
    } while (swapped);
}
const arr = [2, 3, 1, 5, 6, -5]
Bs(arr)
console.log(arr)