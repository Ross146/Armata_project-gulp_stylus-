


$(function() {
	$('header .toggle-mnu').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('on');
		$('header .main-mnu').slideToggle();
	});

	$('footer .toggle-mnu').click(function (e) {
		e.preventDefault();
		$("html, body").animate({scrollTop: $(document).height()}, "slow");
		$(this).toggleClass('on');
		$('footer .main-mnu').slideToggle();
	});

	$(".cards .card").equalHeights();

	$(".section_4").waypoint(function () {
		$(".section_4 .card").each( function (i) {
			var that = $(this)
			setTimeout(function() {
				that.removeClass("card-off")
			}, 150*i)
		})
	});


	$(".section_5").waypoint(function () {
		$(".section_5 .tc-item").each(function (i) {
			executed = true;
			setTimeout(function () {
				var myAnimation = new DrawFillSVG({
					elementId: "tc-svg" + i
				});
			}, 800 * i)
		});
		this.destroy()
	});

	$(".slider").owlCarousel({
		items: 1,
		nav: true,
		navText: '',
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		fluidSpeed:600 ,
		autoplaySpeed:600 ,
		navSpeed:600 ,
		dotsSpeed:600 ,
		dragEndSpeed:600
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

