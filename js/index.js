
 $('.slider-for').slick({
    autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
	dots: false,
  fade: true,
});
$(function(){
  const header_menu = $(".header_menu > a");
  const body = $("body");
  
  header_menu.click(function(){
    var menu = $(this).attr("href");

    var scroll_point = $(menu).offset().top;
    body.animate({
      scrollTop: scroll_point
    }, 300);
  });
});
$(function() {
  $('nav').hide();
  $('.btn_nav').click(function(){
      $(this).toggleClass('active');
      $('nav').fadeToggle();
  });
});
