//Canvas Size
var canvasWidth = 400;
var canvasHeight = 400;

var numOfLines = 60; //How many lines to draw (For Loops)

function setup() { 
  
  //Create Canvas & give background color
  createCanvas(canvasWidth, canvasHeight);
  background(220);
  
  /* Calculate the space between */
  var findWidth;
  var findHeight;
  findWidth = canvasWidth/numOfLines;
  findHeight = canvasWidth/numOfLines;
  
  var i; //For Loop
  var xSpace,ySpace;
  
  for(i=0; i<numOfLines; i++){
    xSpace = findWidth * i;
    ySpace = findHeight * i;
    stroke(255,0,0);
    line(canvasWidth, ySpace, xSpace, 0);
  	
  }
  
  for(i=0; i<numOfLines; i++){
  	xSpace = findWidth * i;
    ySpace = findHeight * i;
    
    stroke(0,0,255);
    line(canvasWidth-xSpace, 0,0,ySpace);
  }

  
} 