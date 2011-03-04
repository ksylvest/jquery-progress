/*!
 * jQuery Progress
 *
 * Copyright 2010 - 2011 Kevin Sylvestre
 */

(function ($) {

  $.fn.progress = function(options) {

    var settings = {
      inner    : '.inner',
      outer    : '.outer',
      percent  : 0.0,
      duration : 400,
      easing   : 'swing',
    };
    
    if (options) ($.extend(settings, options));
    
    $inner = $(this).find(settings.inner);
    $outer = $(this).find(settings.outer);
     
    $inner.stop().animate({ width: (settings.percent * 100) + "%" }, settings.duration, settings.easing);
  };
  
}) (jQuery);