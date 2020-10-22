(function() {
'use strict'
	const left_arrow = document.querySelector('.left-arrow'),
		right_arrow = document.querySelector('.right-arrow'),
		circles = document.querySelectorAll('.content-circles'),
		bgList = document.querySelector('.bg-slider-list'),
		sliderText = document.querySelector('.slider-text h3'),
		sliderPrice = document.querySelector('.content-head-price');
		

	const nextSlide = -100,
		  sliderTextArr = [
		  	'Для зала',
		  	'Для кухни',
		  	'Для гостиной',
		  	'Для спальни'
		  ],
		  sliderPriceArr = [
		  	'50',
		  	'55',
		  	'45',
		  	'60'
		  ];

	let i;

	function findActiveItem(){
		circles.forEach((elem, index) => {
			if(elem.classList.contains('active')){
				i = index;
			}
		});
	}

	function changeSlide(i){
		bgList.style.left = i * nextSlide + '%';
		sliderText.textContent = sliderTextArr[i];
		sliderPrice.textContent = sliderPriceArr[i];
	}

	left_arrow.addEventListener('click', function(e){
		findActiveItem();
		if(i != 0){
			circles[i].classList.remove('active');	
			circles[--i].classList.add('active');
			changeSlide(i);
		}
	});

	right_arrow.addEventListener('click', function(e){
		findActiveItem();
		if(i < circles.length - 1){
			circles[i].classList.remove('active');	
			circles[++i].classList.add('active');
			changeSlide(i);
		}
	});

	circles.forEach((elem, index) => {
		elem.addEventListener('click', function(){
			if(!this.classList.contains('active')){
				for (let i = 0; i < circles.length; i++) {
					circles[i].classList.remove('active');
				}
				this.classList.add('active');
				changeSlide(index);
			}
		});
	});
})();