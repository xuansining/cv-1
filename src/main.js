console.log('hi')

let demo = document.querySelector("#demo")
let style = document.querySelector("#style")
let n = 0
let str = `
/*大家好，我是叫禤思宁，
我要演示我的前端功底，画一个太极图
接下来要准备一个div
*/
#div1{
    width:200px;
    height:200px;
    border: 1px solid red;
}
/*
 接下来我要把div变成一个太极图
 把div变成圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 5px rgba(0,0,0,0.5);
    border:none;
}


/*
  八卦一黑一白
*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
 加两个神秘的小球
*/
#div1::before{
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
    top: 0;
    
    left: 50%;
    transform: translateX(-50%);
}

#div1::after{
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
}
`

let str2 = ''


let step = () => {


    if (str[n] === '\n') {
        str2 += '<br>'

    } else if (str[n] === ' ') {
        str2 += '&nbsp;'
    } else {
        str2 += str[n]
    }

    demo.innerHTML = str2
    style.innerHTML = str.substring(0, n)
    window.scrollTo(0, 9999)
    demo.scrollTo(0, 99999)
    setTimeout(() => {
        if (n < str.length - 1) {
            n += 1
            step()
        }

    }, 500)

}
step()