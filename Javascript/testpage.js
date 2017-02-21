/**
 * Created by thomasmoore on 2/20/17.
 */

$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});

// ---RED---

$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion-red .accordion-section-title-red').removeClass('active');
        $('.accordion-red .accordion-section-content-red').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title-red').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion-red ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});

// ---BLUE---
$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion-blue .accordion-section-title-blue').removeClass('active');
        $('.accordion-blue .accordion-section-content-blue').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title-blue').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion-blue ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});