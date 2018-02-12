$(function() {
	$("#arrow").draggable({
		axis: 'x',
		containment: 'parent',
		drag: function(event, ui) {
			if (ui.position.left > 550) {
				$("#well").fadeOut();
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < 551) {
				$(this).animate({
					left: 0
				})
			}
		}
	});
});