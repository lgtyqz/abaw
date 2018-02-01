if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    alert("MOBILE DETECTED!");
    window.location.href = "https://lgtyqz.github.io/mabaw/";
}
//Put each div object into a array
//
alert("WORKING");
var slides = document.getElementsByClassName("slide");
window.onload = function(){
    transition(0);
}
function transition(slide){
    for(var i = 0; i < slides.length; i++){
        slides[i].style.visibility = "hidden";
    }
    slides[slide].style.visibility = "visible";
}