// select head element
const head = document.getElementsByTagName("head")[0];

// Add title to page
const title = document.createElement("title");
const titletext = document.createTextNode("Website van Arno");
title.appendChild(titletext);
head.appendChild(title);

// Add page description
const description = document.createElement("meta");
description.setAttribute("name", "description");
description.setAttribute("content", "Oefenwebsite van Arno Moerdijk");
head.appendChild(description);

// Add author
const author = document.createElement("meta");
author.setAttribute("name", "author");
author.setAttribute("content", "Arno Moerdijk");
head.appendChild(author);

// Add viewport
const viewport = document.createElement("meta");
viewport.setAttribute("name", "viewport");
viewport.setAttribute("content", "width=device-width, initial-scale=1.0");
head.appendChild(viewport);

// Leaflet CSS toevoegen
const leafletCSS = document.createElement("link");
leafletCSS.setAttribute("rel", "stylesheet");
leafletCSS.setAttribute("href", "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css");
leafletCSS.setAttribute("integrity", "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==");
leafletCSS.setAttribute("crossorigin", "");
head.appendChild(leafletCSS);

// Locate config
const configParams = document.createElement("script");
configParams.setAttribute("src", "../config.js");
head.appendChild(configParams);

// Locate basemapJS
const basemapJS = document.createElement("script");
basemapJS.setAttribute("src", "../files/js/basemap.js");
head.appendChild(basemapJS);
// Locate InetumSitesJS
// const inetumSitesJS = document.createElement("script");
// inetumSitesJS.setAttribute("src", "../files/js/inetumsites.js");
// head.appendChild(inetumSitesJS);

// Locate bootstrap stylesheet
const bootstrap = document.createElement("link");
bootstrap.setAttribute("rel", "stylesheet");
bootstrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
bootstrap.setAttribute("integrity", "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T");
bootstrap.setAttribute("crossorigin", "anonymous");
head.appendChild(bootstrap);

// Locate personal stylesheet
const stylesheet = document.createElement("link");
stylesheet.setAttribute("rel", "stylesheet");
stylesheet.setAttribute("href", "../files/css/stylesheet.css");
head.appendChild(stylesheet);

// Load Inetum icon 16px
const inetumIcon16 = document.createElement("link");
inetumIcon16.setAttribute("rel", "icon");
inetumIcon16.setAttribute("type", "image/png");
inetumIcon16.setAttribute("size", "16x16");
inetumIcon16.setAttribute("href", "https://www.realdolmen.com/themes/itr_theme/images/src/favicons/favicon-16x16.png");
head.appendChild(inetumIcon16);

// Load Inetum icon 32px
const inetumIcon32 = document.createElement("link");
inetumIcon32.setAttribute("rel", "icon");
inetumIcon32.setAttribute("type", "image/png");
inetumIcon32.setAttribute("size", "32x32");
inetumIcon32.setAttribute("href", "https://www.realdolmen.com/themes/itr_theme/images/src/favicons/favicon-32x32.png");
head.appendChild(inetumIcon32);

// Add main js
const mainJS = document.createElement("script");
mainJS.setAttribute("src", "../files/js/main.js");
head.appendChild(mainJS);
