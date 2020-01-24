/*======================================
-----Preloader------
======================================*/
$(window).on("load",function(){
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut("slow");

});


/*======================================
-----Carousel------
======================================*/
$(function(){
  $("#team-members").owlCarousel({
    items:2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items:1
      },
      480: {
        items:2
      }
    }

  });
});
/*======================================
-----Progress bar------
======================================*/
$(function(){
  $(".progress-bar").each(function(){
    $(this).animate({
      width: $(this).attr("aria-valuenow") + "%"
    }, 1000);
  });
});
/*======================================
-----Responsive Tabs------
======================================*/
$(function(){
  $("#services-tabs").responsiveTabs({
    animation: "slide"
  });
});
/*======================================
-----Isotope Filter------
======================================*/
$(window).on("load", function(){
  $("#isotope-container").isotope({});
  $("#isotope-filters").on("click", "button",function(){
    var firstValue = $(this).attr("data-filter");
    // alert("Clicked"+ firstValue);

    $(".no-gutters").isotope({
      filter: firstValue
    });

    $(this).find(".active").removeClass(".active");
    $(this).addClass("active");
  });
});
/*======================================
-----Portfolio Popup------
======================================*/
$(function(){
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });
});

/*======================================
-----Testimonial------
======================================*/
$(function(){
  $("#testimonial-slider").owlCarousel({
    items:1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  });
});
/*======================================
-----Navigation------
======================================*/
$(function(){
  showHideNav();
  $(window).scroll(function(){
    showHideNav();
  });
  function showHideNav(){
    if( $(window).scrollTop() > 50 ){
      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src", "./img/logo-dark.png");
      $("#back-to-top").fadeIn();

    } else {
      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src","./img/logo.png");
      $("#back-to-top").fadeOut();
    }
  }
});
$(function(){
  $("a.smooth-scroll").click(function(event){
    event.preventDefault();
    var section_id = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section_id).offset().top - 64},
      1250);

  });
});
$(function(){
  $("#mobile-nav-open-btn").click(function(){
    $("#mobile-nav").css("height", " 100%");
  });
  $("#mobile-nav-close-btn , #mobile-nav a").click(function(){
    $("#mobile-nav").css("height", " 0%");

    });
});
