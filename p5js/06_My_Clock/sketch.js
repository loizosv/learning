/**
 *
 * Author  : Loizos Vasileiou (eeu905)
 * Module  : UXS-2071 (Scripted Media)
 * Email   : eeu905@bangor.ac.uk
 * Project : X071_06_My_Clock
 *
 */

var angle = 0.0;
//lets you set the center of the circle
var offset = 200;
//lets you set how big the circle is
var scalar = 200;
let radius;

function setup() { 
  createCanvas(800, 800);
  
  
  frameRate(1); // 1 FPS
  
  radius = min(width, height) / 2;
} 

function draw(){
  console.log(hour() +":"+ minute() + ":" + second());
  background(220);
  stroke(0);
  drawClockOutline();
  secondPointer();
  minutePointer();
  hourPointer();
}

function drawClockOutline(){
  
  noFill(5);
  strokeWeight(4);
  ellipse(width/2,height/2,500,500);

  
  
  //Hours
  fill(0);
  for(var i=0; i<360; i++){
    if(i%30 == 0){
      var x = width/2-5;
      var y = offset;
      


      angle = radians(i);
      x += cos(angle) * scalar;
      y += sin(angle) * scalar;

      ellipse(x, y + height/4, 10, 10);
    }
  }
}

function hourPointer(){
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  stroke(255,0,0);
  strokeWeight(7);
  line(width/2, height/2, width/2 + cos(h) * (radius * 0.35), height/2 + sin(h) * (radius * 0.35));

}

function minutePointer(){
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  stroke(0,255,0);
  strokeWeight(5);
  line(width/2, height/2, width/2 + cos(m) * (radius * 0.42), height/2 + sin(m) * (radius * 0.42));
}

function secondPointer(){
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  stroke(0,0,255);
  strokeWeight(2);
  line(width/2, height/2, width/2 + cos(s) * (radius * 0.5), height/2 + sin(s) * (radius * 0.5));
}








