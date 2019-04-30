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

        var themeWindow=$(window);
        var pagebody=$('html, body');

        themeWindow.on("load", function() {

            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(50).fadeOut('slow');
            themeWindow.scrollTop(0);
        });

    });

})(jQuery);