var canvas;
var bgColor;
var uname;
var colorButton;
var paragraph;
var textInput;
var ellipseSlider;
function setup(){
	canvas = createCanvas(windowWidth,windowHeight);


	canvas.position(100,200);

	bgColor = 210;

	uname = createElement('h1', 'Alberto Ramirez');
	uname.position(100,100);

	button = createButton("Change Color");
	button.mousePressed(changeColor);

	paragraph = createP("This a paragraph.");
	paragraph.mouseOver(changeColor);
	
	textInput = createInput("Type your name");
	textInput.changed(updateName);
	textInput.changed(updateFontColor);

	createElement('br');

	ellipseSlider= createSlider(0,600,300);

}
function updateName(){
	uname.html(textInput.value());
}

function changeColor(){
	bgColor = color(random(255), random(255),random(255));
}
function updateFontColor(){
	paragraph.style("color","red");
	//ragraph.style("font-size", "24px");
//name.style("color","red");
}

function draw(){
	background(bgColor);
	text(textInput.value(),50,100);
	fill(255,0,0);
	ellipse(width/2,height/2,ellipseSlider.value(),ellipseSlider.value());
	uname.position(ellipseSlider.value(),0);

	if(ellipseSlider.value() > 400){
		uname.hide();
	}else{
			uname.show()
			uname.position(ellipseSlider.value(),0);
			fill(255,0,0);
	}

}


