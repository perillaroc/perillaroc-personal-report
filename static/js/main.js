
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
    scrollOverflow: true,
    anchors: [
      'section0',
      'section1',
      'section2',
      'section3',
      'section4',
      'section5',
      'section6'
    ]
  });

  var mymap = L.map('thailand-map').setView([7.88390, 98.39080], 18);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: 'Map data <a target="_blank" href="http://www.openstreetmap.org">OpenStreetMap.org</a>' +
    ' contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }).addTo(mymap);


  var phuket_town_marker = L.marker([7.88390, 98.39080]).addTo(mymap);
  var phuket_town_popup = phuket_town_marker.bindPopup("<b>Casa Blanca Boutique Hotel</b>");
  phuket_town_popup.openPopup();

  var pathong_marker = L.marker([7.9003468, 98.2988683]).addTo(mymap);
  var pathong_popup = pathong_marker.bindPopup("<b>Nap Pathong Hotel</b>");

  var luguna_marker = L.marker([7.996431, 98.293182]).addTo(mymap);
  var luguna_popup = luguna_marker.bindPopup("<b>Outrigger Laguna Phuket Beach Resort</b>");


  $('#thailand_phuket_town_button').click(function(){
    mymap.setView([7.88390, 98.39080], 18);
    phuket_town_popup.openPopup();
  });

  $('#thailand_pathong_button').click(function(){
    mymap.setView([7.9003468, 98.2988683], 18);
    pathong_popup.openPopup();
  });

  $('#thailand_luguna_button').click(function(){
    mymap.setView([7.996431, 98.293182], 18);
    luguna_popup.openPopup();
  });



});