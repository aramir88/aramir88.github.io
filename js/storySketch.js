var canvas;

var initial;
var restart;

var button;
var button2;
var firstOp;
var secondOp;
var close;
var open;


var phone;
var obtainedPhone;

var specialOption;
var text;

var object;
var room;
var closed;

var sound;
var mute;
var audio;

var name;

var sceneOne;
var sceneTwo;


function preload(){
	sound = loadSound("./assets/night.mp3");
	room = loadImage('./images/room.png');
	closed = loadImage('./images/roomTwo.png');
	
}

function setup(){
	//background(0);

	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0.0);
	canvas.style('z-index', '-1');
	start();
}
function draw(){
	background(0);
	
	if(sceneOne == true){
		background(room);
	}
    if(sceneOne == false){
		background(closed);
	}

	
}

function start(){

	button = createButton('Start');
	button.position(windowWidth/2,windowHeight/2);
	button.size(75,50);
	button.mousePressed(intro);
}

function intro(){
	sceneOne = true;
	button.hide();
	sound.loop();
	initial = createElement('h2','You wake up in the middle of the night. To your suprise, it is not quiet. You can hear the crickets chirping outside. You notice your window is open');
	
	firstOp = createButton("Close window");
	firstOp.mousePressed(interact);
	secondOp = createButton("Look out window");
	secondOp.mouseReleased(observe);
}

function interact(){
	firstOp.hide();
	secondOp.hide();
	initial.html('(Slide to close window)');
	specialOption = createSlider(0,100,0);
	specialOption.input(closeWindow)

	
}

function observe(){
	firstOp.hide();
	secondOp.hide();
	initial.html('When you look at the winodw, you notice some things that do not make sense. The sun is out, but is dark outside. You see a cat that is chirping like a cricket. Every parked car has three or five wheels and the road is a river. The most interesting thing is that your yard is filled with clouds');
	firstOp = createElement('p','Screw this, I am going back to bed');
	firstOp.mousePressed(end);
	secondOp = createElement('p', 'I may be crazy but lets see what happens if I jump out this window');
	secondOp.mousePressed(lucid);
}
function lucid(){
	firstOp.hide();
	secondOp.hide();

	initial.html('Your instincts were right. You are lucid dreaming so as soon as you jump you begin to fly. However, you get too excited, crash, and suddenly wake up. It is still dark so you go to sleep');
}

function closeWindow(){
	if(specialOption.value() == 100){
		initial.html('You closed the window. Everything is quiet now');
		sound.stop();
		specialOption.hide();

	}
	    firstOp.show();
		firstOp.html('Go back to bed.');
		firstOp.mousePressed(end);
	    secondOp.show();
		secondOp.html('Leave room and find out why your window was open.');
		secondOp.mousePressed(investigate);


}

function investigate(){
	firstOp.hide();
	secondOp.hide();
	initial.html('As you approach the door you realize it is slightly ajar. You open your door and leave, but you did not leave. You end up right back in your room. Your stuffed animal comes up and walks towards you. It smacks you back to reality. It is nightime still so you sleep');
	/*name = createInput('Stuffed animal name?');
	button2=createButton('Confirm');
	button2.mousePressed(final); */

}

function final(){
	firstOp.hide();
	secondOp.hide();
	name.hide();
	button2.hide();
	initial.html('Your stuffed animal ' + name.value() + ' tells you of every adventure ever that occure in your dreams. Some amazing, some awfully weird. After everything is told you are hugged goodbye and awaken in the morning with no recollection of your dreams');

}

function end(){
	firstOp.hide();
	secondOp.hide();
	initial.hide();
	createElement('h1','You went to bed. Goodnight.');
}
function windowResized(){
	canvas = createCanvas(windowWidth,windowHeight);
}






/*
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
	button.mousePressed(intro);


}

function intro(){
	audio = true;
	sound.loop();
	button.hide();

	initial = createElement('h2','You wake up confused. You are lying on a path surrounded by trees. It is dark out, and you are cold.');

	firstOp = createButton('Follow path');
	firstOp.position(50,100); 
	firstOp.mousePressed(follow);
	


	secondOp = createButton('Investigate area');
	secondOp.position(200,100); 
	secondOp.mousePressed(investigate);




}


function investigate(){
	/*initial.hide();
	firstOp.hide();
	secondOp.hide();

    

	initial.html('You found your phone laying next to tree');

	firstOp.html('Put phone away');
	firstOp.mousePressed(follow)
	
	secondOp.html('Check your location');
	secondOp.mousePressed(location);
	obatinedPhone = true;



}

function follow(){
/*	initial.hide();
	firstOp.hide();
	secondOp.hide(); 

	initial.html('You follow the path. You see a light up ahead, but something catches your attention');
	firstOp.html('Continue');
	firstOp.mousePressed(proceed);

	secondOp.html('Stop and investigate');
	secondOp.mousePressed(attention); 


}
function proceed(){
	//initial.hide();
	firstOp.hide();
	secondOp.hide();

	initial.html('You come across an old looking building. You approach the main entrance. You try to open the door, but it is locked. By trying to open the door, you hear a voice that says "Awaiting Voice Recognition" ');
	specialOption = createButton('Confirm');
	text = createInput('Speak your name');
	text.changed(entrance);

}

function entrance(){
	//initial.hide();
	specialOption.hide();
	text.hide(); 

	initial.html('Hello ' + text.value());
}

function attention(){
	/*initial.hide();
	firstOp.hide();
	secondOp.hide(); 
	object = true;

	initial.html('It is hard to see.');
	firstOp.html('Attempt search');
	firstOp.mousePressed(proceed);

	secondOp.html('Continue towards light');
	secondOp.mousePressed(proceed);
  

} 


function draw(){
	background(0);
	if(obtainedPhone == true){
		phoneObtained();
		batteryLife();
	}
	if( audio== true){
		muteSound();
	}


}

function phoneObtained(){
	phone = createButton('Phone');
	phone.position(500,500);
	phone.mouseClicked(light);
	phone.doubleClicked(off);
	

}

function muteSound(){
	mute = createButton('Mute');
	mute.mouseClicked(soundOff);
	mute.doubleClicked(soundOn);
}

function soundOff(){
	audio = false
}

function soundOn(){
	audio = true;
}

function end(){
/*	initial.hide();
	firstOp.hide();
	secondOp.hide(); 

	phone.hide();
	createElement('h1','END');
	sound.stop();
}
function light(){
	fill(255);
	ellipse(500,500,300,300);


}

function off(){
	fill(0);
	ellipse(500,500,300,300);
}

function batteryLife(){
	pushMatrix();
	createP('80%');
	createElement('br');
	popMatrix();
} */


// Crickets Chirping at Night Sound recorded by Lisa Redfern - http://soundbible.com/2083-Crickets-Chirping-At-Night.html