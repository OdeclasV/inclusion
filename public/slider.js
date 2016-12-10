	//getting slider and slider images
	var gallery = document.querySelector('.js-gallery')
	var galleryItems = document.querySelectorAll('.js-gallery-item')

	var slideCount = galleryItems.length
	//getting the width of a single slider
	var slideWidth = galleryItems[0].getBoundingClientRect().width

	var slideInterval = setInterval(transitionSlide, 3000)

	var currentSlide = 1

	//getting slide transition to work 
	function transitionSlide() {
		if (currentSlide < slideCount) {
			gallery.style.transform = "translateX(-" + slideWidth * currentSlide + "px)"
			currentSlide++
		} else {
			gallery.style.transform = "translateX(0)"
			 currentSlide = 1
		}
	}
