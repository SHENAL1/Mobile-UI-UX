 // Initialize and add the map
 function initMap() {
    // The location of Uluru
    var myLatLng = { lat: 6.93620493667066, lng: 79.8440702422892 };
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: myLatLng,
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Hatch Works"
    });
  }
  