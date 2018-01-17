
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

  var mymap = L.map('thailand-map').setView([7.898293, 98.297843], 17);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data <a target="_blank" href="http://www.openstreetmap.org">OpenStreetMap.org</a>' +
    ' contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  }).addTo(mymap);

});