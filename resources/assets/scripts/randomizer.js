import $ from 'jquery';

$(document).ready(() => {

  function display_images(ar_map) {
      var visible = $('.hex-wrap:visible');
      visible.each( (i, obj) => {
        var img_class = 'i' + ar_map[i];
        $(obj).children('.hexagon')
            .removeClass( (index, className) => {
              return (className.match(/\bi[0-9]{1,2}\b/g) || []).join(' ');
            })
            .addClass(img_class);
      });
  }

  function randomize_images() {
	var ar_map = []
	for(var i=0; i < 13; i++) {
      ar_map.push(Math.floor((Math.random()*13)+1));
    }
	return ar_map;
  }

  function shuffle_images() {
    if (((viewportWidth > 900) && (viewportWidthChanged < 1000)) || ((viewportWidth < 1000) && (viewportWidthChanged > 900))) {
        viewportWidth = viewportWidthChanged;
        ar_map = randomize_images();
        display_images(ar_map);
    }
  }

  var ar_map = randomize_images();
  display_images(ar_map);
  var viewportWidth = $(window).width();


  //listen for the end of a resize
  var rtime;
  var timeout = false;
  var delta = 500;
  var viewportWidthChanged = $(window).width();
  $(window).resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
  });

  function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
			viewportWidthChanged = $(window).width();
        shuffle_images();
    }
   }

});
