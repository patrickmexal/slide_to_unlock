$(function() {
	$("#arrow").draggable({
		axis: 'x',
		containment: 'parent',
		drag: function(event, ui) {
			if (ui.position.left > 750) {
				$("#well").fadeOut();
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < 751) {
				$(this).animate({
					left: 0
				})
			}
		}
	});
});