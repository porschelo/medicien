
  $(document).ready(function(){
    $(".slick-block").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,  
      dots: true,
      arrows: false,
      autoplaySpeed: 2000, 
    });
 });

 $('.product-list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  // autoplaySpeed: 5000,
});


$(function() {
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });


 