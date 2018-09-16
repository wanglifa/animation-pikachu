var result = `
.preview-wrapper{
    background: #FFE600;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid green;
}
.box-wrapper{
    height: 165px;
    width: 100%;
    position: relative;
}
.nose{
    width: 0;
    height: 0;
    border-radius: 50%;
    border: 12px solid black;
    border-color: black transparent transparent;
    border-width: 12px;
    position: absolute;
    left: 50%;
    margin-left: -12px;
    top: 28px;
}
.eye{
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
}
.eye::after{
    content: '';
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    border: 2px solid black;
    left: 6px;
    top: -1px;
}
.eye.left{
    right: 50%;
    margin-right: 90px;
}
.eye.right{
    left: 50%;
    margin-left: 90px;
}
.face{
    width: 68px;
    height: 68px;
    background: #F00;
    border: 2px solid black;
    position: absolute;
    border-radius: 50%;
    top: 85px;
}
.face.left{
    right: 50%;
    margin-right: 116px;
}
.face.right{
    left: 50%;
    margin-left: 116px;
}
.upperlip{
    width: 80px;
    height: 20px;
    border: 2px solid black;
    position: absolute;
    border-top: none;
    top: 52px;
    background: #FFE600;
    z-index: 1;
}
.upperlip.left{
    right: 50%;
    transform: rotate(-15deg);
    border-bottom-left-radius: 40px 20px;
    border-right: none;
}
.upperlip.right{
    left: 50%;
    transform: rotate(15deg);
    border-bottom-right-radius: 40px 20px;
    border-left: none;
}
.lowerlip-wrapper{
    width: 200px;
    height: 128px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    bottom: -20px;
    overflow: hidden;
}
.lowerlip{
    width: 100%;
    height: 2000px;
    background: #9B000A;
    border-radius: 100px/700px;
    position: absolute;
    bottom: 0;
    border: 2px solid black;
    overflow: hidden;
}
.lowerlip::after{
    content: '';
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 100px;
    left: 50%;
    margin-left: -50px;
    border-radius: 50%;
    background: #FF485F;
}
`
function writeCode(prefix,code,fn){
    let demoCode = document.querySelector('#code');
    var prefix = prefix || '';
    let style = document.querySelector('#styleTag');
    let n = 0;
    var id = setInterval(()=>{
        n+=1;
        demoCode.innerHTML = code.substring(0,n);
        style.innerHTML = code.substring(0,n);
        demoCode.scrollTop = demoCode.scrollHeight;
        if(n>=code.length){
            window.clearInterval(id);
            if(fn){
                fn.call()
            }
        }
    },50)
}
writeCode('',result)