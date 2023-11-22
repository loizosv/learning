//REFERENCE: https://youtu.be/xTTuih7P0c0

function Bullet(playerPos){

	this.pos = createVector(playerPos.x, playerPos.y);
  this.vel = createVector();
  
  this.update = function(){
    
  	this.pos.add(this.vel);
  }  
  
  this.render = function(){
  	
    push();
    stroke(255);
    strokeWeight(5);

    point(this.pos.x, this.pos.y);
  	pop();
  }
}