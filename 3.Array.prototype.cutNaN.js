let a = [NaN ,1,21,32,NaN,41,5]
Array.prototype.cutNaN=function(a=[]){
    for(let i in a){
        // console.log(a[i]) // a[i]确实能够正确log出每一个
        if(isNaN(a[i]))a.splice(i,1)
    }   
    return a
}
console.log(a.cutNaN(a))