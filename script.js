let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000);
}

document.getElementById("prevBtn").addEventListener("click", function() {
    slideIndex--;
    showSlides();
});

document.getElementById("nextBtn").addEventListener("click", function() {
    slideIndex++;
    showSlides();
});