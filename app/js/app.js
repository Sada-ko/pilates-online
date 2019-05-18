// Типограф
(function() {
	var typograf = new Typograf({ locale: ['ru'] })
	​
// Выбираем, что будем типографить
var nodes = document.querySelectorAll('.typographed')
​
for (var i = 0; i < nodes.length; i++) {
	var node = nodes[i]
// Типографим каждый найденный заголовок
node.innerHTML = typograf.execute(node.innerHTML)
}
})()


// Fill-Box
$(document).ready(function () {
	(function ($, window, document) {
		$.fn.fillBox = function () {
			this.each(function () {
				var el = $(this),
				src = el.attr('src'),
				parent = el.parent();
				parent.addClass('filled');
				parent.css({
					'background-image': 'url(' + src + ')',
					'background-size': 'cover',
					'background-position': 'center'
					//'transition' : 'all 0.1s ease-in-out 0s'
				});
				el.hide();
			});
		};
	}(jQuery, window, document));
	$('.fill-box').fillBox();
});


// ScrollMagic
	// init controller
	var controller = new ScrollMagic.Controller();


	$(function () { 
			// wait for document ready
			// build scene
			var scene = new ScrollMagic.Scene({
				triggerElement: "#trigger1", 
				triggerHook: 'onLeave',
				duration: 1000
			})
			.setPin("#pin1")
			.addIndicators({name: "1 (duration: 1000)"}) 
						// add indicators (requires plugin)
						.addTo(controller);
					});