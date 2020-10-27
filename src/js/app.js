$('a').click(function() {
    let sectionTo = $(this).attr('href');
    let scrollAmount = sectionTo === '#hero' ? 0 : $(sectionTo).offset().top - 74

    $('html, body').animate({
      scrollTop: scrollAmount,
    }, 1000);
});


$(window).scroll(function() {    
    let scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#main-header").addClass("nav-shadow");
    } else {
        $("#main-header").removeClass("nav-shadow");
    }
});