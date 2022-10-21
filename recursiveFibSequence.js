function rfn(n) {
    if (n < 2) {
        return n
    }
    return rfn(n - 1) + rfn(n - 2)
}
console.log(rfn(0))
console.log(rfn(1))
console.log(rfn(6))

// O(n) -
// Not a good solution to solve recusive fibonacci 