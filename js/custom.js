/*
------------------------------------------------------------------------
* Template Name    : Dhrums - Responsive Bootstrap 4 Personal Template * 
* Author           : ThemesBoss                                        *
* Version          : 1.0.0                                             *
* Created          : October 2018                                      *
* File Description : Main Js file of the template                      *
*-----------------------------------------------------------------------
*/


! function($) {
    "use strict";

    var Dhrums = function() {};

    Dhrums.prototype.initStickyAddMenu = function() {
        $(window).on('scroll',function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
            } else {
                $(".sticky").removeClass("stickyadd");
            }
        });
    },

    Dhrums.prototype.initSmoothlyLink = function() {
        $('.nav-item a, .scroll_down a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    Dhrums.prototype.initScrollActive = function() {
        $("#navbarCollapse").scrollspy({
            offset: 70
        });
    },

    Dhrums.prototype.initMouseParallax = function() {
        $( document ).mousemove( function( e ) {
            $( '.about-tween' ) .parallax( 70, e );
        });
    },
    
    Dhrums.prototype.initCounter = function() {
        var a = 0;
        $(window).on('scroll', function() {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.lan_fun_value').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
                });
                a = 1;
            }
        });
    },

    Dhrums.prototype.initPortfolio = function() {
        $(window).on('load', function() {
            var $container = $('.work-filter');
            var $filter = $('#menu-filter');
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            $filter.find('a').on("click", function() {
                var selector = $(this).attr('data-filter');
                $filter.find('a').removeClass('active');
                $(this).addClass('active');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });
    },

    Dhrums.prototype.initMFPImg = function() {
        $('.img-zoom').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });
    },

    Dhrums.prototype.initClientSlider = function() {
        $("#owl-demo").owlCarousel({
            autoPlay: 10000,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]
        });
    },

    Dhrums.prototype.initPreLoader = function() {
        var loader = $(".loader");
        var wHeight = $(window).height();
        var wWidth = $(window).width();
        var o = 0;

        loader.css({
            top: wHeight / 2 - 2.5,
            left: wWidth / 2 - 200
        })

        do {
            loader.animate({
                width: o
            }, 10)
            o += 3;
        } while (o <= 400)
        if (o === 402) {
            loader.animate({
                left: 0,
                width: '100%'
            })
            loader.animate({
                top: '0',
                height: '100vh'
            })
        }

        setTimeout(function() {
            $(".loader-wrapper").fadeOut('fast');
            (loader).fadeOut('fast');
        }, 3500);
    },

    Dhrums.prototype.initBackToTop = function() {
        $(window).on('scroll',function(){
            if ($(this).scrollTop() > 100) {
                $('.back_top').fadeIn();
            } else {
                $('.back_top').fadeOut();
            }
        }); 
        $('.back_top').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    },

    Dhrums.prototype.init = function() {
        this.initStickyAddMenu();
        this.initSmoothlyLink();
        this.initScrollActive();
        this.initMouseParallax();
        this.initCounter();
        this.initPortfolio();
        this.initMFPImg();
        this.initClientSlider();
        this.initPreLoader();
        this.initBackToTop();
    },
    //init
    $.Dhrums = new Dhrums, $.Dhrums.Constructor = Dhrums
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Dhrums.init();
}(window.jQuery);











