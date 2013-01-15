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

      if (gon.spanish == true)
        {
        var locations = gon.most_recent_interview_marker_es;
        var more_info = "más info";
        }
      else
        {
        var locations = gon.most_recent_interview_marker;
        var more_info = "more info";
        }
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
                                      "<a href=/oral-histories#" +
                                        locations[last_loc][5] +
                                        ">" + more_info + "</a>" +
                                    "</div>" +
                                  "</div>"

          return function() {
            infowindow.setContent(infowindowContent);
            infowindow.open(map, marker);
          }
        })(marker, last_loc));

};
