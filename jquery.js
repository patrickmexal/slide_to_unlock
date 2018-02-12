$(function() {
	$("#arrow").draggable({
		axis: 'x',
		containment: 'parent',
		drag: function(event, ui) {
			if (ui.position.left > 1060) {
				$("#well").fadeOut();
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < 1059) {
				$(this).animate({
					left: 0
				})
			}
		}
	});
});