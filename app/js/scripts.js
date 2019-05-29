$(document).ready(function(){

    $('.hamburger__btn').on('click', function(evt) {
        evt.preventDefault();
        $(this).toggleClass('hamburger__btn_active');
        $('#mobileMenu').toggleClass('header__lists-wrapper--close');
      });
  
      $('.js-tab-trigger').click(function() {
      var id = $(this).attr('data-tab');
      var content = $('.js-tab-content[data-tab="'+ id +'"]');
  
     $('.js-tab-trigger.active').removeClass('active');
     $(this).addClass('active');
  
     $('.js-tab-content.active').removeClass('active');
     content.addClass('active');
  });
  
  })