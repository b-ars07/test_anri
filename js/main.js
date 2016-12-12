$(function() {
  //переход к форме, при клике на "Записаться"
  $(".superbtn").on('click', function(e) {
    $('html, body').animate({ scrollTop: $('#form').offset().top }, 1000);
    e.preventDefault();
  });

  //делаем ссылку меню активной
  $(".nav a").on('click', function() {
    $(".nav a").removeClass("nav__link_active");
    $(this).addClass('nav__link_active');
  });

});
