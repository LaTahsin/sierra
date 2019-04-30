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
         *-------------------------------CounterUp---------------------------
         * -----------------------------------------------------------------
         */
        
        var wrapper=$('#wrapper');
        wrapper.countdown('2017/07/07', function(event) {
            var clockA=$('#clock-a');
            clockA.html(event.strftime('<h1>%D</h1> Days'));
            var clockB=$('#clock-b');
            clockB.html(event.strftime('<h1>%H</h1> Hours'));
            var clockC=$('#clock-c');
            clockC.html(event.strftime('<h1>%M</h1> Minutes'));
            var clockD=$('#clock-d');
            clockD.html(event.strftime('<h1>%S</h1> Seconds'));
        });
    });

})(jQuery);