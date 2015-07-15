$(function() {

  function Scroll() {
    var top = document.getElementsByClassName('navbar-wrapper');
    var ypos = window.pageYOffset;
    var r_a = 0.2;

    if(ypos > 90) {
      $('.navbar-wrapper').css('background-color', '#fff');
      $('.navbar-wrapper a').css('color', 'black');
      $('.navbar-wrapper').css('padding', '5px');
      $('.navbar-wrapper').css('border-bottom', '1px solid #e2e2e2');
      $('.navbar-toogle').css('margin-top', '17px');
      $('.logo img').attr({
        'src': 'http://www.cloudbandsolutions.com/assets/logo-d9d35697d3699c1463ffabe49f81bba8.png'
      });
      $('.logo img').css('margin-top', '2px');
    }
    else if(ypos < 50) {
      $('.navbar-wrapper').css('background-color', 'transparent');
      $('.navbar-wrapper').css('padding', '5px');
      $('.navbar-wrapper a').css('color', '#fff');
      $('.navbar-inverse').css('padding-top', '50px');
      $('.navbar-wrapper').css('border-bottom', 'transparent');
      $('.logo img').attr({
        'src': 'http://localhost:3000/assets/logowhite.png'
      });
      $('.logo img').css('margin-top', '-5px');
      
      console.log("Making transparent...");
    }

    console.log("done scrolling...");
    console.log(ypos);
  }

  window.addEventListener("scroll", Scroll);


/*

  $('#fadein').RisingSun({delay: 8000,duration:600,startPosition:0.65});
  $(".trivia1").RisingSun({
    duration:900,startPosition:0.7,wipe:"LR"
  });
  $('#taxicarton').RisingSun({
    delay: 5000,
    duration:600,
    startPosition:0.65
    });

  $('#taxiroad').RisingSun({
    delay: 8000,
    duration:600,
    startPosition:0.65
    });

  $('#ppr').RisingSun({
    delay: 30000,
    duration:800,
    startPosition:0.65
    });

  $("#scalein").RisingSun({duration:500,scale:0.1,ease:"easeInCubic",startPosition:0.6});
  $("#popin").RisingSun({
    duration:300,scale:0.1,popanime:true,ease:"easeOutCubic"
  });
  $("#popin1").RisingSun({
    duration:300,scale:0.1,popanime:true,ease:"easeOutCubic"
  });
  $("#popin2").RisingSun({
    duration:300,scale:0.1,popanime:true,ease:"easeOutCubic"
  });

  $(".slide").RisingSun({
    duration:800,scale:0.1,rotate:360,ease:"easeInOutCubic",startPosition:0.7
  });

  $(".seventy").RisingSun({
    delay: 10000, duration:800,scale:0.1,rotate:360,ease:"easeInOutCubic",startPosition:0.7
  });

  $(".textbox").RisingSun({
    duration:400,startPosition:0.7,wipe:"LR"
  });*/

/*
   $('#c2').RisingSun({
    delay: 4000,duration:300,scale:0.1,popanime:true,ease:"easeOutCubic"
  });
*/

 /* $('#c3').RisingSun({
    delay: 5000, duration:300,scale:0.1,popanime:true,ease:"easeOutCubic"
  });*/

/*   $('#c5').RisingSun({
    delay: 8000,duration:300,scale:0.1,popanime:true,ease:"easeOutCubic"
  });

  $('#c4').RisingSun({
    delay: 8000,duration:300,scale:0.1,popanime:true,ease:"easeOutCubic"
  });
*/
 
});
