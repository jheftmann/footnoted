/* footnoted.js */
/* v1.1 */
/* by Jacob Heftmann - www.jacobheftmann.com */

$(document).ready(function() {

	// make a link out of any <sup> with class .footnoted
	$('.footnoted').each(function(i){
		var superscript = i+1;
		$(this).html('<a>' + superscript + '</a>');
	});

	// give <sup class="footnoted"> an id to scroll back to
	$('.footnoted').each(function(i){
		this.id = "reading-position-"+(i+1);
	});

	// tell the superscripts where to go
	$('.footnoted a').each(function(i){
		this.href = "#footnote-"+(i+1);
	});

	// set a target for the superscripts to scroll to
	// if you're not using a list for your footnotes, change li to the correct selector
	$('#footnotes li').each(function(i){
		this.id = "footnote-"+(i+1);
	});

	// add return to reading position link at the end of the footnote
	$('#footnotes li').append('<span class="return-to-reading footnoted" style="display:none;"><a> &uarr; Back to reading position</a></span>');

	// give the return to position url an href of the target ID
	$('#footnotes span a').each(function(i){
		this.href = "#reading-position-"+(i+1);
	});

	// make a back to top link at the end of your footnotes
	// if you're not using a list for your footnotes, change li to the correct selector
	$('#footnotes li').last().after('<li id="back-to-top"><a>&uarr;&nbsp;&nbsp;Back to top</a></li>');

	// scroll back to the top
	$('#back-to-top').click(function() {
		$("html, body").animate({ scrollTop: 0 }, "fast");
	});

	// smooth scroll between reading position and footnotes
	$('.footnoted a[href^="#"]').on('click',function (e) {
			e.preventDefault();

			var target = this.hash,
			$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 20
			}, 500, 'swing', function () {
				window.location.hash = target;
			});

			// remove class and link to previous reading position from other <li> if you scrolled to a footnote previously
			$('.current-footnote span').remove();
			$('#footnotes li').removeClass('current-footnote');

			// add return to reading position link and give the current footnote a class for additional styles
			$(target).addClass('current-footnote');
			$('.current-footnote span').css('display', 'inline');
	});

});