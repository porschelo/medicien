
  $(document).ready(function(){
    $(".slick-block").slick({
      // centerMode:true,
      // centerPadding: '100px',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,  
      dots: true,
      arrows: false,
      autoplaySpeed: 2000, 
    });
 });

$(function() {
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });


 