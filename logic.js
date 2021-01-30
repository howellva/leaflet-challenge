

// Creating map object
var myMap = L.map("map-id", {
    center: [37.7749, -122.4194],
    zoom: 4
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // Use this link to get the geojson data.
//   var link = "static/data/nyc.geojson";
  
//   // Grabbing our GeoJSON data..
//   d3.json(link, function(data) {
//     // Creating a GeoJSON layer with the retrieved data
//     L.geoJson(data).addTo(myMap);
//   });
  

//function createMap(bikeStations) {

//     // Create the tile layer that will be the background of our map
//     var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//       attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//       maxZoom: 18,
//       id: "light-v10",
//       accessToken: API_KEY
//     });
  
//     // Create a baseMaps object to hold the lightmap layer
//     var baseMaps = {
//       "Light Map": lightmap
//     };
  
// //     // Create an overlayMaps object to hold the bikeStations layer
// //     var overlayMaps = {
// //       "Bike Stations": bikeStations
// //     };
  
// //     // Create the map object with options
//     var map = L.map("mapid", {
//       center: [40.73, -74.0059],
//       zoom: 12,
//       layers: [lightmap]
//     });
  
// //     // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
//      L.control.layers(baseMaps, {
//        collapsed: false
//      }).addTo(map);
//    //}

  
  
// //   function createMarkers(response) {
  
// //     // Pull the "stations" property off of response.data
// //     var stations = response.data.stations;
  
// //     // Initialize an array to hold bike markers
// //     var bikeMarkers = [];
  
// //     // Loop through the stations array
// //     for (var index = 0; index < stations.length; index++) {
// //       var station = stations[index];
  
// //       // For each station, create a marker and bind a popup with the station's name
// //       var bikeMarker = L.marker([station.lat, station.lon])
// //         .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>");
  
// //       // Add the marker to the bikeMarkers array
// //       bikeMarkers.push(bikeMarker);
// //     }
  
// //     // Create a layer group made from the bike markers array, pass it into the createMap function
// //     createMap(L.layerGroup(bikeMarkers));
// //   }
  
  
// //   // Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
// //   d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json", createMarkers);
  