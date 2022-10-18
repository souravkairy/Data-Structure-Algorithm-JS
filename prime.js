function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(0))
console.log(isPrime(5))
console.log(isPrime(4))

// big o = o(n)