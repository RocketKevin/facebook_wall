$(document).ready(function()
{
	$('#message').focus();

	$("button").click(function() {
		var message = $("#message").val();
		$("#wall").prepend("<div class='wall-post'><img src='http://www.kolkatapolice.gov.in/Icons/blank-female.JPG'> </img>"+ message +"<button class='like-button'>Like</button></div>");
		$("img").width(150);
		$("img").height(100);
	});
});


