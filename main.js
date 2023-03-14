let slideimages = Array.from(document.querySelectorAll('.slider-container img'));

// numbers of the slideImages
let slideCount = slideimages.length;

// current number of slide
let currentSlide = 1;

// previous button 
let prevBtn = document.querySelector('.prev');
// next button 
let nextBtn = document.getElementById('next');

// get slide number 
let slideNumber = document.getElementById('slide-number');

// handle next and previous buttons
prevBtn.onclick = previous;
nextBtn.onclick = next;


// create an ul element
let ulElement = document.createElement('ul');

// add an id to ul element 
ulElement.setAttribute('id', 'pagination-ul');


// loop for create lis elements
for(let i = 1; i <= slideCount; i++) {
	
	// create lis Elemetns 
	let lis = document.createElement('li');
	// append lis elements to ulElement
	ulElement.appendChild(lis);
	// add text to lis 
	lis.appendChild(document.createTextNode(i));
	
	// add an attribute custom to the lis ele
	lis.setAttribute('data-index', i);
}

// append ulElement to the indicators element
document.getElementById('indicators').appendChild(ulElement);

// get the new created ulElement 
let ulNewElement = document.getElementById('pagination-ul');

// get array from lis elements
let slideBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for(let i = 0; i < slideBullets.length; i++) {

	slideBullets[i].onclick = function() {
		currentSlide = parseInt(this.getAttribute('data-index'));
		theChecker();
	}
}

// trigger thechecker function
theChecker();

function previous() {
	if(currentSlide == 1) {
		return false;
	} else {
		currentSlide--;
		theChecker();
	}
}

function next() {
	if(currentSlide == slideCount) {
		return false;
	} else {
		currentSlide++;
		theChecker();
	}
}


function theChecker() {
    // set numbers slide
	slideNumber.textContent = '#'+currentSlide + ' of ' + slideCount;
    
	removeAllClasses();

	// set active class to images
	slideimages[currentSlide - 1].classList.add('active');
	
	// add active class to the bullets
	ulElement.children[currentSlide - 1].classList.add('active');
	
	// check if slide count is the first
    if(currentSlide === 1) {
		// add active cla
		prevBtn.classList.add('disable');
	} else {
		prevBtn.classList.remove('disable');
	}

	// check if the current slide is the last 
	if(currentSlide == slideCount) {
		nextBtn.classList.add('disable');
	} else {
		nextBtn.classList.remove('disable');
	}
	
	
}

// remove All classes from the elements 
function removeAllClasses() {
    // remove All active classes from imgs
	slideimages.forEach(function(img) {
		img.classList.remove('active');
	});

	// remove active class from bullets
	slideBullets.forEach(function(bullet) {
		bullet.classList.remove('active');
	})


}