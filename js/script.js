var screen_xs = 767;

if(window.innerWidth <= screen_xs) {
    $(".navbar").addClass("navbar-fixed-top");
    $(".section-title").click(function() {
        $(this).parent().find('.content').toggleClass("content-open");
        if ($(this).parent().find('.content').hasClass("content-open")) {
            $(this).find('i').removeClass('fa-caret-down');
            $(this).find('i').addClass('fa-caret-up');
        } else {
            $(this).find('i').removeClass('fa-caret-up');
            $(this).find('i').addClass('fa-caret-down');
        }
    });
} else {
    $(".navbar").removeClass("navbar-fixed-top");
    $(".content").each(function() {
        $(this).removeClass("content-open");
    });
}

$(document).ready(function() {
    $(window).bind('scroll', function() {
        var navHeight = $( window ).height() - 70;
        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('fixed');
        }
        else {
            $('nav').removeClass('fixed');
        }
    });

    $('.name').hide();
    $('.roles').hide();
    $('.name').fadeIn(1000, function() {
        $('.roles').fadeIn(1000)
    });

    $('.burger').click(function() {
        $('ul').toggleClass('open');
    });

    $('ul li a').click(function() {
        $('ul').removeClass('open');
    });

    $(window).resize(function() {
        if (window.innerWidth <= screen_xs) {
            $(".navbar").addClass("navbar-fixed-top");
            $(".section-title").click(function() {
                $(this).parent().find('.content').toggleClass("content-open");
                if ($(this).parent().find('.content').hasClass("content-open")) {
                    $(this).find('i').removeClass('fa-caret-down');
                    $(this).find('i').addClass('fa-caret-up');
                } else {
                    $(this).find('i').removeClass('fa-caret-up');
                    $(this).find('i').addClass('fa-caret-down');
                }
            });
        } else {
            $(".navbar").removeClass("navbar-fixed-top");
            $(".content").each(function() {
                $(this).removeClass("content-open");
            });
        }
    });
});