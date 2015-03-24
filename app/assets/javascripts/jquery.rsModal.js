(function ( $ ) {

	$.fn.rsModal = function(prop) {

		// Here we have our default params
		var options = $.extend({
			background 	: '#FFF',
			height 		: '323px',
			width 		: "500px",
			top 		: "50%",
			left 		: "50%",
			marginL 	: '-250px',
			marginT 	: '-161px',
			title 		: 'rsModal'
		}, prop);

		// For now we will just assume that the content to be used is in the selector class
		content = $(this).html();

		addFade();
		addPopup();
		addStyle();

		this.closePopup = function() {
			closeMe();
		}

		function closeMe() {
			$('#fadeBg').remove();
			$('#modal').remove();
		}

		function addFade() {
			$('<div id="fadeBg"></div>').appendTo('body');
		}

		function addPopup() {
			$('<div id="modal">' +
					'<div class="modaltitle">' +
						options.title +
					'</div>' +
					'<div class="modalclose">X</div>' +
					'<div class="modalcontent">' +
						content +
					'</div>' +
					'</div>'
					).appendTo('body');

			// Event for when the user clicks the close button to remove the modal
			$('body').on('click', '.modalclose', function(){
				closeMe();
			});

			$('body').on('click', '#fadeBg', function(){
				closeMe();
			});
		}

		function addStyle() {
			$('#fadeBg').css({
				'position'		: 'fixed',
				'left'			: 0,
				'top'			: 0,
				'background'	: '#000',
				'opacity' 		: '0.70',
				'filter'		: 'alpha(opacity=70)',
				'width' 		: '100%',
				'height'		: '100%',
				'z-index' 		: 9997
			});

			$('#modal').css({
				'background' 	: options.background,
				'height' 		: 'auto',
				'width'			: options.width - 20,
				'top' 			: options.top,
				'left'			: options.left,
				'margin-top'	: options.marginT,
				'margin-left'	: options.marginL,
				'position' 		: 'fixed',
				'z-index'		: 9998,
				'padding' 		: '20px',
				'color' 		: '#555'
			});

			$('.modalcontent').css({
				'clear' 		: 'both',
				'margin-top'	: '10px'
			});

			$('.modalclose').css({
				'color'			: '#555',
				'cursor'		: 'pointer',
				'text-align'	: 'right',
				'float'		: 'right'
			});
			$('.modaltitle').css({
				'color'			: '#555',
				'float'			: 'left',
				'height' 		: '40px'
			});
		}

		return this;
	};

}( jQuery ));