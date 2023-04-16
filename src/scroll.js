function scrollToSection(section) {
    $('html').animate({
        scrollTop: $(section).offset().top - 1.9
    }, 100);
};