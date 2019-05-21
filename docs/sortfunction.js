


$(this).closest(".zoom-animation")
	.addClass("zoom zoom-index")
	.find(".close-icon")
		.addClass("is-show")
	.end()
	.find(".popup-box")
		.show()
	.end()
	.find(".thumb-tweet")
		.addClass("half-width")
	.end()
	.find(".img-placeholder")
		.removeClass("is-show")
		.addClass("is-hide");





var zoomAnimation = $(this).closest(".zoom-animation");

zoomAnimation.addClass("zoom zoom-index")
zoomAnimation.find(".close-icon").addClass("is-show")
zoomAnimation.find(".popup-box").show()
zoomAnimation.find(".thumb-tweet").addClass("half-width")
zoomAnimation.find(".img-placeholder").removeClass("is-show").addClass("is-hide");