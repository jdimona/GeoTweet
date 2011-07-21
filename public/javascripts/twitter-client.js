var map = null;
var geocoder = null;

function initialize() {
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(32.00, 5.00);
	var myOptions = {
		zoom: 2,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

$(document).ready(function() {
	var socket = new io.Socket(null, {rememberTransport: false});
	var numtweets = 0;
	socket.connect();

	socket.on('message', function(message) {
		numtweets = numtweets + 1;
		var tweet = $.parseJSON(message);
		if(tweet.place) {
			if(tweet.place.full_name && tweet.place.country) {
				
				var address = tweet.place.full_name + ', ' + tweet.place.country;
				
				geocoder.geocode({'address': address}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						var marker = new google.maps.Marker({
							position: results[0].geometry.location,
							title: tweet.place.full_name + ', ' + tweet.place.country + ': ' + tweet.text
						});
						marker.setMap(map);
					}
				});
				
			}
		}
	});
});