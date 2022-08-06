function loadMap(page) {
  var canvas = $("#map_canvas", page)[0],
    mapOptions = {
      center: new google.maps.LatLng(-53.1525247, -70.9101868),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      }
    };
  map = new google.maps.Map(canvas, mapOptions);
}


$(document).on("pagecontainershow", function(e, data) {
  if (data.toPage[0].id == "map") {
    loadMap(data.toPage);
  }
});