var slideIndex = 1;
showSlides(slideIndex);

//next /previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}
//thumbnail image control
function currentSlide(n){
    showSlides(slideIndex = n)
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlide");
    // console.console.log(slides);
    
    if(n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function Success(){
    alert("We will contact you soon..!");
}
// //Automatice slide show
// var slideIndex = 0;
// showSlides();

// function showSlides(n){
//     var i;
//     var slides = document.getElementsByClassName("mySlide");

//     for(i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if(slideIndex > slides.length){
//         slideIndex = 1
//     }
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 3000);
// }
