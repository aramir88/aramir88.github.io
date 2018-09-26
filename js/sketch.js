function setup() {
  
  createCanvas(windowWidth,windowHeight);
  background(120);
}

function draw() {
  
  ellipse(500,300,mouseX,mouseY);
  if(mouseIsPressed){
  	fill(190,0,0);
  }else{
  	fill(0,0,180);
  }
}

function windowResized(){
	reszieCanvas(windowWidth,windowHeight);
	background(120);

}