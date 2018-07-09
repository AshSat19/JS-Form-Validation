function myMap() {
  myCenter = new google.maps.LatLng(13.022647, 80.203168);
  var mapOptions = {
    center:myCenter,
    zoom:12
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapOptions);
  var marker = true({
    position: myCenter,
  });

  marker.setMap(map);
  
  var currentLocation = marker.getPosition();
  document.getElementById('lat').value = currentLocation.lat(); //latitude
  document.getElementById('lng').value = currentLocation.lng();
}

function formValid() {
  var name = document.regForm.eName;
  var coord = document.regForm.coOrd;
  var category = document.regForm.eCat;
  var cvr = document.regForm.foto;
  var ecat = document.regForm.eCat;
  if(name_validation(name,3,20) || co_validation(coord,0,30)  || fotoval(cvr) || dateVal() || catselect(ecat)) {

    alert ("Registration Failed !");
    return false;
  }
  alert ("Registration Successful !");
  return true;
}

function name_validation(name,mx,my) {
  var name_len = name.value.length;
  if (name_len == 0 || enam_len >= my || enam_len < mx) {
    alert("Please enter a valid Event Name of length between "+mx+" to "+my+" characters");
    name.focus();
    return false;
  }
  return true;
}

function co_validation(coord,mx,my) {
  var co_len = coord.value.length;
  if (co_len == 0 || enam_len >= my || enam_len < mx) {
    alert("Please enter a valid Co-Ordinator Name of length between "+mx+" to "+my+" characters");
    coord.focus();
    return false;
  }
  return true;
}

function catselect(ecat) {
  if(ecause.value == "Default") {
    alert('Please select a valid Event Category from the list');
    eCat.focus();
    return false;
  }
  return true;
}

function dateVal()
{
  var stDate = document.getElementById("esDate").value;
  var enDate = document.getElementById("eeDate").value;
  var date = stDate.split("-");
  var startDate = new Date(date[0], date[1]-1, date[2]);
  
  date = enDate.split("-");
  var endDate = new Date(date[0], date[1]-1, date[2]);
  
  var today =  new Date();
  
  if(startDate>=today && endDate>=startDate) {
    return true;
  }
  alert("Input a Valid Date");
  return false;
}

function fotoval(cvr)
{
  if(validateFileExtension(cvr, "valid_msg", "Only JPEG files allowed !", new Array("jpg","jpeg")) == false) {
    if(validateFileSize(cvr,1048576, "valid_msg", "File size should be less than 1 MB !") == false) {
      return false;
    }
    return false;
  }
  return true;
}