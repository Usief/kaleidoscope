var circleRadixs;
var circleX;
var circleY;
var variableRadix;
var translateX;
var translateY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here
    circleRadixs = windowWidth/5+30;
    circleX = windowWidth/10;
    circleY = windowHeight/10+50;
    variableRadix = windowHeight/25;
    translateX = windowWidth/2;
    translateY = windowHeight/2;
}

function draw() {
  background(0);
  colorMode(HSB);

  var numRotations = frameCount/40;
  if (numRotations > 40){
    numRotations = (40+35*sin((frameCount-1600)/500));
  }
  translate(translateX, translateY);
  noFill();
  for (var i=0; i<numRotations; i++){
    rotate(TWO_PI/numRotations+frameCount/2000);
    stroke((frameCount/2)%255, 100, 155);
    drawCircle(circleX, circleY, circleRadixs+variableRadix*sin(frameCount/50), circleRadixs+variableRadix*sin(frameCount/50));
  }
  strokeWeight(4+sin(frameCount/60));
}

function drawSquare(x, y, length){
  rect(x, y, length, length);
}

function drawQuad(x, y, length){
  quad(x, y, x+length, y-length*2, x, y-length*4, x-length, y-length*2);
}

function drawCircle(x, y, length, length){
  ellipse(x, y, length, length);
}
