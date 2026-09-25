let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Manual navigation functions
function plusSlides(n) {
  clearTimeout(); // Pauses the automatic timer
  slideIndex += n;
  if (slideIndex > document.getElementsByClassName("mySlides").length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = document.getElementsByClassName("mySlides").length}
  showManualSlides(slideIndex);
}

function currentSlide(n) {
  clearTimeout(); // Pauses the automatic timer
  showManualSlides(n);
}

// Function to handle manual slide changes
function showManualSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n-1].style.display = "block";
  dots[n-1].className += " active";
  slideIndex = n;
  setTimeout(showSlides, 3000); // Resumes the automatic timer
}