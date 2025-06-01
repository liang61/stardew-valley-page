//获取背景元素
var back = document.getElementById('back');
    //监听鼠标移动
    window.onmousemove = function(event){
    var x = -event.clientX/25;
    var y = -event.clientY/20;
//设置背景位置
     back.style.backgroundPositionX = (x + 5) + "px";
     back.style.backgroundPositionY = y + "px";
}



// 开始体验按钮点击事件
document.getElementById('startBtn').addEventListener('click', function() {
    window.location.href = 'stardew_valley.html';
});

// 加载动画控制
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loadingContainer').style.display = 'none';
    }, 1000); // 1秒后隐藏加载动画
}


