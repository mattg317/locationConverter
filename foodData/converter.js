var foodData = require('./food.js')

function foodBank(name, strAdress, zip, boro, lat, long, num){
	this.name = name;
	this.strAdress = strAdress;
	this.zip= zip;
	this.boro= boro;
	this.lat = lat;
	this.long = long;
	this.num = num;
}

var length = foodData[0].Workbook.Worksheet.Table.Row.length
var begin = foodData[0].Workbook.Worksheet.Table
console.log(begin.Row[1].Cell[0]);
var newFoodData = []


module.exports = function(app){

	app.get('/api', function(req, res){
		//res.json(foodData[0].Workbook.Worksheet.Table.Row)

		for(var i =1;i<length; i++){
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
		res.json(newFoodData);



	})
}