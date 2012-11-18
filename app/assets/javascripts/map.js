  window.onload = loadMap;

  function loadMap() {

     var mapOptions = {
        center: new google.maps.LatLng(21.5, -79.4),
        zoom: 6,
        // disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"),
          mapOptions);

      var locations = gon.interview_markers;
      var marker, i;
      var infowindow = new google.maps.InfoWindow();

      for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map
        });
        marker.setMap(map);

        google.maps.event.addListener(marker, 'click', (function(marker, i) {

          var infowindowContent = "<div class='popup'>" +
                                    "<div>" +
                                      "<h4>" + locations[i][0] + "</h4>" +
                                      "<p>" + locations[i][3] + "</p>" +
                                      "<h5>Date of Entry:</h5>" +
                                      "<p>" + locations[i][4] + "</p>" +
                                    "</div>" +
                                    "<div>" +
                                      "<a href=/oral-histories#" +
                                      locations[i][5] +
                                      "><img src=" +
                                      locations[i][6] +
                                      "></a>" +
                                      "<p><a href=/oral-histories#" +
                                        locations[i][5] +
                                        ">More info</a><p>" +
                                    "</div>" +
                                  "</div>"

          return function() {
            infowindow.setContent(infowindowContent);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }

};
