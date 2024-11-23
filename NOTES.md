# Goal
Build a proof of concept to display GPX routes on a map. Needs to support displaying multiple GPX files on a single map.

## Front-end
- HTML/CSS, JavaScript
- Leaflet.js - Lightweight and open source. Extensible. Map tile support (openstreetmap, maxbox, etc)
- Leaflet-GPX - Eliminates need for backend processing of gpx files. Easily add interactivity. Handles multiple GPX files client-side
- OpenStreetMap - Free and open-source maps. Requires attribution.
- OpenTrailMap - An extension of OSM focused specifically on trails and paths. Provides detailed trail data. Use Hiking layers.

## Back-end
- PHP - API endpoint. Alternatively use Go
- MySQL - Metadata and information about segments, dates, file paths, etc. Alternatively use SQLite

## Future Consideration
- Leaflet Control Layers - For toggling different GPX segments
- Leaflet Plugins - Explore various Plugins
- Consider contributing to OSM to improve data. Benefits my project as well as broader community

## Expected Process
1. Set up development environment
2. Create basic HTML/CSS layout
3. Integrate Leaflet.js
4. Add OpenStreetMap tiles 
5. Extend with OpenTrailMap
6. Integrate Leaflet-GPX Plugin
7. Load initial GPX files
8. Set up PHP (or Go) endpoints
9. Configure database
10. Organize GPX data
11. Enable multiple GPX layers
12. Add control layers to toggle (or highlight) different GPX segments on and off
13. Style the map
14. Verify map functionality
15. Check responsiveness
16. Plan additional features

## Notes
- This project is insane!! https://github.com/RalucaNicola/hike-visualization 
- Maybe try to emulate some of what they're doing and make this into a 3D map visualizer eventually
