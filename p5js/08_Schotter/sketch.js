/**
 *
 * Author  : Loizos Vasileiou (eeu905)
 * Module  : UXS-2071 (Scripted Media)
 * Email   : eeu905@bangor.ac.uk
 * Project : X071_08_Schotter
 *
 */

/* Variables Declaration */
var canvasWidth = 350;
var canvasHeight = 550;

var rows = 20; //Number of possible rows
var cols = 12; //Number of possible columns

var movement = 25;

function setup() { 
  
  createCanvas(canvasWidth, canvasHeight);
  frameRate(15);
}  

function draw(){

  //Set background Color every frame
  background(255);

  
  for(var x=0; x<rows; x++){
    
  	for(var y=0; y<cols; y++) {
      
      push();
      
      translate(movement+(y*25), movement+(x*25));
      
      
      var randomValue = x*2;
      var randomRotate = random(-randomValue, randomValue);
      
      fill(color(random(255),random(255), random(255)));
    	rotate(radians(randomRotate));  
      
      rect(0,0, 25, 25);
      
      pop();
    }
  }
}