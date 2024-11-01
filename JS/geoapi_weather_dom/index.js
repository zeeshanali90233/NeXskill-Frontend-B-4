function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => console.log(pos));
  } else {
    alert("Location NOt Available");
  }
}

getLocation();
