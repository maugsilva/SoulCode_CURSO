const loc = document.getElementById("demo");

function getLocation () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        loc.innerHTML = "Seu navegador não possuí suporte para Geolocalização";
    }
}

function showPosition (position) {
    loc.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}