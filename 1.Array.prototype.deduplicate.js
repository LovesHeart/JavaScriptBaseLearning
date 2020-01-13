// console.log('enter')//思路就是2重循环检测相同去重
let a = [1, 1, 2, 5]
Array.prototype.deduplicate = function (a = []) {
    j = new Number()//j在循坏外提前定义有助于循环内判断break
    // console.log(j)//new Number()默认等价于new Number(0)
    for (let i in a) {
        // debugger
        if(j>=a.length)break
        // console.log(typeof i)//i果然是个string
        //对于数组而言
        //i就是索引 比如此处为从0-3
        i = parseInt(i)//so//只有这样才能正确读取a[i]呢
        let t = a[i]
        // console.log("t " + t)
        for (j = i + 1; ;) {
            // console.log('j ' + j)
            // console.log('a[j] ' + a[j])
            if (t === a[j]) {
                // console.log('splice')
                a.splice(j, 1)
            }
            j++
            if (j >= a.length) break
        }
    }
    return a
}
console.log(a)
console.log(a.deduplicate(a))

//下面为复杂度为O(n)的法二
//主要利用了Object.keys()方法的自动去重  
// function fn(arr) {
//     let obj = {};
//     arr.forEach((item) => {
//         obj[item] = '';
//     })
//     return Object.keys(obj)
// }
// let b=[1,1,1,1]
// console.log(fn(b))