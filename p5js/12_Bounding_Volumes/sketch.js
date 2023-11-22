/**
 *
 * Author  : Loizos Vasileiou (eeu905)
 * Module  : UXS-2071 (Scripted Media)
 * Email   : eeu905@bangor.ac.uk
 * Project : X071_12_Bounding_Volumes
 *
 */

let myImage;
var sizeX = 720;
var sizeY = 480;
var timeCounter;
var stage1, stage2, stage3;

function setup() {
  createCanvas(800, 800);

  myImage = loadImage('1.png');


  resetStages();
}

function draw() {
  background(255);


  



  //loadObjects();

  image(myImage, 45, 150, sizeX, sizeY);
	noFill(); //Empty rectangles inside
  
  
  strokeWeight(8); //Thin Stroke
	stroke(0); //Black Color
  rect(90, 180, 635, 420); //Big
  
  
  strokeWeight(5); //Middle Stroke
  stroke(0,0,255); //Blue Color
  rect(95, 270,145,230); //Left
  rect(575, 300,145,200); //Right
	rect(245,260,375,335); //Center
	rect(390, 185, 70,70); //Up
  
  strokeWeight(3);
  stroke(0,255,0); //Green Color
  rect(98, 275, 85, 50); //Left 1
  rect(140, 305, 45, 80); //Left 2
  rect(170, 365, 45, 80); //Left 3
  rect(180, 405, 60, 90); //Left 3
  
  rect(585, 305,105,30); //Right 1
	rect(680, 310,30,100); //Right 2
  rect(660, 400,40,50); //Right 3
  rect(635, 445,40,30); //Right 2
  rect(610, 470,40,20); //Right 5
  
}

function resetStages() {

  timeCounter = 0;
  stage1 = false;
  stage2 = false;
  stage3 = false;
}

function loadObjects() {

  rect(200, 100, 125, 125);
  ellipse(600, 150, 150);
  triangle(500, 450, 630, 370, 630, 630);
  image(myImage, 115, 370, 260, 180);
}