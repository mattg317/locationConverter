// var markers = [
// {
// "name": "Bronx Defenders",
// "strAdress": "360 161st St",
// "zip": "10451",
// "boro": "Bronx",
// "lat": "40.824169",
// "long": "-73.915452",
// "num": "718 838-7849"
// },
// {
// "name": "Department Of Probation Bronx Office",
// "strAdress": "198 East 161st Street",
// "zip": "10451",
// "boro": "Bronx",
// "lat": "40.825851999999998",
// "long": "-73.921006000000006",
// "num": "718-802-4500"
// },
// {
// "name": "Phipps",
// "strAdress": "3125 3rd Ave",
// "zip": "10451",
// "boro": "Bronx",
// "lat": "40.822020",
// "long": "-73.912029",
// "num": "Call 311 for hours"
// }];

console.log(markers[0].lat)
console.log(markers[0].long)

function initMap() {
        //var bronx = {lat: 40.824169, lng: -73.915452};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 40.824169, lng: -73.915452},
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        // var marker = new google.maps.Marker({
        //   position: bronx,
        //   map: map
        // });
        for (i = 0; i < markers.length; i++) {  
	      	var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(markers[i].lat, markers[i].long),
	        map: map
	      });
      }
};

// for (i = 0; i < locations.length; i++) {  
//       marker = new google.maps.Marker({
//         position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//         map: map
//       });
