/*------------------------------------
 *Author:FortunaTheme
 *Template:Sierra
 *Version:2.0
 *-------------------------------------
 */
(function($) {

    "use strict";

    jQuery(document).ready(function() {

        /*
         * -----------------------------------------------------------------
         *---------------------------Preloader------------------------------
         * -----------------------------------------------------------------
         */

        var themeWindow = $(window);
        var pagebody = $('html, body');

        themeWindow.on("load", function() {

            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(50).fadeOut('slow');
            themeWindow.scrollTop(0);
        });



        /*
         * -----------------------------------------------------------------
         *-------------------single-page-nav-plugin------------------------
         * -----------------------------------------------------------------
         */



        // Prevent console.log from generating errors in IE for the purposes of the demo
        if (!window.console) console = {
            log: function() {}
        };

        // The actual plugin
        var singleNav = jQuery('.single-page-nav');
        singleNav.singlePageNav({
            offset: singleNav.outerHeight(),
            filter: ':not(.external)',
            updateHash: true,
            beforeStart: function() {
                console.log('begin scrolling');
            },
            onComplete: function() {
                console.log('done scrolling');
            }
        });



        /*
         * -----------------------------------------------------------------
         *-----------------------Scroll Top Events--------------------------
         * -----------------------------------------------------------------
         */



        var scrollTopBtn = $("#scroll-top-area");

        scrollTopBtn.on("click", function() {
            pagebody.animate({
                scrollTop: 0
            }, 2000);
        });


        themeWindow.on("scroll", function() {
            var top2 = themeWindow.scrollTop();
            var pageHeader = $("header");
            var scrollTopArea = $("#scroll-top-area");
            if (top2 < 150) {
                scrollTopArea.css('display', 'none');
            } else if (top2 >= 150) {
                scrollTopArea.css('display', 'block');
            }
            var scroll = themeWindow.scrollTop();

            if (scroll >= 70) {
                pageHeader.addClass("dark-header");
            } else {

                if (pageHeader.hasClass("dark-header")) {

                    pageHeader.removeClass("dark-header");

                }

            }
        });


        /*
         * -----------------------------------------------------------------
         *-------------------------button animation-------------------------
         * -----------------------------------------------------------------
         */



        var skillBtn = $(".skill-btn");
        var portfolio = $("#portfolio");
        var contactBtn = $("#welcome-contact");
        var contactarea = $("#contact");
        skillBtn.on("click", function() {
            pagebody.animate({
                scrollTop: (portfolio.offset().top) - 60
            }, 2000);
        });
        contactBtn.on("click", function() {
            pagebody.animate({
                scrollTop: (contactarea.offset().top) - 60
            }, 2000);
        });


        /*
         * -----------------------------------------------------------------
         *------------------------------Slider----------------------------
         * -----------------------------------------------------------------
         */
         if($(".welcome-area").is(".slider-bg")){

            var welcomeSlider = jQuery('.camera_wrap');
            welcomeSlider.camera({ //here I declared some settings, the height and the presence of the thumbnails 
                height: '700px',
                pagination: false,
                thumbnails: false,
                overlayer: true,
                loader: 'none',
                playPause: false,
            });

         }

        /*
         * -----------------------------------------------------------------
         *--------------------Animation using animate.css-------------------
         * -----------------------------------------------------------------
         */



        var animation1 = jQuery('.animation');

        animation1.waypoint(function() {
            var thisElement = $(this.element);
            var animation = thisElement.attr('data-animation');

            thisElement.css('opacity', '1');
            thisElement.addClass("animated " + animation).delay(5000);
        }, {
            offset: '75%',
        });


        /*
         * -----------------------------------------------------------------
         *--------------------------skills progressbar----------------------
         * -----------------------------------------------------------------
         */



        var skill = jQuery('.skills');
        var prog80 = $('.prog-80');
        var prog90 = $('.prog-90');
        var prog86 = $('.prog-86');
        var prog94 = $('.prog-94');
        skill.waypoint(function() {

            prog80.css({
                "width": "80%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '80%'
        });
        skill.waypoint(function() {

            prog90.css({
                "width": "90%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '90%'
        });
        skill.waypoint(function() {

            prog86.css({
                "width": "86%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '86%'
        });
        skill.waypoint(function() {

            prog94.css({
                "width": "94%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '94%'
        });

        /*
         * -----------------------------------------------------------------
         *-------------------------------CounterUp---------------------------
         * -----------------------------------------------------------------
         */
         if($(".fun-fact").is(".fun-area")){
          var count = $('.counter');
          count.counterUp({
              delay: 20,
              time: 2000
          });
        }

        /*
         * -----------------------------------------------------------------
         *-------------------------------Mixit Up---------------------------
         * -----------------------------------------------------------------
         */



        var portfolioContent = $('.portfolio-content');

        portfolioContent.mixItUp();



        /*
         * -----------------------------------------------------------------
         *-----------------------------lightbox-----------------------------
         * -----------------------------------------------------------------
         */



        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            showImageNumberLabel: false,
        });


        /*--------------------magnificPopup------------------*/
        if($(".video").is("#video")){

          var videoPlay = $('.video-play');
          videoPlay.magnificPopup({
              type: 'iframe',
              closeBtnInside: false,
              closeOnContentClick: true,
              tLoading: '', // remove text from preloader


          });
        }

        /*
         * -----------------------------------------------------------------
         *------------------------------slicknav----------------------------
         * -----------------------------------------------------------------
         */



        var menu = $("header #menu");

        menu.slicknav({
            label: '',
        });


        /*-----------Owl Carousel For team-------------*/
        var team = $("#team #owl-demo-team");

        team.owlCarousel({
            items: 4, //4 items above 1000px browser width
            itemsDesktop: [1000, 3], //3 items between 1000px and 901px
            itemsDesktopSmall: [900, 2], //2 items betweem 900px and 601px
            itemsTablet: [600, 1], //1 item between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            slideSpeed: 150,
            autoPlay: 2000,
            stopOnHover: true


        });
        /*-----------Owl Carousel For Partners-------------*/
        var partners = $("#partners #owl-demo");

        partners.owlCarousel({
            items: 5, //5 items above 1000px browser width
            itemsDesktop: [1000, 3], //3 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], //3items betweem 900px and 601px
            itemsTablet: [600, 1], //1 item between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            autoPlay: 2000,
            pagination: false


        });

        
        /*
         * -----------------------------------------------------------------
         *----------------------contact form ajax---------------------------
         * -----------------------------------------------------------------
         */



        var contactSubmit = $('#contact-submit');

        contactSubmit.on('click', function(e) {
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();

            var message = $('#message').val();
            var form = new Array({
                'name': name,
                'email': email,
                'message': message
            });

            $.ajax({
                type: 'POST',
                url: "contact.php",
                data: ({
                    'action': 'contact',
                    'form': form
                })
            }).done(function(data) {

                var conResult = $('#contact .result');
                conResult.html(data);
                $(".contact-form-area")[0].reset();

            });

        });



        /*
         * -----------------------------------------------------------------
         *--------------------Owl Carousel For Testimonial------------------
         * -----------------------------------------------------------------
         */



        var testimonial = $("#client-testimonial #owl-demo-testimonial");

        testimonial.owlCarousel({
            items: 1, //1 item above 1000px browser width
            itemsDesktop: [1000, 1], //1 item between 1000px and 901px
            itemsDesktopSmall: [900, 1], //1 item betweem 900px and 601px
            itemsTablet: [600, 1], //1 item between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            autoPlay: 6000,
            pauseOnHover: true
        });


        /*
         * -----------------------------------------------------------------
         *--------------------Google Map------------------------------------
         * -----------------------------------------------------------------
         */
         if($(".map").is("#map")){
            var center = [51.5052491,-0.0939282];
            var mymap=$('#map');
              mymap.gmap3({
                center: center,
                zoom: 16,
                scrollwheel: false,
                mapTypeId : google.maps.MapTypeId.ROADMAP
              })
              .marker({
                position: center,
              });
          }

    });

})(jQuery);