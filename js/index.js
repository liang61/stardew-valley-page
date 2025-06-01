// 轮播图
var currentIndex = 0;
const slides = document.querySelectorAll('.carousel_inner img');
const totalSlides = 6;
const indcators = document.querySelectorAll('.carousel_indcators button');

function update(){
	document.querySelector('.carousel_inner').style.left = `-${currentIndex * 100}%`;
	//document.getElementById('carouselInner').style.left = `-${currentIndex * 100}%`;
	//小圆点绑定图片
	forEach((indcators,index)=>{
		indcators.classList.toggle('')
	})
}
//往前为负，再加total
function prevSlide(){
	//currentIndex = currentIndex - 1;
	currentIndex = (currentIndex - 1 +totalSlides) % totalSlides;
	update() ;
}
function nextSlide(){
	currentIndex = (currentIndex + 1) % totalSlides;
	//currentIndex = currentIndex + 1 ;
	update() ;
}
function goToSlide(index){
	 currentIndex  = index;
}
//1000是1秒
setInterval(nextSlide,3000);


