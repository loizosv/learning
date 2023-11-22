/**
 *
 * Author  : Loizos Vasileiou (eeu905)
 * Module  : UXS-2071 (Scripted Media)
 * Email   : eeu905@bangor.ac.uk
 * Project : X071_18_Rotating_Sphere
 *
 */

const globe = [];
const r = 170;
const total = 20;
let angleX = 0;
let angleY = 0;

function setup() {
  createCanvas(600, 600, WEBGL);

  for (let i = 0; i < total + 1; i++) {
    globe[i] = [];
    const lat = map(i, 0, total, 0, PI);
    for (let j = 0; j < total + 1; j++) {
      const lon = map(j, 0, total, 0, TWO_PI);
      const x = r * sin(lat) * cos(lon);
      const y = r * sin(lat) * sin(lon);
      const z = r * cos(lat);
      globe[i][j] = createVector(x, y, z);
    }
  }
}

function draw(){
  background(51);
  rotateX(angleX);
  rotateY(angleY);
  fill(255);
  stroke(1);
  for (let i = 0; i < total; i++) {
    beginShape(TRIANGLE_STRIP);
    for (let j = 0; j < total + 1; j++) {
      const v1 = globe[i][j];
      vertex(v1.x, v1.y, v1.z);
      const v2 = globe[i + 1][j];
      vertex(v2.x, v2.y, v2.z);
      vertices = [v1,v2];
    }
    endShape();
  }
  
  //Draw Cylinders
  for (i = 0; i < total; i ++) {
    for (j = 0; j < total; j ++) {
      const v1 = globe[i][j];
      const v2 = globe[i + 1][j];
      
      push();
      noStroke();
      translate(v1.x,v1.y,v1.z)
      
      normalMaterial();
      sphere(5,10);
      pop();
    }
  } 
  
  //Rotate on X & Y axes 
  angleX += 0.005;
  angleY += 0.006;  
}