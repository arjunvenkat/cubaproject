  window.onload = loadMap;

  function loadMap() {

     var mapOptions = {
        center: new google.maps.LatLng(21.5, -79.4),
        zoom: 6,
        // disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map-home"),
          mapOptions);

      var locations = gon.interview_markers;
      var marker, i;
      var infowindow = new google.maps.InfoWindow();

      var last_loc = locations.length - 1
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[last_loc][1], locations[last_loc][2]),
          map: map
        });
        marker.setMap(map);

        google.maps.event.addListener(marker, 'click', (function(marker, last_loc) {

          var infowindowContent = "<div class='popup'>" +
                                    "<div>" +
                                      "<h4>" + locations[last_loc][0] + "</h4>" +
                                      "<p>" + locations[last_loc][3] + "</p>" +
                                      "<h5>Date of Entry:</h5>" +
                                      "<p>" + locations[last_loc][4] + "</p>" +
                                    "</div>" +
                                    "<div>" +
                                      "<a href=/oral-histories#" +
                                      locations[last_loc][5] +
                                      "><img src=" +
                                      locations[last_loc][6] +
                                      "></a>" +
                                      "<p><a href=/oral-histories#" +
                                        locations[last_loc][5] +
                                        ">More info</a><p>" +
                                    "</div>" +
                                  "</div>"

          return function() {
            infowindow.setContent(infowindowContent);
            infowindow.open(map, marker);
          }
        })(marker, last_loc));

};
