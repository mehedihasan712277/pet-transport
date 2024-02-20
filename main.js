// show mwnu bar
let showMenubar = () => {
  document.getElementById("sideMenuBar").style.width = "100%";
};
// hide menubar
let hideMenuBar = () => {
  document.getElementById("sideMenuBar").style.width = "0px";
};

//change of color of links on scroll
let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll("nav .menuLink li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let id = sec.getAttribute("id");
    let offset = sec.offsetTop - 136;
    let height = sec.offsetHeight;
    let top = window.scrollY;

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav .menuLink li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

//change of background of navbar on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight - 100) {
    document.querySelector("nav").classList.add("navBg");
  } else {
    document.querySelector("nav").classList.remove("navBg");
  }
});

// toggle text using read more button
let toggleText = () => {
  document.getElementById("hiddenText").classList.toggle("hiddenText");
  let text = document.getElementById("readMoreBtn");
  text.innerText =
    text.innerText === "Read More..."
      ? (text.innerText = "Read Less")
      : "Read More...";
};
document.getElementById("readMoreBtn").onclick = toggleText;

// functionalities for leaflet map

// let mapOptions = { center: [17.385044, 78.486671], zoom: 13 };
// let map = new L.map("map", mapOptions),
//   layer = new L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

// map.addLayer(layer);


let _firstLatLng, //holding first marker latitude and longitude
  _secondLatLng, //holding second marker latitude and longitude
  _polyline, //holding polyline object
  markerA = null,
  markerB = null;

map.on("click", function (e) {
  if (!_firstLatLng) {
    //get first point latitude and longitude
    _firstLatLng = e.latlng;

    //create first marker and add popup
    markerA = L.marker(_firstLatLng)
      .addTo(map)
      .bindPopup("Point A<br/>" + e.latlng)
      .openPopup();
  } else if (!_secondLatLng) {
    //get second point latitude and longitude
    _secondLatLng = e.latlng;

    //create second marker and add popup
    markerB = L.marker(_secondLatLng)
      .addTo(map)
      .bindPopup("Point B<br/>" + e.latlng)
      .openPopup();

    //draw a line between two points
    _polyline = L.polyline([_firstLatLng, _secondLatLng], {
      color: "red",
    });

    //add the line to the map
    _polyline.addTo(map);

    //get the distance between two points
    let _length = map.distance(_firstLatLng, _secondLatLng);

    //display the result
    document.getElementById("length").innerHTML = _length;
  } else {
    //if already we have two points first we remove the polyline object
    if (_polyline) {
      map.removeLayer(_polyline);
      _polyline = null;
    }

    //get new point latitude and longitude
    _firstLatLng = e.latlng;

    //remove previous markers and values for second point
    map.removeLayer(markerA);
    map.removeLayer(markerB);
    _secondLatLng = null;

    //create new marker and add it to map
    markerA = L.marker(_firstLatLng)
      .addTo(map)
      .bindPopup("Point A<br/>" + e.latlng)
      .openPopup();
  }
});

let _length = map.distance(el);
document.getElementById("length").innerHTML = _length;

map.on("click", function (e) {
  if (!_firstLatLng) {
    //get first point latitude and longitude
    _firstLatLng = e.latlng;

    //get first point layerpoint
    _firstPoint = e.layerPoint;

    //create first marker and add popup
    markerA = L.marker(_firstLatLng)
      .addTo(map)
      .bindPopup("Point A<br/>" + e.latlng + "<br/>" + e.layerPoint)
      .openPopup();
  } else if (!_secondLatLng) {
    //get second point latitude and longitude
    _secondLatLng = e.latlng;

    //get second point layerpoint
    _secondPoint = e.layerPoint;

    //create second marker and add popup
    markerB = L.marker(_secondLatLng)
      .addTo(map)
      .bindPopup("Point B<br/>" + e.latlng + "<br/>" + e.layerPoint)
      .openPopup();

    //draw a line between two points
    _polyline = L.polyline([_firstLatLng, _secondLatLng], {
      color: "red",
    });

    //add the line to the map
    _polyline.addTo(map);

    //get the distance between two points
    let _length = map.distance(_firstLatLng, _secondLatLng);

    //display the result
    document.getElementById("length").innerHTML = _length;
  } else {
    //if already we have two points first we remove the polyline object
    if (_polyline) {
      map.removeLayer(_polyline);
      _polyline = null;
    }

    //get new point latitude and longitude
    _firstLatLng = e.latlng;

    //get new point layerpoint
    _firstPoint = e.layerPoint;

    //remove previous markers and values for second point
    map.removeLayer(markerA);
    map.removeLayer(markerB);
    _secondLatLng = null;
    _secondPoint = null;

    //create new marker and add it to map
    markerA = L.marker(_firstLatLng)
      .addTo(map)
      .bindPopup("Point A<br/>" + e.latlng + "<br/>" + e.layerPoint)
      .openPopup();
  }
});
