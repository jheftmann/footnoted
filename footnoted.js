$(document).ready(function() {

	// make a link out of any <sup> with class .footnoted
	$('.footnoted').each(function(i){
		var superscript = i+1;
		$(this).html('<a>' + superscript + '</a>');
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

	// make a back to top link at the end of your footnotes
	// if you're not using a list for your footnotes, change li to the correct selector
	$('#footnotes li').last().html('<a id="top">Back to top</a>');

	// scroll back to the top
	$('#top').click(function() {
		$("html, body").animate({ scrollTop: 0 }, "fast");
	});

});