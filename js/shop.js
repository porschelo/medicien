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
