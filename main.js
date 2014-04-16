var actions = {
	start: function() {
		$('body').addClass('ongoing');
	},
	flash: function() {
		$('header').css('visibility', 'visible');
		setTimeout(function() { $('header').css('visibility', 'hidden') }, 250);
	},
	isVisible: function(element) {
		var parent = $('#stories article'),
			parentPosition = parent.offset(),
			parentHeight = parent.height(),
			elementPosition = element.position(),
			elementHeight = element.height();
		if ( ((elementPosition.top + elementHeight) >= parentPosition.top) && (elementPosition.top <= (parentPosition.top + parentHeight)) ) {
			return true;	
		} else {
			return false;
		}
	},
	nameSwap: function() {
		var story = $('#story-1'),
			names = $('.name'),
			twoSwapText = $('#nameTwo').data('swaptext');
			sentenceZeroSwapText = $('#sentenceZero').data('swaptext');
			sentenceOneSwapText = $('#sentenceOne').data('swaptext');
			sentenceTwoSwapText = $('#sentenceTwo').data('swaptext');
			sentenceThreeSwapText = $('#sentenceThree').data('swaptext');

		if ( actions.isVisible($('#nameOne'))) {
			story.addClass('name-one-seen');
			$('#nameZero').text( $('#nameOne').text() );
		};

		if ( story.hasClass('name-one-seen') && actions.isVisible($('#nameZero')) ) {
			story.addClass('name-zero-seen');
			$('#nameTwo').text( twoSwapText );
		}

		if ( story.hasClass('name-one-seen') && story.hasClass('name-zero-seen') && actions.isVisible($('#nameTwo')) ) {
			names.text( $('#nameTwo').text() );
		}

		if ( actions.isVisible($('#sentenceZero')) ) {
			story.addClass('sentence-zero-seen');
		}
		if ( story.hasClass('sentence-zero-seen') && !(actions.isVisible($('#sentenceZero'))) ) {
			$('#sentenceZero').text( sentenceZeroSwapText );
		}

		if ( actions.isVisible($('#sentenceOne')) ) {
			story.addClass('sentence-one-seen');
		}
		if ( story.hasClass('sentence-one-seen') && !(actions.isVisible($('#sentenceOne'))) ) {
			$('#sentenceOne').text( sentenceOneSwapText );
		}

		if ( actions.isVisible($('#sentenceTwo')) ) {
			story.addClass('sentence-two-seen');
		}
		if ( story.hasClass('sentence-two-seen') && !(actions.isVisible($('#sentenceTwo'))) ) {
			$('#sentenceTwo').text( sentenceTwoSwapText );
		}

		if ( actions.isVisible($('#sentenceThree')) ) {
			story.addClass('sentence-three-seen');
		}
		if ( story.hasClass('sentence-three-seen') && !(actions.isVisible($('#sentenceThree'))) ) {
			$('#sentenceThree').text( sentenceThreeSwapText );
		}
	}
}

$(document).ready(function() {

	// begin
	$('button').bind('click', function(e) { 
		
		e.preventDefault();
		actions.start();

		// flash
		var randomNumber = Math.round(Math.random() * (8000 - 3000)) + 3000;
		setInterval(actions.flash, randomNumber);

		// check if visible
		actions.nameSwap();
		$('#stories article').bind('scroll', function() { 
			actions.nameSwap();
		});

	});
	
});