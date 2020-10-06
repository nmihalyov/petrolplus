$('.js-advantage').on('click', e => {
  if ($(window).innerWidth() < 1200) {
    const $this = $(e.currentTarget);
  
    if ($this.hasClass('advantages__item--active')) {
      $('.advantages__item--active').removeClass('advantages__item--active');
      $('.advantages__content').slideUp(300);
    } else {
      $('.advantages__item--active').removeClass('advantages__item--active');
      $this.addClass('advantages__item--active');
      $('.advantages__content').slideUp(300);
      $this.find('.advantages__content').slideDown(300);
    }
  }
});