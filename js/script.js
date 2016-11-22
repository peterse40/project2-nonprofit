
(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 200) {
			$('#scrollTop').fadeIn(200);
		} else {
			$('#scrollTop').fadeOut(200);
		}
	});

	$('#scrollTop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({ scrolTop: 0}, 300);
	})

})();