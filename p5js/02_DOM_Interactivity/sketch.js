/**
 *
 * Author  : Loizos Vasileiou (eeu905)
 * Module  : UXS-2071 (Scripted Media)
 * Email   : eeu905@bangor.ac.uk
 * Project : X071_14_Dom Interactivity
 *
 */

/* Variables Declaration */

//Declare Canvas Attributes
var canvasWidth = 500;
var canvasHeight = 300;

//Declare a Slider for each color for the Background Color
var rCanvasSlider, gCanvasSlider, bCanvasSlider;

//Declare a Slider for each color for the Text Color
var rTextSlider, gTextSlder, bTextSlder;

//Declare a Slider for the Text Speed
var speedSlider;
var speedValue; //This gets the value of the slider

//Declare the text for the Canvas
var defaultText = "Hello World!"; //This it the default Text
var currentText = ""; //This is the changable Text

//User Input Text Field
var textField;
var inputText; //This is the text from the User Input

//This variable controls the text location on the canvas
var controlXpos = 0;

//This variable holds the TextFont 
var selectedFont;

function setup() {
  
	/* Create the title */
  var h1 = createElement("h1","Control color and content");
  h1.id("title");
  
  /* Create the canvas */
  createCanvas(canvasWidth, canvasHeight);

  /* Create the sliders for the Background Color */
  var h2 = createElement("h2", "Control Background Color");
  h2.id("headers");
  h2.position(10,400);
  
  var h2i = createP("RED");
  h2i.position(20,450);
  rCanvasSlider = createSlider(0,255,random(255));
  rCanvasSlider.position(70, 460);
  var h2ii = createP("GREEN");
  h2ii.position(0,480);
  gCanvasSlider = createSlider(0,255,random(255));
  gCanvasSlider.position(70, 495);
  var h2iii = createP("BLUE");
  h2iii.position(10,515);
  bCanvasSlider = createSlider(0,255,random(255));
  bCanvasSlider.position(70, 525);
  
  /* Create the sliders for the Text Color */
  var h3 = createElement("h3","Control Text Color");
  h3.id("headers");
  h3.position(350,390);
  
  var h3i = createP("RED");
  h3i.position(350,440);
  rTextSlider = createSlider(0,255,random(255));
  rTextSlider.position(400,450);
  var h3ii = createP("GREEN");
  h3ii.position(330,470);
  gTextSlider = createSlider(0,255,random(255));
  gTextSlider.position(400,485);
  var h3iii = createP("BLUE");
  h3iii.position(340,505);
  bTextSlider = createSlider(0,255,random(255));
  bTextSlider.position(400,515);
  
	/* Create User Input */
  var h4 = createElement("h4", "Control Font & Speed");
  h4.id("headers");
  h4.position(650,380);
  var h4i = createP("Type Text here :");
	h4i.position(650,440);
	textField = createInput(defaultText);
	textField.position(760,455);
  
  /* Create a drop menu box for the Text Font */
  var h4ii = createP("Choose Font :");
  h4ii.position(660,470);
  dropMenu = createSelect();
  dropMenu.position(760, 485);
  dropMenu.option('NORMAL');
  dropMenu.option('BOLD');
  dropMenu.option('ITALIC');
  dropMenu.changed(mySelectEvent);
  
  /* Create a slider for the Text Speed */
  var h4iii = createP("Set Speed :");
  h4iii.position(680,505);
  speedSlider = createSlider(0,100,random(100));
  speedSlider.position(760,515); 
  
  /* Create Information Paragraph */
  var h5 = createElement("h5","Information");
  h5.id("title");
  
  h5.position(125, 475);
  var h5i = createP("1) Control Backround Color - Controls the color for the background. "+
    "Each slider represent 1 of the basic colors (red, green, blue).");
  h5i.id("info");
  h5i.position(30,600);
	var h5ii = createP("2) Control Text Color - Controls the Text Color. " + 
    "Each slider represent 1 of the basic colors (red, green, blue).");
  h5ii.id("info");
  h5ii.position(30,660);
  var h5iii = createP("3) Control Font & Speed - The first text Field is getteing the "+
		"user Input from the keyboard and return it to the canvas. The second drop box menu "+
      "sets the font of the Text and the last slider controlls the speed of the moving text!");
  h5iii.id("info");
  h5iii.position(30,700);
}

/* This method return the drop box 
 * value and store it in a variable
 */
function mySelectEvent() {
  selectedFont = dropMenu.value();
}

/* The function draw creates all the DOM input elements
 * Those elements control some values in the Canvas
 */
function draw() {

  /* Get the Slider Values for Background */
  var rSliderValueB = rCanvasSlider.value();
  var gSliderValueB = gCanvasSlider.value();
  var bSliderValueB = bCanvasSlider.value();
  
  /* Set and/or Change the Background Color of the Canvas */
	background(rSliderValueB, gSliderValueB, bSliderValueB);
  
  /* Change Text Color when the BackGround is Black or White */
  if(rSliderValueB==0 && gSliderValueB==0 && bSliderValueB==0){
 		
  	fill(255,255,255);
  }
  if(rSliderValueB==255 & gSliderValueB==255 && bSliderValueB==255){
  
    fill(0,0,0);
  }
  
  /* Set the text on the Canvas */
  currentText = textField.value(); //Set the Text to the Default
	
  textSize(45);
  
  if(selectedFont == "NORMAL"){
     textStyle(NORMAL);
	}
  if(selectedFont == "BOLD"){
     textStyle(BOLD);
	}
  if(selectedFont == "ITALIC"){
     textStyle(ITALIC);
	}
  text(currentText, controlXpos, canvasHeight / 2);
  
  if(textField.value() == ""){
  
    currentText = textField.value("Empty");
  }
  
  speedValue = speedSlider.value();
  frameRate(speedValue);
  
  controlXpos++;
  if (controlXpos >= canvasWidth) {

    controlXpos = -500;
  }
  
  var rSliderValueT = rTextSlider.value();
  var gSliderValueT = gTextSlider.value();
  var bSliderValueT = bTextSlider.value();
  fill(rSliderValueT, gSliderValueT, bSliderValueT);
  
}