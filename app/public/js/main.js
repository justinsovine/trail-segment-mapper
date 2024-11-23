/* Note: The setView call also returns the map object — most Leaflet methods 
 * act like this when they don’t return an explicit value, which allows convenient 
 * jQuery-like method chaining. 
 */
// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// Instantiate map object and attach to #map
const map = L.map('map');

// Configure tile layer and attribution
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// URL to GPX file or GPX itself as an XML string
const url = '/file/s2d1.gpx';
const options = {
    async: true,
    polyline_options: { color: 'red' },
};

// Add GPX to map
const gpx = new L.GPX(url, options).on('loaded', (e) => {
    map.fitBounds(e.target.getBounds());
}).addTo(map);

// URL to GPX file or GPX itself as an XML string
const url2 = '/file/s2d2.gpx';
const options2 = {
    async: true,
    polyline_options: { color: 'red' },
};

// Add GPX to map
const gpx2 = new L.GPX(url2, options2).on('loaded', (e) => {
    map.fitBounds(e.target.getBounds());
}).addTo(map);

setInterval(function(){
    map.setZoom(10);
}, 0);