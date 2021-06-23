host = config.host
root = config.root
geoserver_port = config.geoserver_port

// select head element
var head = document.getElementsByTagName("head")[0];

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

// Locate basemapJS
const basemapJS = document.createElement("script");
basemapJS.setAttribute("src", root + "/files/js/basemap.js");
head.appendChild(basemapJS);

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
stylesheet.setAttribute("href", root + "/files/css/stylesheet.css");
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

// select body element
var body = document.getElementsByTagName("body")[0];

// Save header tag in variable 'header'
var header = document.getElementsByTagName("header")[0];
// Build headerconent
// Home
let homeAnchor = document.createElement("a");
let homeAnchorText = document.createTextNode("Home");
homeAnchor.setAttribute("href", root);
homeAnchor.setAttribute("class", "header_button");
homeAnchor.appendChild(homeAnchorText);
// Coronakaart
let coronakaartAnchor = document.createElement("a");
let coronakaartAnchorText = document.createTextNode("Coronakaart");
coronakaartAnchor.setAttribute("href", root + "/coronakaart");
coronakaartAnchor.setAttribute("class", "header_button");
coronakaartAnchor.appendChild(coronakaartAnchorText);
// Inetumsites
let inetumsitesAnchor = document.createElement("a");
let inetumsitesAnchorText = document.createTextNode("Inetumsites");
inetumsitesAnchor.setAttribute("href", root + "/inetumsites");
inetumsitesAnchor.setAttribute("class", "header_button");
inetumsitesAnchor.appendChild(inetumsitesAnchorText);
// Secret page
let secretpageAnchor = document.createElement("a");
let secretpageAnchorText = document.createTextNode("Secret page")
secretpageAnchor.setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
secretpageAnchor.setAttribute("class", "header_button");
secretpageAnchor.appendChild(secretpageAnchorText);

// headercontent to header
header.appendChild(homeAnchor);
header.appendChild(coronakaartAnchor);
header.appendChild(inetumsitesAnchor);
header.appendChild(secretpageAnchor);

// Save footer tag in variable 'footer'
var footer = document.getElementsByTagName("footer")[0];

// Build footercontent
let footerDiv = document.createElement("div");
let footerDivEmailText = document.createTextNode("E-mail: ");
let footerDivTelText = document.createTextNode(" | tel: ");

// Build email anchor
let footerAnchorEmail = document.createElement("a");
let footerAnchorEmailText = document.createTextNode("arno.moerdijk@inetum-realdolmen.world")
footerAnchorEmail.setAttribute("href", "mailto:arno.moerdijk@inetum-realdolmen.world")
footerAnchorEmail.appendChild(footerAnchorEmailText);

// Build telephone anchor
let footerAnchorTel = document.createElement("a");
let footerAnchorTelText = document.createTextNode("+32 (0)4 75 80 06 17")
footerAnchorTel.setAttribute("href", "tel:+32475800617");
footerAnchorTel.appendChild(footerAnchorTelText);

// Build footerdiv
footerDiv.appendChild(footerDivEmailText);
footerDiv.appendChild(footerAnchorEmail);
footerDiv.appendChild(footerDivTelText);
footerDiv.appendChild(footerAnchorTel);

// Footercontent to footer
footer.appendChild(footerDiv);
