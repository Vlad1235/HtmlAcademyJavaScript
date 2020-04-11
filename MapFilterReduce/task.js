var list = [1, 2, 3, 4, 5].map(function (n) {
    return n * 2;
})
log(list) //2 4 6 8 10

var oddNumbers = [1, 2, 4, 5, 6, 7, 8, 9, 10].filter(function (n) {
    return n % 2 !== 0
})
log(oddNumbers) // 1 5 7 9 


var sum = [1, 2, 4, 5, 6, 7, 8, 9, 10].reduce(function (accumulator, n) {
    return accumulator + n
})
log(sum)

