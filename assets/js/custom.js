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


   $('.ratting-modal .ratting input').on('click', function() {
    let inputVal = $(this).val();

    let allLabel = $('.ratting-modal .ratting label');
    Array.from(allLabel).forEach( (label) => {
        let checkInput = label.querySelector('input');
        let checkIcon = label.querySelector('i').classList;

        if(checkInput.value <= inputVal) {
            label.classList.add('active');
            checkIcon.remove('far');
            checkIcon.add('fas');
        } else {
            label.classList.remove('active');
            checkIcon.remove('fas');
            checkIcon.add('far');
        }
    } )

    })


    $('.dashboard-content .tab-content .content .top .btn-area span.dots').on('click', function() {
        $(this).children('a').fadeToggle();
    })

});