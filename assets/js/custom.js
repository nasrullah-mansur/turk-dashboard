$(document).ready(function() {
    "use strict";

   $('.dashboard-content .slider').slick({
       dots: true,
       arrows: false,
   });

   $('.dashboard-content a.hide-offer').on('click', function(e) {
        e.preventDefault();
        let text = $(this).text();
        $('.dashboard-content .tab-content .content .list').slideToggle();
        $('.dashboard-content a.dots').toggle();

        if(text == 'Hide Offers') {
            $(this).text('Show Offers');
        } 



        else {
            $(this).text('Hide Offers');
        }

   })

   $('.nice-select').niceSelect();

});