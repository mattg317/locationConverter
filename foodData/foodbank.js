/*
name
StrAdress
Zip
Borough
SNAPLocation
KOsher (will return true or false as 0 and 1)
AidsProgram (will return true or false as 0 and 1)
MobileLocations (will return true or false as 0 and 1)
Latitude
Longitude
Hours
Associated Org
Language */
var foodData = require('./food.js')
var fs = require('fs')
var express = require('express');
var app = express();

function foodBank(name, strAdress, zip, boro, lat, long, num){
	this.name = name;
	this.strAdress = strAdress;
	this.zip= zip;
	this.boro= boro;
	this.lat = lat;
	this.long = long;
	this.num = num;
}


//Name
// console.log(foodData[0].Workbook.Worksheet.Table.Row[1].Cell[0].Data.__text)
// //address
// console.log(foodData[0].Workbook.Worksheet.Table.Row[1].Cell[1].Data.__text)
// //zip
// console.log(foodData[0].Workbook.Worksheet.Table.Row[1].Cell[2].Data.__text)
// //borough
// console.log(foodData[0].Workbook.Worksheet.Table.Row[1].Cell[3].Data.__text)
// //lat
// console.log(foodData[0].Workbook.Worksheet.Table.Row[1].Cell[8].Data.__text)
// //long
// console.log(foodData[0].Workbook.Worksheet.Table.Row[1].Cell[9].Data.__text)
// //phone
// console.log(foodData[0].Workbook.Worksheet.Table.Row[1].Cell[10].Data.__text)
// //hours
// console.log(foodData[0].Workbook.Worksheet.Table.Row[1].Cell[11].Data.__text)

//row change location, cell changes info
var length = foodData[0].Workbook.Worksheet.Table.Row.length
var begin = foodData[0].Workbook.Worksheet.Table
console.log(begin.Row[1].Cell[0]);
var newFoodData = []

// for(var i =1;i<10; i++){
// 	var name = begin.Row[i].Cell[0].Data.__text;
// 	var addr = begin.Row[i].Cell[1].Data.__text;
// 	var zip = begin.Row[i].Cell[2].Data.__text;
// 	var borough = begin.Row[i].Cell[3].Data.__text;
// 	var lat = begin.Row[i].Cell[8].Data.__text;
// 	var long = begin.Row[i].Cell[9].Data.__text;
// 	var phone = begin.Row[i].Cell[10].Data.__text;
// 	//var hours =begin.Row[i].Cell[11].Data.__text;

// 	var spot = new foodBank(name, addr, zip, borough, lat, long, phone)
// 	newFoodData.push(spot);
// 	console.log(spot);
// 	}
function write(food){
	fs.appendFile('data.txt'," , "+ food, (err) => {
	  if (err) throw err;
	  console.log('It\'s saved!');
	});
}

function makeItHappen(){
	for(var i =1;i<10; i++){
		var name = begin.Row[i].Cell[0].Data.__text;
		var addr = begin.Row[i].Cell[1].Data.__text;
		var zip = begin.Row[i].Cell[2].Data.__text;
		var borough = begin.Row[i].Cell[3].Data.__text;
		var lat = begin.Row[i].Cell[8].Data.__text;
		var long = begin.Row[i].Cell[9].Data.__text;
		var phone = begin.Row[i].Cell[10].Data.__text;
		//var hours =begin.Row[i].Cell[11].Data.__text;

		var spot = new foodBank(name, addr, zip, borough, lat, long, phone)
		newFoodData.push(spot);
		console.log(spot);
	}
	//callback(JSON.stringify(spot))
	console.log(spot)
	app.post('/api', function(req, res){
		res.json(spot);
	})
}

makeItHappen();

