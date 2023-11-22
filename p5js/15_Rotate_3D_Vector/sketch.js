/**
 *
 * Author  : Loizos Vasileiou (eeu905)
 * Module  : UXS-2071 (Scripted Media)
 * Email   : eeu905@bangor.ac.uk
 * Project : X071_15_Rotate_3D_Vector
 *
 */

function setup(){
  createCanvas(400,400,WEBGL)
}

function draw(){
  background(200)
  
  translate(0,0,0);
  noFill();
  
  rotateY(millis() / 1000 * 5);
  rotateX(millis() / 1000 +40);
  rotateZ(millis() / 1000 - 50);
  
  sphere(50);
  
  
  
  line(0, 1000, 1000, 0, 0, 0) //line(x1, y1, z1, x2, y2, z2)
}
