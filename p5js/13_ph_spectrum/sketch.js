var canvasWidth = 700;
var canvasHeight = 400;
var arc_diameter = canvasWidth-100; // 400-100 = 300 
var r = arc_diameter /2; //300/2 = 150
var startPos = 180; //start at 180 degrees nt side of sircle)
var theta = 12.9; // Angle of each arc
var arc_start_at_degree = 180;
var arc_finish_at_degree = 192.9;

let coords = {x: 0, y: 0};
let input1 = 5.1;
let input2 = 12.3;

function setup() {
  
  
  
  
  //SETUP CANVAS:
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("test")
  canvas.style("display", "block")

  
  background(220); //set background canvas
  angleMode(DEGREES); //change RADIANS to DEGREES
  translate(width/2, height-50); //Set 0,0 position at center of canvas
  noStroke();
    
  //Draw Levels:
  draw_ph_spectrum();

  //Draw Labels:
  draw_ph_labels();  
  
  //Draw minumum and maximum pH of a plant:
  draw_preferred_ph(input1, input2);
}

function draw_ph_spectrum(){

  var arrayOfColours = [
    color(231,31,49), color(238,82,67), color(238,108,72), color(243,151,110),
    color(247,241,144), color(235,232,65), color(146,203,114), color(43,178,79),
    color(59,165,165), color(43,122,191), color(65,97,172), color(59,84,167),
    color(65,73,158), color(57,49,141)
  ];
  
  for(var i =0; i<14; i++){
    
    fill(arrayOfColours[i]); //Get colour from array
    arc(0, 0, r*2-25, r*2-25, arc_start_at_degree, arc_finish_at_degree, PIE);
    
    arc_start_at_degree += theta;
    arc_finish_at_degree += theta;
  }
}

function draw_ph_labels(){
  
  arc_start_at_degree = 180; //reset start point
  textSize(25); //change font size
    
  for(var i=0; i<15; i++){ //0-14  
    
    //convert polar to cartesian coordinates:
    var y = r * sin(arc_start_at_degree);
    var x = r * cos(arc_start_at_degree);
    
    //Apply offsets to justify level labels to arc levels
    if(i<4){ x-=17; y+=5; }
    else if(i<4 || i<7){ x -= 11; y -= 3; }
    else if(i==7){ x-=5; y-=4; }
    else if(i<8 || i<12){ x-=4; y-=3; }
    else { x+=2; y+=2; }

    text(i, x,y); //add text
    
    arc_start_at_degree += theta; //Increase degrees by 12.9
  }
}

function draw_preferred_ph(minValue, maxValue){
  stroke(0);
  strokeWeight(1);
  
  var startDeg = minValue*11.9+180+Math.trunc(minValue);
  var endDeg = maxValue*11.9+180+Math.trunc(maxValue);
  
  //Draw arc representing minimum and maximum pH levels!
  squareColor = color(100, 50, 100);
  squareColor.setAlpha(100);
  fill(squareColor);
  
  arc(0,0,r*2,r*2,startDeg,endDeg,PIE);
  
  ///DRAW LABELS OF MIN AND MAX VALUES 
  noStroke();
  fill(0, 102, 153);

  text("MIN pH:  " + minValue, -340,-320)
  text("MAX pH:  " + maxValue, 160, -320);
  

}