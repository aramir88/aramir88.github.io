var weatherData;
var canvas;

var api= "https://api.openweathermap.org/data/2.5/weather?q=";
var ctiy= "Chicago";
var apiKey="&units=imperial&appid=c394ae0cee010b90f31ee46c0e78b7f6";

var food = "https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=5s1Aq4mLFp9KUXjqzPYXtoeFhWKyZGd7JcMJntvm&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=";
var item;

var nurtrientSelect;
var nurtrientData;
var temp;

var input;
var button;

var calories;
var sugars;
var fats;
var carbs;
var vitaminD;

var choco;
var milk;
var iceCream;
var soup;
function preload(){
	//loadJSON("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=c394ae0cee010b90f31ee46c0e78b7f6", gotWeatherData);
	choco = loadJSON("https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=5s1Aq4mLFp9KUXjqzPYXtoeFhWKyZGd7JcMJntvm&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=01105", gotNutrientData);
	milk = loadJSON("https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=5s1Aq4mLFp9KUXjqzPYXtoeFhWKyZGd7JcMJntvm&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=45292549",gotNutrientData);
	iceCream = loadJSON("https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=5s1Aq4mLFp9KUXjqzPYXtoeFhWKyZGd7JcMJntvm&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=45038923",gotNutrientData);
	cheese= loadJSON("https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=5s1Aq4mLFp9KUXjqzPYXtoeFhWKyZGd7JcMJntvm&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=01009",gotNutrientData);
	bread = loadJSON("https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=5s1Aq4mLFp9KUXjqzPYXtoeFhWKyZGd7JcMJntvm&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=45041670",gotNutrientData);
	banana = loadJSON("https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=5s1Aq4mLFp9KUXjqzPYXtoeFhWKyZGd7JcMJntvm&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=09040",gotNutrientData);
	waffle =  loadJSON("https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=5s1Aq4mLFp9KUXjqzPYXtoeFhWKyZGd7JcMJntvm&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=45280702",gotNutrientData);
	soup = loadJSON("https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=5s1Aq4mLFp9KUXjqzPYXtoeFhWKyZGd7JcMJntvm&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=06314",gotNutrientData);


}





function updateWeather(){
	loadJSON(weatherURL, gotWeatherData);


}
function setup(){
	canvas = createCanvas(windowWidth,windowHeight);
	windX = windowWidth/2;

//	setInterval(updateWeather,60000);
	input = createInput("Enter City Name");
	input.position(10,75);
	input.changed(changeCity);

	button= createButton('Submit');
	button.position(160,75);

	nurtrientSelect = createSelect();
	nurtrientSelect.position(800,10);
	nurtrientSelect.option("Select Nutrient");
	nurtrientSelect.option("Calories");
	nurtrientSelect.option("Sugars");
	nurtrientSelect.option("Fats");
	nurtrientSelect.option("Carbs");
	//nurtrientSelect.option("Vitamin D");
	nurtrientSelect.changed(changeNutrient);

	//updateFood();

	

}

function gotWeatherData(data){
	weatherData = data;
	console.log(weatherData);
	console.log(weatherData.weather[0].description);
	console.log(weatherData.main.temp);
	
}
function gotNutrientData(data){
	nurtrientData = data;
	console.log(nurtrientData);
	
}

function changeNutrient(){
	textSize(30);
	if(nurtrientSelect.value() == "Calories"){
		text("Calories:" + nurtrientData.report.foods[0].nutrients[0].value + "kcal",150,300);
		calories = nurtrientData.report.foods[0].nutrients[0].value;
		
		calorieChart();
	}
	if(nurtrientSelect.value() == "Sugars"){
		text("Sugars:" + nurtrientData.report.foods[0].nutrients[1].value+"g",150,300);
		sugars = nurtrientData.report.foods[0].nutrients[1].value;

		sugarSpoons();
	}
	if(nurtrientSelect.value() == "Fats"){
		text("Fats:" + nurtrientData.report.foods[0].nutrients[2].value+"g",150,300);
		fats = nurtrientData.report.foods[0].nutrients[2].value;
	
		lipids();
	}
	if(nurtrientSelect.value() == "Carbs"){
		text("Carbs:" + nurtrientData.report.foods[0].nutrients[3].value+"g",150,300);
	
		carbs = nurtrientData.report.foods[0].nutrients[3].value;
		carbohydrates();
	}


}

