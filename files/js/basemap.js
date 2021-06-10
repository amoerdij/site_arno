// Referenties voor de basemap opstellen.
var osmLink = '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
var openTilesLink = '&copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>'
var openStadia = '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
var mapLinks = openTilesLink + ' ' + openStadia + ' ' + osmLink; 

// Basemap definieren en toevoegen aan 'map'
var basemap = L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    attribution: mapLinks,
    maxZoom: 18,
    minZoom: 3
})