// 轮播图
var currentIndex = 0;
const totalSlides = 6;
const indcators = document.querySelectorAll('.carousel_indcators button');

function update(){
	document.querySelector('.carousel_inner').style.left = `-${currentIndex * 100}%`;
	//document.getElementById('carouselInner').style.left = `-${currentIndex * 100}%`;
	//小圆点绑定图片
	indicators.forEach((indicator, index) => {
		indicator.classList.toggle('now', index === currentIndex);
	});
}
//往前为负，再加total
function prevSlide(){
	currentIndex = (currentIndex - 1 +totalSlides) % totalSlides;
	update() ;
}
function nextSlide(){
	currentIndex = (currentIndex + 1) % totalSlides;
	update() ;
}
// 切换到指定幻灯片
function goToSlide(index){
	 currentIndex  = index;
	 update();
}

//1000是1秒
setInterval(nextSlide,3000);

// 主题切换的核心函数
function setTheme(themeName) {
    // 将主题名称保存到localStorage中
    localStorage.setItem('theme', themeName);
    // 将主题类名应用到html根元素
    document.documentElement.className = themeName;
}

// 切换主题的函数
function toggleTheme() {
    // 检查当前主题，如果当前是暗色主题，则切换到亮色主题
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } 
    else {
        setTheme('theme-dark');
    }
}
// 加载上次的主题颜色，页面加载时初始化主题
(function() {
    // 根据localStorage中保存的主题设置初始状态
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('myCheckbox').checked = false;     
    } else {
        setTheme('theme-light');
        document.getElementById('myCheckbox').checked = true;
    }
})();