function draw(){
	background(180);
	textSize(30);
	text("What to eat/drink in today's weather?",10,50);
	
	if(weatherData){
		temp = weatherData.main.temp;
		if(temp >= 90){
			nurtrientData = iceCream;
			text("Eat " + nurtrientData.report.foods[0].name, 10, 200);



		}
		if(temp < 90 && temp > 80){
		
			nurtrientData = banana;
			text("Eat a " + nurtrientData.report.foods[0].name + " Make sure to Hydrate", 10, 200);
		}
		if(temp < 80 && temp > 70){
		
			nurtrientData = bread;
			text("Eat toasted " + nurtrientData.report.foods[0].name, 10, 200);
		}
		if(temp < 70 && temp > 60){
		
			nurtrientData = waffle;
			text("Eat a " + nurtrientData.report.foods[0].name, 10, 200);
		}
		if(temp < 60 && temp > 50){
		
			nurtrientData = milk;
			text("Drink " + nurtrientData.report.foods[0].name, 10, 200);
		}
		if(temp < 50 && temp > 40){
		
			nurtrientData = cheese;
			text("Eat " + nurtrientData.report.foods[0].name+ " Add to a sandwhich", 10, 200);
		}
		if(temp < 40 && temp > 30){
			nurtrientData = choco;
			text("Drink " + nurtrientData.report.foods[0].name, 10, 200)
		}
		if(temp < 30 && temp > 20){
		
			nurtrientData = soup;
			text("Have some " + nurtrientData.report.foods[0].name, 10, 200);
		}
		if(temp < 20){
			text("Just eat anything warm or filling. Eat enough and hyrdate even if it's cold");
		}
	}
	changeNutrient();
	

}

function changeCity(){
 	var weatherURL = api + input.value() + apiKey;
	loadJSON(weatherURL,gotWeatherData);
}
function updateFood(){
	loadJSON(gotNutrientData);

}
function calorieChart(){
	var x= calories/2.5;
	var y =50;

	line(100,500,100,600);
	line(100,600,1000,600);
	line(1000,600,1000,500);
	line(500,595,500,605)
	
	if(calories >500){
		fill(0,150,0);
	}
	if(calories >500 && calories <1000){
		fill(0,250,0);
	}
	if(calories > 1000 && calories < 1500){
		fill(100,180,0)
	}
	if(calories > 1500 ){
		fill(255,0,0);
	}
	
	rect(100,500,x,y);
	textSize(10);
	var info= text("Calories - 2000 kcal (RDA)",475,630);
	text("1000",490,615);


}

function sugarSpoons(){
	var x = 24;
	var y = 24;

	push();
	fill(255);
	ellipse(600,500,x*(sugars/12),y*(sugars/12));

	ellipse(300,500,x,y);

	pop();
	textSize(10);
	text("One tablespoon of sugar(12g)",250,600);
	text("Amount of sugar in this item",525,600);


}

function lipids(){
	var x = 100;
	var y = 500;



	push();
	fill(255);
	pop();

	for(var i = 0; i < fats; i++){
		ellipse(x,y,25,25);
		x+=25;

	}
	text("Each circle represents about 1g of fat. RDA is 20 - 35 % of calories ", 100,600 );



}
function carbohydrates(){
	var x= carbs;
	var y = carbs;
	
	push();
	fill(255);
	pop();
	rect(300,400,x,y);

	textSize(10);
	text("RDA is 130g", 250, 500);
	

	
	
}
function windowResized(){
	canvas = createCanvas(windowWidth,windowHeight);
}


