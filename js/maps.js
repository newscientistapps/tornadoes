var tornado = L.mapbox.tileLayer('newscientist26102012.map-1jbwssor')

var map = L.map('map', {
    center: new L.LatLng(38, -98),
    zoom: 5, 
    maxZoom: 12,
    minZoom: 4,
    layers: [tornado] 
});


