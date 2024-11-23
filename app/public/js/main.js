// Instantiate map object and attach to #map
const map = L.map('map');

// Configure tile layer and attribution
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const gpxFiles = [
    '/file/s2d1.gpx',
    '/file/s2d2.gpx',
];

const gpxObjects = [];

gpxFiles.forEach((gpxUrl, index) => {
    // Set options
    const options = {
        async: true,
        polyline_options: { color: 'red' },
    };

    // Add first GPX to map
    const gpx = new L.GPX(gpxUrl, options).on('loaded', (e) => {
        map.fitBounds(e.target.getBounds());
    }).on('loaded', (e) => {
        console.log(`Loaded gpx file: ${gpxUrl}`, e);
    }).on('error', (e) => {
        console.log(`Error loading GPX file: ${gpxUrl}`, e);
    }).addTo(map);

    gpxObjects.push(gpx);
});