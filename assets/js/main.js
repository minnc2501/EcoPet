$(document).ready(function() { 

  $(".click-to-top").on('click', function(event) {

      $("html, body").animate({ scrollTop: 0 }, 'slow');
    return false;
  
  });

  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 80) {
          $('.header__sort-bar').addClass('fixed');
      } else {
          $('.header__sort-bar').removeClass('fixed');
      }
  });

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.header__navigationBar').addClass('fixed');
    } else {
        $('.header__navigationBar').removeClass('fixed');
    }
  });

  $('.social-right-fixed__messeger-img').on('click', function(event) {

    $('.social-right-fixed__window').toggleClass('show');
    console.log('da click')
  });

  $('.social-right-fixed__window-header__icon-option-has-notify').on('click', function(event) {

      $('.social-right-fixed__window-header__icon-option__list').toggleClass('show');
  });

  

  $('.social-right-fixed__window-header__icon-close').on('click', function(event) {

      $('.social-right-fixed__window').removeClass('show');
  });


  $('.filtering').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

},false)