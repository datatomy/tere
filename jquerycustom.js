
// Cierre de menu
$(function(){ 
    var navMain = $("#navbarSupportedContent");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

// Smooth Scrolling
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

// Hover a iconos de contacto  
  $(function() {
    $('#tarWhatsapp').hover(function() {
      $('#iconoWhatsapp').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      $('#iconoWhatsapp').css('color', 'var(--main-color)');
    });
  });

  $(function() {
    $('#tarMail').hover(function() {
      $('#iconoMail').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      $('#iconoMail').css('color', 'var(--main-color)');
    });
  });

  $(function() {
    $('#tarInstagram').hover(function() {
      $('#iconoInstagram').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      $('#iconoInstagram').css('color', 'var(--main-color)');
    });
  });

  $(function() {
    $('#tarFacebook').hover(function() {
      $('#iconoFacebook').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      $('#iconoFacebook').css('color', 'var(--main-color)');
    });
  });

// Achicar Nav al hacer scroll
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > $("#navChico").offset().top - 90) {
      $("nav").removeClass("py-2");
      $("nav").addClass("py-0");
    } else {
      $("nav").removeClass("py-0");
    };
  });