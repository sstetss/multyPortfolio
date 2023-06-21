navigator.geolocation.getCurrentPosition((position) =>{
   console.log(position.coords.latitude);
   console.log(position.coords.longitude);
   console.log(position.coords.accuracy);

   let latit = position.coords.latitude;
   let longi = position.coords.longitude
   let myPosition = { lat: latit, lng: longi };
   let labels = "asdsadsdsd"
   let labelIndex = 0;

   let map;
   map = new google.maps.Map(document.getElementById("map"), {
     center: myPosition,
     zoom: 14,
   });

   new google.maps.Marker({
      position: myPosition,
      map,
      title: "Hello World",
   })

   google.maps.event.addListener(map, "click", (event) => {
      addMarker(event.latLng, map);
    });
    // Add a marker at the center of the map.
    addMarker(myPosition, map);

    function addMarker(location, map) {
      // Add the marker at the clicked location, and add the next-available label
      // from the array of alphabetical characters.
      new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map,
      });
    }

})