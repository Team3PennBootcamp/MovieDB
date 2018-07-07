//   code below allows users to put in zip code in input box to locate showtimes/theaters near their area
const geolocate = document.getElementById('form_geolocate');
const inputGeo = document.getElementById('search_geo');

geolocate.addEventListener('submit', (e) => {
  e.preventDefault();
  let zipcode = inputGeo.value;
  let fandangoQuery = `https://www.fandango.com/${zipcode}_movietimes?q=${zipcode}`;
  window.open(fandangoQuery);
  console.log(fandangoQuery);
});