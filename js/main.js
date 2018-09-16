!function(){
 var result = `/*
 * 首先，需要准备皮卡丘的皮
 */
.preview{
  background: #FEE433;
}
/*
 * 接下来，画皮卡丘的鼻子
 */
.nose{
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 12px;
  border-color: black transparent transparent;
  border-radius: 11px;
  position: absolute;
  left: 50%;
  top: 28px;
  margin-left: -12px;
}
/*
 * 接下来，画皮卡丘的眼睛
 */
.eye{
  width: 49px;
  height: 49px;
  background: #2E2E2E;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000000;
}
/*
 * 眼睛里面的珠子
 */
.eye::before{
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  position: absolute;
  border-radius: 50%;
  left: 6px;
  top:-1px;
  border: 2px solid #000;
}
/*
 * 左眼在左边（废话）
 */
.eye.left{
  right: 50%;
  margin-right: 90px;
}
/*
 * 右眼在右边（废话）
 */
.eye.right{
  left: 50%;
  margin-left: 90px;
}
/*
 * 然后，画皮卡丘的脸
 */
.face{
  width: 68px;
  height: 68px;
  background: #FC0D1C;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 85px;
}
/*
 * 将脸放到正确的位置
 */
.face.left{
  right: 50%;
  margin-right: 116px;
}
.face.right{
  left: 50%;
  margin-left: 116px;
}
/*
 * 上嘴唇
 */
.upperLip{
  height: 25px;
  width: 80px;
  border: 2px solid black;
  position: absolute;
  top: 50px;
  background: #FEE433;
}
.upperLip.left{
  right: 50%;
  border-bottom-left-radius: 40px 25px;
  border-top: none;
  border-right: none;
  transform: rotate(-20deg);
}
.upperLip.right{
  left: 50%;
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg);
}
/*
 * 下嘴唇
 */
.lowerLip-wrapper{
  bottom: 0;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  height: 110px;
  overflow: hidden;
  width: 300px;
}
.lowerLip{
  height: 3500px;
  width: 300px;
  background: #990513;
  border-radius: 200px/2000px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}
/*
 * 小舌头
 */
.lowerLip::after{
  content: '';
  position: absolute;
  bottom: -20px;
  width: 100px;
  height: 100px;
  background: #FC4A62;
  left: 50%;
  margin-left: -50px;
  border-radius: 50px;
}
/*
 * 好了，这只皮卡丘送给你
 */
`
let time = 50;
function writeCode(prefix,code,fn){
    let demoCode = document.querySelector('#code');
    var prefix = prefix || '';
    let style = document.querySelector('#styleTag');
    let n = 0;
    setTimeout(function run(){
        n+=1;
        demoCode.innerHTML = code.substring(0,n);
        style.innerHTML = code.substring(0,n);
        demoCode.scrollTop = demoCode.scrollHeight;
        if(n<code.length){
            setTimeout(run, time)
        }else{
            if(fn){
                fn.call()
            }
        }
    },time)
}
writeCode('',result)

$('.actions').on('click','button',function(e){
    let $currentButton = $(e.currentTarget);
    $currentButton.addClass('active').siblings().removeClass('active');
    let speed = $currentButton.attr('data-speed');
    console.log(speed)
    switch(speed){
        case 'slow':
            time = 80
            break;
        case 'normal':
            time = 50
            break;
        case 'fast':
            time = 10
            break;        
    }
    console.log(time)
})
}.call()