let latitude=22.7868542, longitude=88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 10
});   

var img = document.querySelector("#cool")

var hh = new mapboxgl.Marker({
    element:img
}).setLngLat([74.222,67.3321])
.addTo(map)

map.addControl(
	new MapboxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
);