/**
 *
 * Author  : Loizos Vasileiou (eeu905)
 * Module  : UXS-2071 (Scripted Media)
 * Email   : eeu905@bangor.ac.uk
 * Project : X071_01_Frequency Chart
 *
 */

/* Variables Declaration */

//Declare Canvas Attributes
var canvasWidth = 600; //Canvas Width
var canvasHeight = 300; //Canvas Height

var channels = 256; //These are the channels of the different frequencies

function setup() {
  
  /* Create Canvas */
  createCanvas(canvasWidth, canvasHeight);
  colorMode(HSB); //Change Color Mode
  
  /* Declare the Microphone */
  mic = new p5.AudioIn(); //Set the microphone in the project
  mic.start(); //Start the microphone
  
  /* Declare the Fast Fourier Transform (FFT) */
  fft = new p5.FFT(0, channels);
  fft.setInput(mic);
}

function draw() {
  
  //Set Background Color in HSB Color Mode
  background(200,100,100,10);
  
  //Store an array of Frequency Ranges
  var frequencies = ["bass", "lowMid", "mid", "highMid", "treble"];
  
  //Store analysed frequencies in a variable
  var spectrum = fft.analyze();
  
  /* Get the value of the microphone's volume rate */
  //var micLevel = mic.getLevel();
  
  //Get the size for each frequency by dividing it from the width
  myWidth = canvasWidth / channels;
  
  //Draw Frequency Range Chart (Above)
  for (i = 0; i < frequencies.length; i++) {
    
    //Set the Frequency Ranges in a variable
    myFrequency = frequencies[i];
    
    //Display Text
    fill(0);
    noStroke();
    text(myFrequency + ": " + int(fft.getEnergy(myFrequency)), 5, i * 20 + 20);
    stroke(0);
    
    //Draw Chart
    fill(int(fft.getEnergy(myFrequency)), 100, 100);
    rect(100, i * 20+5, int(fft.getEnergy(myFrequency)) * 3, 20)
  }
  
  stroke(0); //Set stroke back to zero
  
  //Create Frequency Analysis of Audio Input (Whole Canvas Chart)
  for (var x = 0; x < spectrum.length; x++) {
    
    /* Store different height for each rectangle of the chart */
    var y = map(spectrum[x], 0, 256, 0, height);
    
    fill(spectrum[x], 100, 90); //Fill the rectangle with color
    rect(x * myWidth, height - y, myWidth, y); //Create Rectangle
  }
}