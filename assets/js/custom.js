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

   $('.dashboard-content .tab-menu-content ul li').on('click', function() {
    //    $('.dashboard-content .slider').slick('refresh');
    // $('.dashboard-content .slider').slick('setPosition');
    // $('.dashboard-content .slider').slick("slickSetOption", "draggable", true, true);    
    // $('.dashboard-content .slider').resize()
    // $('.dashboard-content .slider').slick('reinit')
   })

});