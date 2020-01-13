let a = ['2', 5, 'hello', 33, true, -1, 0, 'world', false]
Array.prototype.mySum = function (a = []) {
    let sum = new Number()
    //let sum = parseInt(0)
    for (let i in a) {
        i = parseInt(a[i])
        if (!isNaN(i)) {
            sum += i
        }
    }
    return sum
}
console.log(a.mySum(a))


// [NaN ,1,21,32,NaN,41,5]1