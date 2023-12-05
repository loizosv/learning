function setup() {
  
  w = min(windowWidth,windowHeight)
  createCanvas(w, w);
  background(200);
  for(n = 0; n<height; n+=height/40){
    beginShape();
    curveVertex(0,n)
    for (i = 0; i < width; i+=width/20) {
      var d = dist(i,n,width/2,n)
      curveVertex(i,n-noise(n+i*0.08)*(width/2-d))
      fill(random(50,200),random(50,200),random(50,200))
    }
    curveVertex(width,n)
    curveVertex(width,n)
    endShape();
    }
}


function draw() {
  
}