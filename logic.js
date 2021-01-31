

// Creating map object
var myMap = L.map("map-id", {
    center: [38, -110],
    zoom: 4.5
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
// Load in geojson data
  var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
// Grab data with d3
  d3.json(link, function(data) {
    
  
   // Create a new layer
    L.geoJson(data, {
  
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng);},
  
      style: styles,
  
      onEachFeature: function(feature, layer) {
        layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
  
      }
    }).addTo(myMap);
  

    function styles(feature) {
      return {
        opacity: 1,  // Border color
        fillOpacity: 0.8,
        weight: 0.5,
        fillColor: color(feature.properties.mag), //depends on magnitude
        radius: circlesize(feature.properties.mag), //depends on magnitude
        color: "#000000"
        
      };
    }

  //seperate magitude based on colors 
    function color(mag) {
      switch (true) {
        case mag > 5:
          return "#ea2c2c";
        case mag > 4:
          return "#eaa92c";
        case mag > 3:
          return "#d5ea2c";
        case mag > 2:
          return "#92ea2c";
        case mag > 1:
          return "#2ceabf";
        default:
          return "#2c99ea";
      }
    }
  
    //function for magnitude 
    function circlesize(mag) {
      if (mag === 0) {
        return 1;
      }
      return mag * 4;
    }










//all the legend stuff
    var legend = L.control({position: "bottomright" });
  
    legend.onAdd = function() {
      var div = L.DomUtil.create("div", "info legend");
      var quakelevel = [0, 1, 2, 3, 4, 5]; //scale
      var colors = ["#2c99ea", "#2ceabf", "#92ea2c", "#d5ea2c","#eaa92c", "#ea2c2c"]; //same as for loop
    // loop thru colors+quakelevel
      for (var i = 0; i<quakelevel.length; i++) {
        div.innerHTML +=
        "<i style='background: " + colors[i] + "'></i> " +
        quakelevel[i] + (quakelevel[i + 1] ? "&ndash;" + quakelevel[i + 1] + "<br>" : "+");
      }
      return div;
  
    };
  
    legend.addTo(myMap) //put legend on map
    
  });








