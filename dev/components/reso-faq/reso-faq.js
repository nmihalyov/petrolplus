$('.js-faq-item').on('click', e => {
  const $this = $(e.currentTarget);

  $('.reso-faq__item-content').slideUp(300);
  
  if ($this.hasClass('reso-faq__item-heading--active')) {
    $this.removeClass('reso-faq__item-heading--active');
  } else {
    $('.reso-faq__item-heading--active').removeClass('reso-faq__item-heading--active');
    $this.parent().find('.reso-faq__item-content').slideDown(300);
    $this.addClass('reso-faq__item-heading--active');
  }
});