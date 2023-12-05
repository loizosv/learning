/**
 *
 * Author  : Loizos Vasileiou (eeu905)
 * Module  : UXS-2071 (Scripted Media)
 * Email   : eeu905@bangor.ac.uk
 * Project : X071_09_Perlin Noise Chart
 *
 */

/* Variables Declaration */

//Declare Canvas Attributes
var canvasWidth = 600;
var canvasHeight = 400;

var xDistance = 0.0;
var yDistance = 0.0;

var maxWave = 550;
var minWave = 5;

var lastX;
var lastY;

function setup() {
    
  /* Setup Canvas */
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.id("canvas");
  
  //Change Color Mode
  //colorMode(HSB);
  
  //Set text Allignment to the CENTER
  textAlign(CENTER);
  
  frameRate(50); //Set Frame Rate to 50
}

function draw() {
  
  //Set Background Color
  background(255);

  //Set Size of the Text
  textSize(15);
  
  push();
  
  //Move 10 pixels
  translate(10, 0);
  
  beginShape(); //Start adding shapes in the Canvas
  
  //Reset values
  xDistance = 0;
  lastX = 0;
  
  //For Loop
  for (var x = 0; x <= width - 5; x += 50){
    var y = map(noise(xDistance, yDistance), 0, 1, minWave, maxWave);
    
    //Draw the line
    line(x, y, x,height);
   
    //Draw final dot
    ellipse(x, y, 5, 5);
    
    //Draw Text Above line
    text(int(y), x, y - 20);

    //Draw the Vertex of the connected lines
    vertex(x,y);
    
    //Add to the x Distance
    xDistance += 0.25;
    
    //Set the last X,Y in variables to use them later
    lastX = x; 
    lastY = y;
  }
  
  yDistance += 0.01; //Add to the distance every frame
  
  //Set graph posible location
  vertex(lastX, height); 
  vertex(0, height); 
  
  //Add light blue color
  fill(0, 100, 200, 170);
  
  //Close Shapes
  endShape(CLOSE);
  
  pop();
}