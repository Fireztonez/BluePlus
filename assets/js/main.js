/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * Startup animation.
 */

/* -----------------------------------------------------
  Material Design Checkbox
  CodePen URL: https://codepen.io/rkchauhan/pen/ONJEYL
  By: Ravikumar Chauhan
  
  Find me on:-
  * Twitter: https://twitter.com/rkchauhan01
  * Facebook: https://www.facebook.com/ravi032chauhan
  * GitHub: https://github.com/rkchauhan
  * CodePen: https://codepen.io/rkchauhan

  Thanks to:-
  * Google Material design - https://www.google.com/design/spec/material-design/introduction.html
  * Google Material Color - https://www.google.com/design/spec/style/color.html
  * Google Material Icons - https://design.google.com/icons/
  * Roboto Font - https://google.com/fonts/specimen/Roboto
  * jQuery - https://jquery.com
-------------------------------------------------------- */

jQuery(document).ready(function($){
  $('.checkbox-ripple').rkmd_checkboxRipple();
  change_checkbox_color();
});

(function($) {

  $.fn.rkmd_checkboxRipple = function() {
    var self, checkbox, ripple, size, rippleX, rippleY, eWidth, eHeight;
    self = this;
    checkbox = self.find('.input-checkbox');

    checkbox.on('mousedown', function(e) {
      if(e.button === 2) {
        return false;
      }

      if($(this).find('.ripple').length === 0) {
        $(this).append('<span class="ripple"></span>');
      }
      ripple = $(this).find('.ripple');

      eWidth = $(this).outerWidth();
      eHeight = $(this).outerHeight();
      size = Math.max(eWidth, eHeight);
      ripple.css({'width': size, 'height': size});
      ripple.addClass('animated');

      $(this).on('mouseup', function() {
        setTimeout(function () {
          ripple.removeClass('animated');
        }, 200);
      });

    });
  };

}(jQuery));

function change_checkbox_color() {
  $('.color-box .show-box').on('click', function() {
    $(".color-box").toggleClass("open");
  });

  $('.colors-list a').on('click', function() {
    var curr_color = $('main').data('checkbox-color');
    var color = $(this).data('checkbox-color');
    var new_colot = 'checkbox-' + color;

    $('.rkmd-checkbox .input-checkbox').each(function(i, v) {
      var findColor = $(this).hasClass(curr_color);

      if(findColor) {
        $(this).removeClass(curr_color);
        $(this).addClass(new_colot);
      }

      $('main').data('checkbox-color', new_colot);

    });
  });
}

(function (window, $) {
  
  $(function() {
    
    
    $('.ripple').on('click', function (event) {
      event.preventDefault();
      
      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;
      

      
      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");
      
      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        }) 
        .appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 1190);
    });
    
  });
  
})(window, jQuery);