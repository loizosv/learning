/**
 *
 * Author  : Loizos Vasileiou (eeu905)
 * Module  : UXS-2071 (Scripted Media)
 * Email   : eeu905@bangor.ac.uk
 * Project : X071_07_RandomGaussian
 *
 */

/* Variables Declaration */
var canvasWidth = 400;
var canvasHeight = 200;
var numOfRect = 60;
var array = new Array(numOfRect); //Create a new array
var i; //For Loop

function setup() { 

  /* Create a canvas with Color */
  createCanvas(canvasWidth, canvasHeight);
  background(135);

  /* Create 60 Gaissian Bars */
  for(i=0; i<array.length; i++){
  	
    Array[i] = 0; //Assign 60 elements in the array starting from the first (0)
  }
  
  frameRate(90); //Defult FPS=60
} 

function draw() { 
  
  /* Create a random Gaussian range and store it as an integer variable */
  var randomNum = (int) (randomGaussian(numOfRect/2,15));
  Array[randomNum]++; //Add randomGaussian to every element in the array
  
  for(i=0; i<array.length; i++){
  
    /* Give color to each rectangle, more colorful in the middle */
  	alpha = map(Array[i], 0, width/2, 10,255);
    fill(alpha,30, 110); //(Blue to Purple)
    
    /* Create a sequence of rectangles */
    rect(width/60*i, height, width/60, -(Array[i]) );
    //rect(width/60*i, height/2, width/60, (Array[i]) );
    
  }
}