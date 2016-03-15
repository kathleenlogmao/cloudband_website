$(function() {

  function Scroll() {
    var top = document.getElementsByClassName('navbar-wrapper');
    var ypos = window.pageYOffset;
    var r_a = 0.2;
    var mq = window.matchMedia('all and (max-width: 700px)');

    if(ypos > 90) {
      $('.drawer-hamburger').css('margin', '10px');
      $('.drawer-hamburger').css('height', '0');
      $('.sr-only').css('color', 'black');
      $('.navbar-wrapper').css('background-color', '#fff');
      $('.navbar-wrapper a').css('color', 'black');
      $('.navbar-wrapper').css('padding', '5px');
      $('.navbar-wrapper').css('border-bottom', '1px solid #e2e2e2');
      $('.navbar-toogle').css('margin-top', '17px');
      $('.logo img').attr({
        'src': '/assets/logo.png'
      });
      $('.logo img').css('margin-top', '2px');

      if (mq.matches) {
        $('.navbar-wrapper').css('background-color', 'transparent');
        $('.navbar-wrapper').css('border-bottom', '1px solid transparent');
      } else {
        
      }
    }
    else if(ypos < 50) {
      $('.navbar-wrapper').css('background-color', 'transparent');
      $('.navbar-wrapper').css('padding', '5px');
      $('.navbar-wrapper a').css('color', '#fff');
      $('.navbar-inverse').css('padding-top', '50px');
      $('.navbar-wrapper').css('border-bottom', 'transparent');
      $('.logo img').attr({
        'src':  "/assets/logowhite.png"
      });
      $('.logo img').css('margin-top', '-5px');
      
      console.log("Making transparent...");
    }

    console.log("done scrolling...");
    console.log(ypos);
  }

  window.addEventListener("scroll", Scroll);
});
