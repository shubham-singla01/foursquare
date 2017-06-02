 var foursquare = (require('foursquarevenues'))('DVMAHWNLYOQKQQVFSYES1X5GBA01A1LOKF3XEB0T0SCG222R', 'AKKJBZRKSRFNJJH1AZIMGZFJC1GFCPDMGQQRNDKZQFOEKN5K');
 module.exports=function(req,resp){
	var latt=req.body.lat;
	var longg=req.body.lon;
	var keywrd=req.body.keyword;
	var choice=req.body.srch;
	console.log(choice);
	var html="<html><head><title>Data</title></head><body><p>";
    var params = {
        "ll": latt+","+longg,
		"query": keywrd
    };
	if(choice=="1"){
    foursquare.getVenues(params, function(error, venues) {
        if (!error) {
            console.log("Search");
			for (var i in venues.response.venues) { 
				html+="****Venue "+i+" <br/>";
				html+="* Id: "+venues.response.venues[i].id+"<br/>";
				html+="* Name: "+venues.response.venues[i].name+"<br/>";
				html+="* Phone: "+venues.response.venues[i].contact.phone+"<br/>";
				html+="* Address: "+venues.response.venues[i].location.address+"<br/>";
				html+="* Latitude: "+venues.response.venues[i].location.lat+"<br/>";
				html+="* Longitude: "+venues.response.venues[i].location.lng+"<br/>";
				html+="* City: "+venues.response.venues[i].location.city+"<br/>";
				html+="* Country: "+venues.response.venues[i].location.country+"<br/><br/>";	
			}
			html+="</p></body></html>";

			resp.send(html);
		}else
			console.log(error);
    });
	}else{
 
    foursquare.exploreVenues(params, function(error, venues) {
        if (!error) {

			for (var i in venues.response.groups[0].items) { 
				html+="****Venue "+i+" <br/>";
				html+="* Id: "+venues.response.groups[0].items[i].venue.id+"<br/>";
				html+="* Name: "+venues.response.groups[0].items[i].venue.name+"<br/>";
				html+="* Phone: "+venues.response.groups[0].items[i].venue.contact.phone+"<br/>";
				html+="* Address: "+venues.response.groups[0].items[i].venue.location.address+"<br/>";
				html+="* Latitude: "+venues.response.groups[0].items[i].venue.location.lat+"<br/>";
				html+="* Longitude: "+venues.response.groups[0].items[i].venue.location.lng+"<br/>";
				html+="* City: "+venues.response.groups[0].items[i].venue.location.city+"<br/>";
				html+="* Country: "+venues.response.groups[0].items[i].venue.location.country+"<br/><br/>";
			}
			html+="</p></body></html>";
			resp.send(html);
        }else
			console.log(error);
    });
	}
 }