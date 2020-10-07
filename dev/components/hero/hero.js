const setHeroSlider = () => {
  if ($(window).innerWidth() < 1200) {
    $('.hero__tags').clone().insertAfter('.hero__tags');
  
    Array.from($('.hero__tags-inner')).map((el, i) => {
      if (i === 1) {
        $(el).on('init', function() {
          setInterval(function() {
            $(el).slick('slickPrev');
          }, 0);
        });
  
        $(el).slick({
          variableWidth: true,
          autoplay: false,
          autoplaySpeed: 0,
          cssEase:'linear',
          speed: 10000,
        });
      } else {
        $(el).slick({
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase:'linear',
          speed: 10000
        });
      }
    });
  } else {
    $('.hero__tags')[1].remove();
    $('.hero__tags-inner').slick('destroy')
  }
};

$(window).resize(setHeroSlider);