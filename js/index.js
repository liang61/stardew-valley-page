// 轮播图
var currentIndex = 0;
const slides = document.querySelectorAll('.carousel_inner img ')
const totalSlides = slides.length;

function update(){
	//currentIndex = (currentIndex + totalSlides) % totalSlides;
	document.querySelector('.carousel_inner').style.left = `-${currentIndex * 100}%`;
	//document.getElementById('carouselInner').style.left = `-${currentIndex * 100}%`;
}
//往前为负，再加total
function prevSlide(){
	currentIndex = currentIndex - 1;
	update() ;
}
function nextSlide(){
	//currentIndex = (currentIndex + 1) % totalSlides;
	currentIndex = currentIndex + 1 ;
	update() ;
}
//底部按钮
function goToSlide(index){
	currentIndex = index;
}

//1000是1秒
//setInterval(nextSlide,3000);