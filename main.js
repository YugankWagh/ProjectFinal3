let latitude, longitude, destination;

$(document).ready(function () {
	alert("Please allow the device to know your location!")
	initGeolocation();
})

function initGeolocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	}
	else {
		alert("Sorry, your browser does not support geolocation services.");
	}
}

$(function () {
	$("#navigate-button").click(function () {
		window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
	})
})

function success(position) {
	longitude = position.coords.longitude;
	latitude = position.coords.latitude

	// Initializing Mapbox
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 5.6
	});

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		}).on('result', function (e) {
			destination = e.result.center
		})
	);

	var img1 = document.querySelector("#amber")

	// Create a Amber Palace, Jaipur Marker and add it to the map.
	var marker1 = new mapboxgl.Marker({
		element: img1
	})
		.setLngLat([74.06510,18.39796])
		.addTo(map);

	var img2 = document.querySelector("#gateway")
	// Create a  Gateway of India, Mumbai Marker and add it to the map.
	var marker2 = new mapboxgl.Marker({
		element: img2
	})
		.setLngLat([73.08441,17.81628])
		.addTo(map);

	var img3 = document.querySelector("#gate")
	// Create a India Gate Marker and add it to the map.
	var marker3 = new mapboxgl.Marker({
		element: img3
	})
		.setLngLat([73.48899,18.72081])
		.addTo(map);


	var img4 = document.querySelector("#lotus")

	// Create a Lotus Temple, Delhi Marker and add it to the map.
	var marker4 = new mapboxgl.Marker({
		element: img4
	})
		.setLngLat([73.66603,15.75342])
		.addTo(map);


	//Create a Victoria Memorial, Kolkata Marker and add it to the map.
	var img5 = document.querySelector("#victoria")

	var marker5 = new mapboxgl.Marker({
		element: img5
	})
		.setLngLat([73.70219,19.50017])
		.addTo(map);

		var img6 = document.querySelector("#amber1")

	var marker6 = new mapboxgl.Marker({
		element: img6
	})
		.setLngLat([74.16060,18.27236])
		.addTo(map);
		var img7 = document.querySelector("#gateway1")

	var marker7 = new mapboxgl.Marker({
		element: img7
	})
		.setLngLat([72.97728,19.19292])
		.addTo(map);
		var img8 = document.querySelector("#gate1")

	var marker8 = new mapboxgl.Marker({
		element: img8
	})
		.setLngLat([72.92272,18.74264])
		.addTo(map);
		var img9 = document.querySelector("#lotus1")

	var marker9 = new mapboxgl.Marker({
		element: img9
	})
		.setLngLat([74.17619,16.79491])
		.addTo(map);
		var img10 = document.querySelector("#victoria1")

	var marker10 = new mapboxgl.Marker({
		element: img10
	})
		.setLngLat([74.47674,19.76663])
		.addTo(map);
	
		var img11 = document.querySelector("#amber2")

	var marker6 = new mapboxgl.Marker({
		element: img11
	})
		.setLngLat([73.39946,18.82768])
		.addTo(map);
		var img12 = document.querySelector("#gateway2")

	var marker7 = new mapboxgl.Marker({
		element: img12
	})
		.setLngLat([73.53895,18.71890])
		.addTo(map);
		var img13 = document.querySelector("#gate2")

	var marker8 = new mapboxgl.Marker({
		element: img13
	})
		.setLngLat([76.38022,18.74681])
		.addTo(map);
		var img14 = document.querySelector("#lotus2")

	var marker9 = new mapboxgl.Marker({
		element: img14
	})
		.setLngLat([74.85331,19.10390])
		.addTo(map);
		var img15 = document.querySelector("#victoria2")

	var marker10 = new mapboxgl.Marker({
		element: img15
	})
		.setLngLat([73.74886,19.93973])
		.addTo(map);
		var img11 = document.querySelector("#amber3")

	var marker6 = new mapboxgl.Marker({
		element: img11
	})
		.setLngLat([75.32023,19.90140])
		.addTo(map);
		var img12 = document.querySelector("#gateway3")

	var marker7 = new mapboxgl.Marker({
		element: img12
	})
		.setLngLat([73.85536,18.51935])
		.addTo(map);
		var img13 = document.querySelector("#gate3")

	var marker8 = new mapboxgl.Marker({
		element: img13
	})
		.setLngLat([72.83456,18.92194])
		.addTo(map);
		var img14 = document.querySelector("#lotus3")

	var marker9 = new mapboxgl.Marker({
		element: img14
	})
		.setLngLat([73.63839,17.97821])
		.addTo(map);
		var img15 = document.querySelector("#victoria3")

	var marker10 = new mapboxgl.Marker({
		element: img15
	})
		.setLngLat([75.30931,19.90666])
		.addTo(map);

}