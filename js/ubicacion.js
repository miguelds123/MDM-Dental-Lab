function initMap(){
    var coord = {lat:10.0014488 ,lng: -84.0872763};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 17,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}