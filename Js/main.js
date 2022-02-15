$(document).ready(function() {
    $(".nav-list-mobile").slideToggle();
    $(".nav-list-mobile").css({ display: "none" });

    $("#nav-toggle").click(function() {
        $(".nav-list-mobile").slideToggle();
        $(".nav-list-mobile li").toggleClass("test2");
        document.querySelector(".social_Media-bar").classList.toggle("top-social");
    });

    $("#nav-toggle").click(function() {
        this.classList.toggle("active");
        console.log(document.querySelector(".social_Media-bar"));
    });






})



var counter = 1;
setInterval(function() {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 10000);