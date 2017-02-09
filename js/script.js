var screen_xs = 767;

$(document).ready(function() {
    $('.burger').click(function() {
        $('ul').toggleClass('open');
    });

    $('ul li a').click(function() {
        $('ul').removeClass('open');
    });

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