/**
 *
 * Author  : Loizos Vasileiou (eeu905)
 * Module  : UXS-2071 (Scripted Media)
 * Email   : eeu905@bangor.ac.uk
 * Project : X071_05_EllipseGrid
 *
 */

/* Variables Declaration */
var canvasWidth = 500;
var canvasHeight = 500;

function setup() {
  createCanvas(canvasWidth, canvasHeight); //Create Canvas
}

function draw() {
  
  background(0); //Black Background Color
  
  /* Variables Declaration */
  var startX = 20; //Position X
  var startY = 30; //Position Y
  var ellipseSize = 5; //Size of the ellipse
  var spaceBetween = width / 9;//Space between the next circle

  /* Nested For Loops */
  var row,column; //For Loops

  for (row=0; row<9; row++) {
  
    for (column=0; column<9; column++) {
      
      /* Give Color & Brightness to every shape */
      var brightness = map(row,0,9,255,0);
      fill(25,195, 200,brightness); //Fill Turquoise Color
      
      /* Create Ellipse */
      ellipse(startX, startY, ellipseSize, ellipseSize);
      
      /* Change Location and Size */
      ellipseSize += 5;
      startX += spaceBetween;
    }
    
    /* When the row=9 set location to default value(20) */
    ellipseSize = 5;
    startX = 20;
    startY += spaceBetween; 
  }
}