
  $(document).ready(function(){
    $(".slick-block").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,  
      dots: true,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 8000, 
    });
 });

//  $('.product-list').slick({
//   slidesToShow: '4',
//   slidesToScroll: 1,
//   autoplay: false,
//   // autoplaySpeed: 5000,
// });


// <!-- Initialize Swiper -->
 
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: true,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints:{
        100:{
          slidesPerView: 1,
          spaceBetween: 30,
        },
        575:{
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
    });


$(function() {
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });


//  =========== hamburger =============

  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu


    let inside_menu = document.getElementsByClassName("inside-menu")[0];
    // console.log(inside_menu);
      if(inside_menu.style.display === "none"){
        inside_menu.style.display = "block";
      }else if(inside_menu.style.display === "block"){
        inside_menu.style.display = "none";
      }
  });


  //  =========== click inside-menu =============
  // var hamburger = document.querySelector(".hamburger");
  // hamburger.addEventListener("click", function() {
  //   let inside_menu = document.getElementsByClassName("inside-menu")[0];
  //   if(inside_menu.style.display === "none"){
  //     inside_menu.style.display === "block"
  //   }else if (inside_menu.style.display === "block"){
  //     inside_menu.style.display === "none"
  //   }
  // });
  
  
 