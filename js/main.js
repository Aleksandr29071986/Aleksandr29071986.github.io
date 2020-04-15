// owelCarousel

$(document).ready(function(){
    $("#carousel1, #carousel2").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: [
              
            '<span class="arrow-owl arrow-left arrow-left-sidebar"><i class="fa fa-long-arrow-left"></i></span>',

            '<span class="arrow-owl arrow-right arrow-right-sidebar"><i class="fa fa-long-arrow-right"></i></span>',
          ],
       
       
    });
  });

  
$(document).ready(function(){
  $('.fade').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });
});


		

  (function() {
  
    var Menu = (function() {
      var burger = document.querySelector('.burger');
      var menu = document.querySelector('.menu');
      var menuList = document.querySelector('.menu__list');
    
      var menuItems = document.querySelectorAll('.menu__item');
      
      var active = false;
      
      var toggleMenu = function() {
        if (!active) {
          menu.classList.add('menu--active');
          menuList.classList.add('menu__list--active');
        
          burger.classList.add('burger--close');
          for (var i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].classList.add('menu__item--active');
          }
          
          active = true;
        } else {
          menu.classList.remove('menu--active');
          menuList.classList.remove('menu__list--active');
        
          burger.classList.remove('burger--close');
          for (var i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].classList.remove('menu__item--active');
          }
          
          active = false;
        }
      };
      
      var bindActions = function() {
        burger.addEventListener('click', toggleMenu, false);
      };
      
      var init = function() {
        bindActions();
      };
      
      return {
        init: init
      };
      
    }());
    
    Menu.init();
    
  }());
  // audio
  /***
JS by https://codepen.io/GRSimon/
***/
var getaudio = $('#player')[0],
mouseovertimer,
audiostatus = 'off',
playerControls = ".player-controls";

$(document).on('mouseenter', playerControls, function() {

if (!mouseovertimer) {
 
 mouseovertimer = window.setTimeout(function() {
    
    mouseovertimer = null;
    
    if (!$(playerControls).hasClass("playing")) {
       
       getaudio.load();
       getaudio.play();            
       $(playerControls).addClass('playing');
       return false;
       
    }
    
 }, 2500);
 
}

});

$(document).on('mouseleave', playerControls, function() {

if (mouseovertimer) {
 
 window.clearTimeout(mouseovertimer);
 mouseovertimer = null;
 
}

});

$(document).on('click touch', playerControls, function(e) {

e.preventDefault();

if (!$(playerControls).hasClass("playing")) {

 if (audiostatus == 'off') {
    
    $(playerControls).addClass('playing');
    getaudio.load();
    getaudio.play();
    window.clearTimeout(mouseovertimer);
    audiostatus = 'on';
    return false;
    
 } else if (audiostatus == 'on') {
    
    $(playerControls).addClass('playing');
    getaudio.play();
    
 }
 
} else if ($(playerControls).hasClass("playing")) {
 
 getaudio.pause();
 $(playerControls).removeClass('playing');
 window.clearTimeout(mouseovertimer);
 audiostatus = 'on';
 
}

return false;

});

$('#player').on('ended', function() {

$(playerControls).removeClass('playing');
audiostatus = 'off';

});
// modal
$(".js-open-modal").click(function(){
  $(".modal").addClass("visible");
});

$(".js-close-modal").click(function(){
  $(".modal").removeClass("visible");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".modal,.js-open-modal").length) {
    $("body").find(".modal").removeClass("visible");
  }
});
