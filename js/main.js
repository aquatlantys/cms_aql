;
(function () {

    'use strict';


    // Reflect scrolling in navigation
    var navActive = function (section) {

        var $el = $('.main-nav > ul');
        $el.find('li').removeClass('active');
        $el.each(function () {
            $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
        });

    };

    var navigationSection = function () {

        var $section = $('section[data-section]');

        $section.waypoint(function (direction) {

            if (direction) {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: '150px'
        });

        $section.waypoint(function (direction) {
            if (direction === 'up') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: function () {
                return -$(this.element).height() + 155;
            }
        });

    };

    var burgerMenu = function () {

        $('body').on('click', '.js-aqatl-nav-toggle', function (event) {
            var $this = $(this);


            if ($('body').hasClass('offcanvas')) {
                $('body').removeClass('offcanvas');
            } else {
                $('body').addClass('offcanvas');
            }
            $this.toggleClass('active');
            event.preventDefault();

        });
    };



    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, {
            offset: '85%'
        });
    };


    var dropdown = function () {

        $('.has-dropdown').mouseenter(function () {

            var $this = $(this);
            $this
                .find('.dropdown')
                .css('display', 'block')
                .addClass('animated-fast fadeInUpMenu');

        }).mouseleave(function () {
            var $this = $(this);

            $this
                .find('.dropdown')
                .css('display', 'none')
                .removeClass('animated-fast fadeInUpMenu');
        });

    };


    var owlCarousel = function () {

        var owl = $('.owl-carousel-carousel');
        owl.owlCarousel({
            items: 3,
            loop: true,
            margin: 20,
            nav: true,
            dots: true,
            smartSpeed: 800,
            navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


        var owl = $('.owl-carousel-fullwidth');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 20,
            nav: true,
            dots: true,
            smartSpeed: 800,
            autoHeight: true,
            navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	]
        });

    };


    var goToTop = function () {

        $('.js-gotop').on('click', function (event) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');

            return false;
        });

        $(window).scroll(function () {

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }

        });

    };

    var goToPromo = function () {

        $('.js-goPromo').on('click', function (event) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('#aqatl-promo').offset().top - 65
            }, 400, 'easeInOutExpo');

            return false;
        });

    };

    // Loading page
    var loaderPage = function () {
      $(document).ready(function() {

          setTimeout(function(){
              $(".aq-loader").delay(500).fadeOut("slow");
          }, 5000);

      });
    };

    // Tabs
    var activeTab = function () {

        $(".cta-activities").on('click', function () {
            $('#li-activities a').tab('show');
        });

        $(".cta-fitness").on('click', function () {
            $('#li-fitness a').tab('show');
        });

        $(".cta-planning").on('click', function () {
            $('#li-planning a').tab('show');
        });

        $(".cta-natation").on('click', function () {
            $('#li-stage a').tab('show');
        });

        $(".cta-how").on('click', function () {
            $('#li-how a').tab('show');
        });

        $(".cta-bebe").on("click", function () {
            $("#li-bebe a").tab("show");
        });

        $(".label-fitness").on("click", function () {
            $("#li-fitness a").tab("show");
        });

        $(".label-bike").on("click", function () {
            $("#li-bike a").tab("show");
        });

        $(".label-pole").on("click", function () {
            $("#li-pole a").tab("show");
        });
    };
  
    // Login
    var editin = function () {
          $('.login').on("click", function () {
              Simpla.editable(true);
              $('.logout').fadeIn();
          });
    };
  
    $(function () {
        burgerMenu();
        navigationSection();
        contentWayPoint();
        dropdown();
        goToTop();
        activeTab();
        goToPromo();
        loaderPage();
        editin();
    });


}());
