(function($) {
	"use strict"; // Start of use strict

	$(document).ready(function() {

		var scrollReveal = ScrollReveal();
		scrollReveal.reveal("[data-scroll-reveal]",
		 {
		 	// delay: 200,
			duration: 600,
			distance: "5rem"
		 });

	});
})(jQuery); // End of use strict