function myMap()
{
  myCenter=new google.maps.LatLng(13.022647, 80.203168);
  var mapOptions= {
    center:myCenter,
    zoom:12
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = true({
    position: myCenter,
  });
  marker.setMap(map);
  var currentLocation = marker.getPosition();
    //Add lat and lng values to a field that we can save.
    document.getElementById('lat').value = currentLocation.lat(); //latitude
    document.getElementById('lng').value = currentLocation.lng();
}

function formValidation()
{
var enam = document.registration.ename;
var c1 = document.registration.coord1;
var ecause = document.registration.cause;
var Etype = document.registration.etype;
var ezone = document.registration.zone;
if(dateVal() && ename_validation(enam,3,20) && c1_validation(c1,0,20) && causeselect(ecause) && typeselect(Etype) && zoneselect(ezone))
	return true;
else return false;


}


function ename_validation(enam,mx,my)
{
var enam_len = enam.value.length;
if (enam_len == 0 || enam_len >= my || enam_len < mx)
{
alert("Eveny Name should not be empty / length be between "+mx+" to "+my);
enam.focus();
return false;
}
return true;
}

function c1_validation(enam,mx,my)
{
var enam_len = enam.value.length;
if (enam_len == 0 || enam_len >= my || enam_len < mx)
{
alert("Coordinator 1 should not be empty / length should be less than "+my);
c1.focus();
return false;
}
return true;
}

function causeselect(ecause)
{
if(ecause.value == "Default")
{
alert('Select Event Cause from the list');
ecause.focus();
return false;
}
else
{
return true;
}
}

function typeselect(Etype)
{
if(ecause.value == "Default")
{
alert('Select Event Type from the list');
Etype.focus();
return false;
}
else
{
return true;
}
}

function zoneselect(Etype)
{
if(ezone.value == "Default")
{
alert('Select Zone from the list');
ezone.focus();
return false;
}
else
{
return true;
}
}
function dateVal()
{
	var stDate = document.getElementById("ipstdate").value;
	var enDate = document.getElementById("ipendate").value;
	var date = stDate.split("-");
	var startDate = new Date(date[0], date[1]-1, date[2]);
	//alert (startDate);
	date = enDate.split("-");
	var endDate = new Date(date[0], date[1]-1, date[2]);
	//alert (endDate);
	
	var today =  new Date();
	//alert(today);
	if(startDate>=today && endDate>=startDate){
	
	return true;}
	else{
		alert("Input a Valid Date");
	return false;}
}
