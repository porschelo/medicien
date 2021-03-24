$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

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

  //換圖

  $(document).ready(function () {
    $('.carousel__inner__link').click(function () { 
        $('.carousel__item__pic--active').attr('src', $(this).attr('href'));
        return false;
    });
});