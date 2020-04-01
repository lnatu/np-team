$(document).ready(function() {
  $('.hero-slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev slick-arrow"><img src="../src/img/angle-left.svg" /></button>',
    nextArrow:
      '<button type="button" class="slick-next slick-arrow"><img src="../src/img/angle-right.svg" /></button>'
  });

  setPickupSlide();

  $(window).resize(setPickupSlide);
  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    if (windowTop >= 36) {
      $('.lang-section').addClass('scrolled');
    } else {
      $('.lang-section').removeClass('scrolled');
    }
  });

  $('.languages__title').on('click', function() {
    $('.languages-list').toggleClass('active');
  });

  $('#open-menu-mobile').on('click', function() {
    $('.menu-mobile').addClass('active');
  });

  $('.close-mobile-menu').on('click', function() {
    $('.menu-mobile').removeClass('active');
  });

  $('.sub-list-mobile-open').on('click', function() {
    $('.sub-list-mobile').toggleClass('active');
  });

  $('.search-item .nav-link').on('click', function(e) {
    e.preventDefault();
    $('.form-item').addClass('show');
  });

  $('.close-form-button').on('click', function(e) {
    e.preventDefault();
    $('.form-item').removeClass('show');
  });
});

function setPickupSlide() {
  $('.pickup__slider')
    .not('.slick-initialized')
    .slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      prevArrow:
        '<button type="button" class="slick-prev slick-arrow"><img src="../src/img/angle-left-dark.svg" /></button>',
      nextArrow:
        '<button type="button" class="slick-next slick-arrow"><img src="../src/img/angle-right-dark.svg" /></button>',
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 675,
          settings: 'unslick'
        }
      ]
    });
}
