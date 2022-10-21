function recusiveFactorial(n) {
    if (n === 0) {
        return 1
    }
    return n * recusiveFactorial(n - 1)
}
console.log(recusiveFactorial(0))
console.log(recusiveFactorial(1))
console.log(recusiveFactorial(5))

// n! = n* (n-1)!
// Big-O = O(n)