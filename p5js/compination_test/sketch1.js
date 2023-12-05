/**
 *
 * Author  : Loizos Vasileiou (eeu905)
 * Module  : UXS-2071 (Scripted Media)
 * Email   : eeu905@bangor.ac.uk
 * Project : X071_10_Pie_Chart_Results
 *
 */

/* Variables Declaration */
var pieChartSize = 400;
var respondentDataInputArray = [100,200,300,400,1000]; //Holds the number of answers for each question
var sum = total(respondentDataInputArray); //Holds the sum of the answers
var percentagesArray = [respondentDataInputArray.length]; //Depending on each answer from 5 seperete answers by persentage
var chartArray = [respondentDataInputArray.length]; //Holds 5 arcs to present a pie chart
var answersArray = ["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"];
var rectX = 500; //holds space between the status rectangles (in width)
var rectY = 100; //holds space between the status rectangles (in height)
var canvasWidth = 1000; 
var canvasHeight = respondentDataInputArray.length * 100; //Dynamic Height

/* SETUP CANVAS */
function setup() {
  
  var myCanvas = createCanvas(canvasWidth, canvasHeight); //Create the Canvas to draw the Pie Chart
  myCanvas.parent("canvas1");
  //Set a White Background Color on the Canvas
  
  /* Draw Chart after calculation */
  calculateAngles(); //This method will calculate the angle for the chart points
  pieChart(pieChartSize, chartArray); //Draw Pie Chart
}

/* DO CALCULATION */
function calculateAngles(){
  
  var persentageMultiplyer = 100 / sum; //Add the persentage of the sum in a variable

  for(i=0; i<respondentDataInputArray.length; i++){

    //Add the persentage of the sum to an array of persentages
    percentagesArray[i] = respondentDataInputArray[i] * persentageMultiplyer;
     
    chartArray[i] = percentagesArray[i] * 3.6; //Hold degrees of each part in the array
  }
    
}


function pieChart(diameter, data) {
  background(200);
  /* Add title to show how many people had answered */
  textSize(50);
  textStyle(BOLD);
  text("Out of " + sum + " people",450,50);
  textStyle(NORMAL);
  
  var lastAngle = 0;
  
  for (var i=0; i<data.length; i++) {
    
    var from = color(random(100,255),random(100,255),random(100,255));
		var to = color(random(100,255), random(100,255), random(100,255));
		colorMode(RGB); // Try changing to HSB.
		var interA = lerpColor(from, to, 0.33*i);
    
    if(i==0){
    	fill(from); //Add random Color
    }
    else if(i>0){
    	fill(interA); //Add random Color
    }
    else if(i==data.length){
    	fill(tp); //Add random Color
    }
    
    /* DRAW PIE CHART */
    arc(25+pieChartSize/2, height/2, 	//Arguments : x/y coordinate of the arc's ellipse
        diameter, diameter, 											  	//width/height of the arc's ellipse by default
        lastAngle, lastAngle+radians(chartArray[i]));	//angle to start/stop the arc, specified in radians
    
    lastAngle += radians(chartArray[i]); //Add to last angle depenting on the next Arc
    
    /* DRAW STATUS OF THE PIE CHART */
    rect(rectX,rectY,20,20); 
    
    textSize(20); //Change the size of the text
    
    var percentagesText = text(nf(percentagesArray[i], 2,2), rectX+35, rectY+15); //Remove Decimal numbers
    var str = "         % , " + answersArray[i] + " , ("+respondentDataInputArray[i]+" people answered)";
    
    text(str,rectX+35,rectY+15);
    
    rectY+=80; //Move next point of status
    
  } //-End of For Loop 
}

function total(array){
    var sum = 0;
    
    for(var i=0; i<array.length; i++){   
        sum+= array[i];
    }
    return sum;
}