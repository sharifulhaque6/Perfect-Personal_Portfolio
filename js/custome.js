$(document).ready(function () {

    // navbar bg
    $(window).on('scroll',function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.navbar').addClass('navbg');
        } else {
            $('.navbar').removeClass('navbg');
        }
    });


    $('#bar1').barfiller({
        barColor: "#08D665",
        duration: 3000
    });
    $('#bar2').barfiller({
        barColor: "#08D665",
        duration: 3000
    });
    $('#bar3').barfiller({
        barColor: "#08D665",
        duration: 3000
    });
    $('#bar4').barfiller({
        barColor: "#08D665",
        duration: 3000
    });
    $('#bar5').barfiller({
        barColor: "#08D665",
        duration: 3000
    });
    $('#bar6').barfiller({
        barColor: "#08D665",
        duration: 3000
    });


    // init Isotope start
    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.protfolio_btn').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    $('.protfolio_btn').on('click', 'li', function () {

        $(this).addClass('active').siblings().removeClass('active');

    });

    // isotope end   
    

   

    //testimonial slider
    $('.autoplay').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    //company logo slider
    $('.company_logo_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
    });

    //blog slider
    $('.blog_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
              }
         }
        ]
    });


//animation scroll js
var html_body = $('html, body');
$('.collapse a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 70
            }, 1500);
            return false;
        }
    }
});    
    
    //wow js 
    new WOW().init();
    
   // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    }); 
    

    //back to top button
    $('.back_top').on('click',function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1500);
    });

    $(window).on('scroll',function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 300) {
            $('.back_top').fadeIn();
        } else {
            $('.back_top').fadeOut();
        }
    });

    //type js
        var typed = new Typed('.typed',{   
         strings:['DESIGNER','DEVELOPER'],
            typeSpeed:100,
            backSpeed:80,
            startDelay:1200,
            backDelay:500,
            loop:true,
        });
    
    //preloader
    $(window).on('load', function(){
        $('.preloader').delay(300).fadeOut(500);
    }); 



});










