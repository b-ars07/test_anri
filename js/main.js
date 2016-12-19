$(function() {
  //переход к форме, при клике на "Записаться"
  $(".superbtn").on('click', function(e) {
    $('html, body').animate({ scrollTop: $('#form').offset().top }, 1000);
    e.preventDefault();
  });

  //делаем ссылку меню активной
  $(".nav>a").on('click', function() {
    $(".nav>a").removeClass("nav__link_active");
    $(this).addClass('nav__link_active');
  });

  $(window).scroll(function(){
  			if($(this).scrollTop()>60){
  				$('.header').css({'position' : 'fixed', 'background' : 'url("../../img/bg-header3.png") no-repeat', 'height' : '118px', 'height' : '176px', 'z-index' : '10'});
          document.querySelector('.header__logo img').src="../../img/logo-min.png"
          $('.header__logo').css({'background-repeat' : 'no-repeat', 'padding-top' : '5px'});
          $('.nav').css({'margin-top' : '20px'});

  			}
  			else if ($(this).scrollTop()<60){
  				$('.header').css({'position' : 'relative', 'background' : 'url("../../img/bg-header2.png") no-repeat', 'height' : '176px'});
          document.querySelector('.header__logo img').src="../../img/logo.png"
          $('.header__logo').css({'background-repeat' : 'no-repeat', 'padding-top' : '20px'});
          $('.nav').css({'margin-top' : '60px'});
  			}
  		});


});
