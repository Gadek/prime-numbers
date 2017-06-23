var NavY, menuY, ScrollY,a1,a2,a3,a4,a5,a6;


$(document).ready(function () {
    
    var getOffsets = function() {
        a1 = $('#nr1').offset().top-5;
        a2 = $('#nr2').offset().top-5;
        a3 = $('#nr3').offset().top-5;
        a4 = $('#nr4').offset().top-5;
        a5 = $('#nr5').offset().top-5;
        a6 = $('#nr6').offset().top-5;
        a7 = $('#about-page').offset().top-5;
    }
    
    
    var stickyNav = function () {
        ScrollY = $(window).scrollTop();
        if (ScrollY > NavY) {
            $('nav').css('position','fixed');
            $('nav').css('top','0px');
        } 
        if (ScrollY < NavY) {
            $('nav').css('position','absolute');
            $('nav').css('top','210px');
        } 
    };
    
    var highlight = function() {
        $('#li1').removeClass('highlighted');
        $('#li2').removeClass('highlighted');
        $('#li3').removeClass('highlighted');
        $('#li4').removeClass('highlighted');
        $('#li5').removeClass('highlighted');
        $('#li6').removeClass('highlighted');
        $('#li7').removeClass('highlighted');
        if(ScrollY>a1 && ScrollY<=a2) {
            $('#li1').addClass('highlighted');
        } else if(ScrollY>a2 && ScrollY<=a3) {
            $('#li2').addClass('highlighted');
        } else if(ScrollY>a3 && ScrollY<=a4) {
            $('#li3').addClass('highlighted');
        } else if(ScrollY>a4 && ScrollY<=a5) {
            $('#li4').addClass('highlighted');
        } else if(ScrollY>a5 && ScrollY<=a6) {
            $('#li5').addClass('highlighted');
        } else if(ScrollY>a6 && ScrollY<=a7) {
            $('#li6').addClass('highlighted');
        } else if(ScrollY>a7 ) {
            $('#li7').addClass('highlighted');
        }
    }

    ScrollY = $(window).scrollTop();
    NavY = $('nav').offset().top;

    stickyNav();
    getOffsets();
    $(window).scroll(function () {
        stickyNav();
        highlight();
    });
    
    $(window).resize(function(){
       if(window.innerWidth>700) {
           $('.nav').css('display','block')
       } else {
            $('.nav').css('display','none')
       }
        getOffsets();
    });

    $(".menu-trigger").click(function(){
        $('.nav').slideToggle();
    });

    
});
