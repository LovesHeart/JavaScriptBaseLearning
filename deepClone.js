//错误写法 deepClone(obj){
//     let o
//     if (typeof (obj) !== "object") return obj
//     else if (instanceof (obj) === Array) {

//     }
// }

/**
 * 1. 写法是 function deepClone ( obj={} ) {}
 * 2. 先判断obj如果不是'object'或者==null(含===undefined)直返obj
 * 3. let res
 * 4. 如果obj instanceof Array 则res=[]   不然res={}
 * 5. 用for(let key in obj)对obj里面的所有键值对进行遍历
 * 6. 一定要加判定 if(obj.hasOwnProperty(key)) 再res[key]=deepClone(obj[key])
 * 7. return res
 */
function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        //obj是null或者undefined 或者不是对象或数组，直接返回
        return obj
    }
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        //保证 key 不是原型的属性
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    } //听完了再一齐敲代码


    return result
}