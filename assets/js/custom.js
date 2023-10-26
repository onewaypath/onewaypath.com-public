
var $ = jQuery;
var wid = $(window).width();
$(document).ready(function() {
  // team slider js start 
  if (wid > 767){    
    $('.team-slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      autoplaySpeed: 5000,
      speed: 600,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      variableWidth: true,
      prevArrow: '<div class="slick-arrow slick-prev"><img src="assets/images/arrow-left.png"></div>',
      nextArrow: '<div class="slick-arrow slick-next"><img src="assets/images/arrow-right.png"></div>',
      responsive: [{
          breakpoint: 768,
          settings: {
              arrows: false,
          }
        }]
    });
    
    $('#JamesSamuel').on('shown.bs.collapse', function() {
      // Refresh/reinitialize the slider
      $('.team-slider').slick('setPosition');
    });
  }
  $('[data-bs-toggle="collapse"]').on('click', function() {
    // Get the target collapse
    var targetCollapse = $(this).data('bs-target');
    
    // Close other collapses
    $('.collapse.show').each(function() {
        if ($(this).attr('id') !== targetCollapse.replace('#', '')) {
            $(this).collapse('hide');
        }
    });
  });
  
});

let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});