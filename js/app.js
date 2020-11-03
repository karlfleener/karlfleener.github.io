//smooth scroll to section on nav click
$("a[href*='#']").click(function() {
    let sectionTo = $(this).attr('href');
    let scrollAmount = sectionTo === '#hero' ? 0 : $(sectionTo).offset().top - 74

    $('html, body').animate({
      scrollTop: scrollAmount,
    }, 1000);
});

//add main header shadow on scroll
$(window).scroll(function() {    
    let scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#main-header").addClass("nav-shadow");
    } else {
        $("#main-header").removeClass("nav-shadow");
    }
});

//add main header shadow on hamburger click
$(".navbar-toggler").click(function() {
    let scroll = $(window).scrollTop();
    if (scroll < 1) {
        $("#main-header").toggleClass("nav-shadow");
    } 
})