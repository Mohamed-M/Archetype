function initMap() {

  // Map options
  var options = {
    zoom: 3,
    center: {
      lat: 45.372291,
      lng: -75.651535
    }
  }

  // New map
  var myMap = new google.maps.Map(document.getElementById('map'), options);

  // Array of markers
  var markers = [
    {
      coords: { lat: 45.4215, lng: -75.6972 },
      iconImage: 'http://www.iconarchive.com/download/i5775/custom-icon-design/iphone-map-flag/Canada.ico',
      content: 'Ottawa, Ontario'
    },
    {
      coords: { lat: 34.0522, lng: -118.2437 },
      iconImage: 'http://www.iconarchive.com/download/i5940/custom-icon-design/iphone-map-flag/United-States.ico',
      content: 'Los Angeles, California'
    },
    {
      coords: { lat: 9.5624, lng: 44.0770 },
      iconImage: 'http://www.iconarchive.com/download/i5871/custom-icon-design/iphone-map-flag/Somalia.ico',
      content: 'Hargeisa, Somalia'
    }

  ];

  // Loop through the markers array
  for (let i = 0; i < markers.length; i++) {
    addMarker(markers[i]);

  }

  // Add marker function
  function addMarker(marker) {
    var myMarker = new google.maps.Marker({
      position: marker.coords,
      map: myMap,
    });

    // Check for custom icon
    if (marker.iconImage) {
      myMarker.setIcon(marker.iconImage);
    }

    // Check content
    if (marker.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: marker.content
      });

      myMarker.addListener('click', function () {
        infoWindow.open(myMap, myMarker);
      });
    }
  }

}