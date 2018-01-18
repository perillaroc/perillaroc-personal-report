
$(document).ready(function() {

  // var my_map = L.map('thailand-map').setView([98.297843, 7.898293], 13);


  $('#fullpage').fullpage({
    sectionsColor: [
      'whitesmoke',
      'whitesmoke',
      'whitesmoke',
      'whitesmoke',
      'whitesmoke',
      'whitesmoke',
      'whitesmoke'
    ],
    scrollOverflow: true
  });

  var mymap = L.map('thailand-map').setView([7.90046, 98.29926], 18);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: 'Map data <a target="_blank" href="http://www.openstreetmap.org">OpenStreetMap.org</a>' +
    ' contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  }).addTo(mymap);

  var marker = L.marker([7.9003468, 98.2988683]).addTo(mymap);
  marker.bindPopup("<b>漂亮的宾馆</b>").openPopup();

});