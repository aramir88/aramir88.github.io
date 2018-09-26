var canvas;
//screen text
var greeting;
var title;
var firstOption;
var secondOption;
var userName;

//inputs
var nameInput;

//animation variables
var sunX;
var sunY;

//boolean 
var firstScreen;
var walkToSun;
var sunAnimate;
var walkCloser;

var spaceBackground;

function preload(){
	spaceBackground = loadImage('./images/space.png');
}

function setup(){
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style("z-index","-1");
	beginning();

}

function beginning(){
	background(0);
	greeting = createP("Please type your name and press enter");
	createElement ('br');

	nameInput = createInput("Type your name here");
	nameInput.changed(startStory);
}

function startStory(){
	greeting.hide();
	nameInput.hide();
	userName= createElement('h1', nameInput.value());
	title = createElement('h1',"Get home before the sun sets");
	firstOption = createP("Walk towards the sun");
	secondOption = createP("Go Home");
	firstOption.mousePressed(toSun);
	secondOption.mousePressed(toHome);
}

function toSun(){
	walkToSun = true;

	userName.html(nameInput.value());
	title.html("You towards the sun , it gets bigger");
	firstOption.html("walk closer");
	secondOption.html("control the sun");
}

function toHome(){
	firstOption.hide();
	secondOption.hide();

	title.html("You have gone home, good night.");

}

function draw(){
	background(0);
if (walkToSun == true){
	toSunAnim();
}else if (walkCloser == false){

}
}

function walkCloserToSun(){
	walkToSun = false;
	walkCloser = true;

	sunSlider = createSllider(0,255,0);
}

function walkCloserAnim(){
	background(spaceBackground);
	image(spaceBackground,500,600,900,50);
	fill(sunSlider.value(),0,0);
	ellipse(windowWidth/2,windowHeight/2);
}


function tosunAnim(){
	background(0);
	sunX = windowWidth/2;
	sunY = winodwHeight/2;
	sunX = sunX + random(-5, 5);
	sunY = sunY + random(-3,3);
	ellipse(sunX,sunY,300,300);
}

function windowResized(){
	canvas = createCanvas(windowWidth,windowHeight);
}



