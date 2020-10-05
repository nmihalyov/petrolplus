$('.js-tab').on('click', function () {
  $('.js-tab-active').removeClass('js-tab-active');
  $(this).addClass('js-tab-active');
  $(this).closest('.js-tabs').find('.js-tab-content').hide(0);
  $(this).closest('.js-tabs').find(`.js-tab-content[data-tab="${$(this).attr('data-tab')}"]`).fadeIn(300);
});