  function shelterBank(name, strAdress, boro, lat, long, num){
    this.name= name;
    this.strAdress = strAdress;
    this.boro= boro;
    this.lat = lat;
    this.long = long;
    this.num = num;

  }

 // module.exports = function(app){

 //    app.get('/api', function(req, res){
var geocoder;
var map;
    
console.log("live")
console.log(shelter[0]);
//Map==============
function initMap() {
        geocoder = new google.maps.Geocoder();
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 40.824169, lng: -73.915452},
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        // var marker = new google.maps.Marker({
        //   position: bronx,
        //   map: map
        // });
      //   //$("#food").on("click", function(){
      //   for (i = 0; i < markers.length; i++) {  
      //       var marker = new google.maps.Marker({
      //           position: new google.maps.LatLng(markers[i].lat, markers[i].long),
      //           map: map
      //       });
      //       var message = markers[i].name

      //       addName(marker, message)
            
      //   }

      // })
};
//===================


function codeAddress(address) {
    // var address = document.getElementById('address').value;
    geocoder = new google.maps.Geocoder();
   // var address = $("#address").val();
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        // map.setCenter(results[0].geometry.location);
        // var marker = new google.maps.Marker({
        //     map: map,
        //     position: results[0].geometry.location
        // });
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();
        console.log(JSON.stringify(results[0].geometry.location));
        console.log(lat);
        console.log(lng);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

//   for(var i=0, n=shelter.length; i<n; i++){
//     //console.log(shelter[i].Latitude)
//     var lat =shelter[i].Latitude
//     var lng = shelter[i].Longitude
//     if(lat == null || lng ==null){
//         codeAddress(shelter.Street_Address)
//     }else{
//         console.log(lat)
//         console.log(lng)
//     }
// }