$(function(){
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000
    });
    // preloder
    $(window).on('load',function(){
        $('.loader-bg').delay(1000).fadeOut(1000);
    })
    // back to top
    $('.backtotop').click(function(){
        $('html,body').animate({scrollTop:0},1000);
    })
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()
        if(scrolling > 300){
            $('.backtotop').fadeIn();
        }else{
            $('.backtotop').fadeOut();
        }
        if(scrolling>150){
            $('.bgf').addClass('bg');
        }else{
            $('.bgf').removeClass('bg');
        }
    })
    
    // scrollspy
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar-example'
      })
    //counter
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
    // banner-slider
    $('.banner-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:'.fa-arrow-left',
        prevArrow:'.fa-arrow-right',
        fade:true,
        autoplaySpeed:5000,
        speed:1500,
      });
      // services slider
      $('.services-slider').slick({
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        // autoplay: true,
        centerPadding: '0px',
        autoplaySpeed: 2000,
        nextArrow:'.top',
        prevArrow:'.down',
        speed:1000,
        vertical:true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 1,
                    vertical:true,
                    centerPadding: '0px',
                    centerMode: true,


                }
      },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical:true,
                    centerPadding: '0px',
                    centerMode: true,
                }
      }
      ]

      });
// brand slider
      $('.brand-main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        centerPadding: '0px',
        autoplaySpeed: 2000,
        speed:1000,
        arrows:false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
      },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
      },
      {
                breakpoint: 406,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
      }
      ]
      });
    //   portfolio
    $('.portfolio-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        speed:1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
      },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
      }
      ]
      });
   // testimonial slick part //

   $('.pwsn').slick({
    slidesToShow: 1,
    centerPadding: '0px',
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.personal-info-main',

    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
  },
        {
            breakpoint: 767,
            settings: {
                vertical: false,
                horizontal: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
  }
  ]
});

$('.personal-info-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '0px',


    responsive: [
        {
            breakpoint: 768,
            settings: {
                vertical: false,
                slidesToShow: 3
            }
}
],
    asNavFor: '.pwsn',
    dots: false,
    arrows: true,
    prevArrow: '<i class="fa fa fa-chevron-up slidPrv4"></i>',
    nextArrow: '<i class="fa fa-chevron-down slidNext4"></i>',
    vertical: true,
    verticalSwiping: true,
    centerPadding: '0px',
    centerMode: true,
    focusOnSelect: true,
});

    $('.venobox').venobox({
        framewidth : '700px',
    }); 

});