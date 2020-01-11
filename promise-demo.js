const url = 'https://img1.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png'

function getImage(src){
    return new Promise(
        (resolve, reject)=>{
            const img=document.getElementById(img)
            img.onload=()=>{
                resolve(img)//resolve(img)
            }
            img.onerror=()=>{
                const err=new Error(`图片加载失败 ${src}`)//忘记了new Error
                reject(err)
            }
            img.src=src
        }
    )
}