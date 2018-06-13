// Make an AJAX call to Google Script
var script_url = "https://script.google.com/macros/s/AKfycbxK6OlTh5D_HSAkgoQl9CgnmRmXsGbzpqzTqiC0isiFhJl0yeKN/exec";
function insert_value() {		
	$("#re").css("visibility","hidden");
	document.getElementById("loader").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');
	var id1= $("#id").val();
	var name= $("#name").val();		
	var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&action=insert";
	var request = jQuery.ajax({
		headers: {
                    'Access-Control-Allow-Origin': '*',
					'X-Content-Type-Options: nosniff'
                 },
		url: url ,
		method: "GET",
		dataType: "jsonp"
	});
}

function update_value(){
	$("#re").css("visibility","hidden");
	document.getElementById("loader").style.visibility = "visible";
	var id1=	$("#id").val();
	var name= $("#name").val();		
	var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&action=update";
	var request = jQuery.ajax({
		headers: {
                    'Access-Control-Allow-Origin': '*',
					'X-Content-Type-Options: nosniff'
                 },
		url: url ,
		method: "GET",
		dataType: "jsonp"
	});		
}

function delete_value(){
	$("#re").css("visibility","hidden");
	document.getElementById("loader").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');
	var id1=	$("#id").val();
	var name= $("#name").val();
	var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&action=delete";
	var request = jQuery.ajax({
		headers: {
                    'Access-Control-Allow-Origin': '*',
					'X-Content-Type-Options: nosniff'
                 },
		url: url ,
		method: "GET",
		dataType: "jsonp"
	});
}

// print the returned data
function ctrlq(e) {		
	$("#re").html(e.result);
	$("#re").css("visibility","visible");
	read_value();		
}

function read_value() {
	$("#re").css("visibility","hidden");		   
	document.getElementById("loader").style.visibility = "visible";
	var url = script_url+"?action=read";
	$.getJSON(url, function (json) {
		// Set the variables from the results array
		// CREATE DYNAMIC TABLE.
		var table = document.createElement("table");
		var header = table.createTHead();
		var row = header.insertRow(0);     
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);		
		cell1.innerHTML = "<b>ID</b>";
		cell2.innerHTML = "<b>Name</b>";			
		// ADD JSON DATA TO THE TABLE AS ROWS.
		for (var i = 0; i < json.records.length; i++) {
			tr = table.insertRow(-1);
			var tabCell = tr.insertCell(-1);
			tabCell.innerHTML = json.records[i].ID;
			tabCell = tr.insertCell(-1);
			tabCell.innerHTML = json.records[i].NAME;
		}
		// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
		var divContainer = document.getElementById("showData");
		divContainer.innerHTML = "";
		divContainer.appendChild(table);
		document.getElementById("loader").style.visibility = "hidden";
		$("#re").css("visibility","visible");
	});
}