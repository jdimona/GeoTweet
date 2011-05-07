$(document).ready(function() {
	var socket = new io.Socket(null, {rememberTransport: false});
	var numtweets = 0;
	socket.connect();
	
	socket.on('connect', function() {
		$('body').prepend('hello');
	});
	
	socket.on('message', function(message) {
		numtweets = numtweets + 1;
		$('#numtweets').html(numtweets);
		var tweet = $.parseJSON(message);
		$('#tweets').prepend(tweet.place.full_name + ', ' 
																	+ tweet.place.country + '<br />');
	});
});