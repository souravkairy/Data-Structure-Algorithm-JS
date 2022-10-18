function factiorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i
    };
    console.log(result);
}
factiorial(5)

//big - o =  o(n)