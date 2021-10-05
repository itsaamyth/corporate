jQuery("#carousel3").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 1500,
    smartSpeed:1000,
    center:true,
    nav: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  });