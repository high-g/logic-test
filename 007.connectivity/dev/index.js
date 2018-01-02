'use strict';

var jQuery = require('jQuery');

(function($){
  var area1 = $('#area1');
  

  $.ajax({
    url: '../server/get.php',
    type: 'get'
  }).done(function(data) {
    console.log('success');
    console.log(data);
  }).fail(function(data) {
    console.log('fail');
    console.log(data);
  });
})(jQuery);