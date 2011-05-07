$(document).ready(function() {
	var socket = new io.Socket(null, {rememberTransport: false});
	socket.connect();
	
	socket.on('connect', function() {
		$('body').prepend('hello');
	});
	
	socket.on('message', function(message) {
		var tweet = $.parseJSON(message);
		$('#tweets').prepend(tweet.text + '<br />');
	});
});