console.log('enter')//思路就是2重循环检测相同去重呗
let a = [1, 1, 2, 5]
for (let i in a) {
    // debugger
    console.log(typeof i)//i果然是个string
    i=parseInt(i)//so
    let t = a[i]
    console.log("t "+t)
    j=new Number()
    for (j = i + 1; ;) {
        console.log('j '+j)
        console.log('a[j] '+a[j])
        if (t === a[j]) {
            console.log('splice')
            a.splice(j, 1)
        }
        j++
        if (j >= a.length) break
    }
}
console.log(a)

function fn(arr) {
    let obj = {};
    arr.forEach((item) => {
        obj[item] = '';
    })

    return Object.keys(obj)
}

let b=[1,1,1,1]
console.log(fn(b))