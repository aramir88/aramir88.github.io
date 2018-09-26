var canvas;

var initial;
var restart;

var button;
var firstOp;
var secondOp;
var battery;


var phone;
var obatinedPhone;

var specialOption;



function preload(){
//s	phone = loadImage("./images/drawing.png");
}

function setup(){
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style("z-index","-1");
	start();



}

function start(){
	background(0);
	button = createButton('Start');
	button.position(windowWidth/2,windowHeight/2);
	button.size(75,50);
	button.mousePressed(intro)

}

function intro(){
	button.hide();

	initial = createElement('h2','You wake up confused. You are lying on a path surrounded by trees. It is dark out, and you are cold.');

	firstOp = createButton('Follow path');
	firstOp.position(50,100); 
	firstOp.mousePressed(follow);
	


	secondOp = createButton('Investigate area');
	secondOp.position(200,100); 
	secondOp.mousePressed(investigate);




}

function resetStory(){
	background(0);
	restart =createButton('Restart');
	restart.mousePressed(start);


}

function investigate(){
	initial.hide();
	firstOp.hide();
	secondOp.hide();

    

	initial = createElement('h2','You found your phone laying next to tree');

	firstOp = createButton('Put phone away');
	firstOp.mousePressed(follow)
	
	secondOp = createButton('Check your location');
	secondOp.mousePressed(location);
	obatinedPhone = true;



}

function follow(){
	initial.hide();
	firstOp.hide();
	secondOp.hide();

	initial = createElement('h2','You follow the path. You see a light up ahead, but something catches your attention');
	firstOp = createButton('Continue');
	firstOp.mousePressed(proceed);

	secondOp = createButton('Stop and investigate');
	secondOp.mousePressed(attention); 


}
function proceed(){
	initial.hide();
	firstOp.hide();
	secondOp.hide();
	initial = createElement('h2', 'You come across an old looking building. You approach the main entrance. You try to open the door, but it is locked. ')

}

function attention(){
	initial.hide();
	firstOp.hide();
	secondOp.hide();
	initial = createElement('h2', 'It is hard to see.')
} 


function draw(){
	background(0);
	if(obatinedPhone == true){
		phoneObtained();
	}

}

function phoneObtained(){
	//image(phone,300,300,50,50);
	phone.position(500,500);

}