(function($) {
	"use strict"; // Start of use strict

	$(document).ready(function() {

		var scrollReveal = ScrollReveal();
		scrollReveal.reveal("[data-scroll-reveal]",
		 {
		 	// delay: 200,
			duration: 600,
			scale: .3,
			distance: "0px"
		 });

	});
})(jQuery); // End of use strict