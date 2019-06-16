// // Типограф
// (function() {
// 	var typograf = new Typograf({ locale: ['ru'] })
// 	​
// // Выбираем, что будем типографить
// var nodes = document.querySelectorAll('.typographed')
// ​
// for (var i = 0; i < nodes.length; i++) {
// 	var node = nodes[i]
// // Типографим каждый найденный заголовок
// node.innerHTML = typograf.execute(node.innerHTML)
// }
// })()


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


	// Сохраняем себе модалку, чтобы два раза не искать
            var $exampleModal = $('.modal');

            // Как только модалка начнёт открываться
            $exampleModal.on('show.bs.modal', function () {
               // Здесь мы не можем наебать Бутстрап, т.к. он ещё не начал слушать нужное событие,
               // но мы хитрожопые и просто добавим это в очередь событий JavaScript
               setTimeout(function () {
                   // Найдём элемент-задник и наебём Бутстрап, напиздев ему, что анимация закончилась
                   $('.modal-backdrop').trigger('transitionend');
               });
            });

            // Как только модалка начнёт закрываться
            $exampleModal.on('hide.bs.modal', function () {
                // Здесь не сможем так хитро наебать, но мы просто сделаем то же самое,
                // что делает Бутстрап, когда заканчивается анимация модалки
                // и всё равно его наебём!
                $('.modal-backdrop').removeClass('show');
            });
});


// ScrollMagic
	// init controller
	// var controller = new ScrollMagic.Controller();


	// $(function () { 
	// 		// wait for document ready
	// 		// build scene
	// 		var scene = new ScrollMagic.Scene({
	// 			triggerElement: "#trigger1", 
	// 			triggerHook: 'onLeave',
	// 			duration: 5700
	// 		})
	// 		.setPin("#pin1")
	// 		// .addIndicators({name: "1 (duration: 7000)"}) 
	// 					// add indicators (requires plugin)
	// 					.addTo(controller);
	// 				});