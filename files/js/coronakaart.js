"use strict";

// Zorgt dat de kaart pas wordt ingeladen nadat de 'map' div is ingeladen
window.onload = function() {

// Kaart definieren en de definitie opslaan in de variabele 'map'
var coronakaart = L.map('map').setView([50.7526162,4.26319998], 8);

// Basemap toevoegen die wordt gedifinieerd in script 'basemap.js'
basemap.addTo(coronakaart)

// WMS laag met de coronacijfers ophalen vanuit de GeoServer en toevoegen aan de kaart
L.tileLayer.wms('http://localhost:8181/geoserver/Geo_Arno/wms?', {
    layers: 'Geo_Arno:coronacases',
    format: 'image/png',
    transparent: true
}).addTo(coronakaart);

function getColor(cases) {
    return cases > 30   ? '#d76163' :
           cases > 10   ? '#fec980' :
                      '#66ba62';
}

function style(features) {
    return {
        fillColor: '#E31A1C00',
        weight: 2,
        opacity: 0,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    gemeenten.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    coronakaart.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

function formatCases(cases) {
    if (cases === null) {
        return 'Geen data teruggevonden over de laatste zeven dagen.'
    } else {
        return Math.round(cases) + ' new cases'
    }
}
// Globale variable 'gemeenten' moet gedefinieerd worden
var gemeenten;

var info = L.control();
console.log(info)
// Geojson van over de coronacijfers ophalen en als een doorzichtige laag toevoegen aan de kaart (voor pop-ups)
$.getJSON(
    'http://localhost:8181/geoserver/Geo_Arno/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=Geo_Arno%3Acoronacases&maxFeatures=50&outputFormat=application%2Fjson', 
    function (data) {
        gemeenten = L.geoJson(data,
            {
                style,
                onEachFeature
            }
        ).addTo(coronakaart);

        info.onAdd = function () {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };

        // method that we will use to update the control based on feature properties passed
        info.update = function (feature) {
            this._div.innerHTML = '<h4>Coronacases in Belgian municipalities</h4>' +  (feature ?
                '<b>' + feature.namedut + '</b><br />' + formatCases(feature.cases)
                : 'Hover over a gemeente');
        };
        info.addTo(coronakaart);
        var legend = L.control({position: 'bottomright'});

        legend.onAdd = function (coronakaart) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0, 10, 30],
                labels = [];

            // loop through our density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                    grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
            }

            return div;
        };

        legend.addTo(coronakaart);
     }
);

    }