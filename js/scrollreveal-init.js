(function($) {
	"use strict"; // Start of use strict

	$(document).ready(function() {

		var scrollReveal = ScrollReveal();
		scrollReveal.reveal("[data-scroll-reveal]",
		 {
		 	// delay: 200,
			duration: 600,
			scale: .3,
			distance: "0px",
			 beforeReveal: function (domEl) {
				$(domEl).removeClass("data-scroll-reveal-clean");
			 }
		 });

	});
})(jQuery); // End of use strict