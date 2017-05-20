
function initMap() {
 var uluru = {lat: 50.085744, lng: 18.180105};
 var map = new google.maps.Map(document.getElementById('map'), {
      center: uluru,
      zoom: 16,
      scrollwheel: false,
      styles: [{"featureType":"administrative","elementType":"labels.text.fill",
      "stylers":[{"color":"#7e7f82"}]},
      {"featureType":"landscape","elementType":"all",
      "stylers":[{"color":"#7e7f82"}]},
      {"featureType":"poi","elementType":"all",
      "stylers":[{"visibility":"off"}]},
      {"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"labels.text",
      "stylers":[{"visibility":"on"}]},
      {"featureType":"poi.business","elementType":"labels.text.fill",
      "stylers":[{"hue":"#ffffff"}]},
      {"featureType":"poi.business","elementType":"labels.icon",
      "stylers":[{"visibility":"simplified"}]},
      {"featureType":"road","elementType":"geometry",
      "stylers":[{"lightness":50},{"color":"#a92a31"}]},
      {"featureType":"road","elementType":"labels.text.fill",
      "stylers":[{"color":"#000000"}]},
      {"featureType":"road.arterial","elementType":"labels.icon",
      "stylers":[{"visibility":"off"}]},
      {"featureType":"transit","elementType":"all",
      "stylers":[{"visibility":"off"}]},
      {"featureType":"water","elementType":"all",
      "stylers":[{"color":"#a92a31"},{"visibility":"on"}]}]
    });

    google.maps.event.trigger(map, 'onload');
    google.maps.event.trigger(map, 'resize');

    var contentString = '<div id="content">'+
  '<h1 id="firstHeading" class="firstHeading"><img src="../logo.png" alt="mebroll-logo"></h1>'+
  '<p class="logger-tekst">Transport międzynarodowy</p>'+
  '<div id="dane-kontaktowe">'+
  '<p>ul. Ocicka 161</p> '+
  '<p>47-400 Racibórz</p>'+
  '<p>tel.: 603 899 907</p>'+
  '</div>'+
  '</div>';

var infowindow = new google.maps.InfoWindow({
content: contentString
});

var marker = new google.maps.Marker({
position: uluru,
map: map,
title: 'Uluru (Ayers Rock)'
});
infowindow.open(map, marker);

}
