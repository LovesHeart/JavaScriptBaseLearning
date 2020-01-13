let a=[21,32,41,5,67]
Array.prototype.myQuickSort =  (arr) => {//传入一个数组
    if ( arr.length <= 1){//如果数组长度小于等于1无需判断直接返回即可
        return arr
    }
    let pivotIndex = Math.floor( arr.length  /  2)//取基准点
    // console.log(pivotIndex+" %%%")
    let pivot = arr.splice(pivotIndex,1)[0]//取基准点的值，splice(index,1)函数可以返回数组中被删粗的那个数
    // console.log(pivot+ "))")
    let left = []//存放比基准点小的数组
    let right = []//存放比基准点大的数组
    for (var i = 0 ; i <  arr.length ; i++ ) { //遍历数组，进行判断分配
        if ( arr[i] < pivot) {
            left.push( arr[i] )//比基准点小的放在左边数组
        }else{
            right.push( arr[i] )//比基准点大的放在右边数组
        }
    }
    //递归执行以上操作，对左右两个数组进行操作，直到数组长<=1
    // console.log(left+" " +right)
    return arr.myQuickSort(left).concat([pivot],arr.myQuickSort(right))//使用递归，然后拼接，最好写到纸上一步一步，就会一目了然
    //[pivot] 是pivot构成的一个一元数组
}
// console.log(a.myQuickSort(a))
// a=[21,32,41,5,67]
Array.prototype.findMaxAndMin=(arr)=>{
    arr = arr.myQuickSort(arr)//将arr用log(n)的复杂度变为有序数组
    let min=arr[0]
    let max=arr[arr.length-1]
    return [min,max]
}
console.log(a.findMaxAndMin(a))