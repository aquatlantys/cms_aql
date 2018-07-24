;
(function () {

    'use strict';

    var mobileMenuOutsideClick = function () {

        $(document).click(function (e) {
            var container = $("#aqatl-offcanvas, .js-aqatl-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas')) {
                    $('body').removeClass('offcanvas');
                    $('.js-aqatl-nav-toggle').removeClass('active');
                }
            }
        });

    };


    var header = function () {
        $(window).scroll(function () {
            var st = $(window).scrollTop();
            if (st > 50) {
                $('.aqatl-nav').addClass('scrolled');
            } else {
                $('.aqatl-nav').removeClass('scrolled');
            }
        });

    };


    var navigation = function () {

        $('body').on('click', '#aqatl-offcanvas ul a:not([class="external"]), .main-nav a:not([class="external"])', function (event) {
            var section = $(this).data('nav-section');
            if ($('[data-section="' + section + '"]').length) {
                $('html, body').animate({
                    scrollTop: $('[data-section="' + section + '"]').offset().top - 55
                }, 500, 'easeInOutExpo');
            }

            if ($('body').hasClass('offcanvas')) {
                $('body').removeClass('offcanvas');
                $('.js-aqatl-nav-toggle').removeClass('active');
            }
            event.preventDefault();
            return false;
        });

    };


    var offcanvasMenu = function () {

        $('body').prepend('<div id="aqatl-offcanvas" />');
        $('body').prepend('<a href="#" class="js-aqatl-nav-toggle aqatl-nav-toggle"><i></i></a>');
        var clone1 = $('.menu-1 > ul').clone();
        $('#aqatl-offcanvas').append(clone1);
        var clone2 = $('.menu-2 > ul').clone();
        $('#aqatl-offcanvas').append(clone2);

        $('#aqatl-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
        $('#aqatl-offcanvas')
            .find('li')
            .removeClass('has-dropdown');

        // Hover dropdown menu on mobile
        $('.offcanvas-has-dropdown').mouseenter(function () {
            var $this = $(this);

            $this
                .addClass('active')
                .find('ul')
                .slideDown(500, 'easeOutExpo');
        }).mouseleave(function () {

            var $this = $(this);
            $this
                .removeClass('active')
                .find('ul')
                .slideUp(500, 'easeOutExpo');
        });


        $(window).resize(function () {

            if ($('body').hasClass('offcanvas')) {

                $('body').removeClass('offcanvas');
                $('.js-aqatl-nav-toggle').removeClass('active');

            }
        });
    };


    $(function () {
        mobileMenuOutsideClick();
        header();
        navigation();
        offcanvasMenu();
    });


}());
