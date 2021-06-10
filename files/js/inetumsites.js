// Zorgt dat de kaart pas wordt ingeladen nadat de 'map' div is ingeladen
window.onload = function() {

// Kaart definieren en de definitie opslaan in de variabele 'map'
var inetumkaart = L.map('map').setView([50.7526162,4.26319998], 8);

// Basemap toevoegen die wordt gedifinieerd in script 'basemap.js'
basemap.addTo(inetumkaart)

// GeoJSON met de locaties van de Inetumsites ophalen en toevoegen aan de kaart
$.getJSON(
    'http://localhost:8181/geoserver/Geo_Arno/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Geo_Arno%3Ainetum_belgium&maxFeatures=50&outputFormat=application%2Fjson', 
    function (data) {
        inetumSites = L.geoJson(data, {
            pointToLayer: function (feature, latlng) {
                var smallIcon = new L.Icon({
                    iconSize: [27, 50],
                    iconAnchor: [13, 49],
                    popupAnchor:  [1, -45],
                    iconUrl: '/files/img/InetumPin.png'
                });
                return L.marker(latlng, {icon: smallIcon}); 
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.naam);
              }
            });
            inetumSites.addTo(inetumkaart);
        });

    }