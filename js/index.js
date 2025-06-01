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


