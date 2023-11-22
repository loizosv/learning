var topBuffer;
var botttomBuffer;
let input;
let displayDiv;
var secondsPerLetter = 0.1 * 1000; //1 second * 1000 milliseconds

function setup() {
  noLoop(); //FPS = 0 (draw function is used once only after setup())
  textAlign(CENTER);
  textSize(50);
  
  // create canvas and buffers
  const canvas = createCanvas(800 , 600);
  topBuffer = createGraphics(width, height/2);
  botttomBuffer = createGraphics(width, height/2);
  
  // Draw on your buffers however you like
  drawTopBuffer();
  drawBottomBuffer();
  
  // Paint the off-screen buffers onto the main canvas
  image(topBuffer, 0, 0);
  image(botttomBuffer, 0, 300);
  
}


function draw(){
  fill(random(255),random(255),random(255))
  rect(width-100,height/2-100,100,100)
}

function drawTopBuffer() {
    topBuffer.background(200);
    topBuffer.fill(0);
    topBuffer.textSize(32);
    topBuffer.text("Input a word to be spelled:", 50, 50);
  
    input = createInput();
    input.position(20, height/4-60);
    input.style("width","740px");
    input.style("height","40px");
    input.style("font-size","40px");
  

    var button = createButton('submit');
    button.position(20, 145);
    button.style("width","750px");
    button.style("height","40px");
    button.style("font-size","30px");
  
    button.mousePressed(visualize);
  
    var button2 = createButton('Stop loop()');
    button2.position(width-90, 240);
    button2.mousePressed(noLoop);
}

function drawBottomBuffer() {
    botttomBuffer.background(160);
    botttomBuffer.fill(0);
    botttomBuffer.textSize(32);
  
    botttomBuffer.text("Spelling word:", 50, 50);
    
  
    displayDiv = createElement("div");
    displayDiv.id = "myDisplayDiv";
    displayDiv.position(20, height/2+100);
    displayDiv.style("width", "10px");
    displayDiv.style("height","500px");
    displayDiv.style("font-size","40px");
    displayDiv.style("display","inline-flex");
}

function visualize() {
  
  loop();
  var infoLabel = createElement('h2', 'You typed: \"' + input.value() + '\"');
  infoLabel.position(20, 205);
  
  let str = input.value().split('');
  
  const interval = setInterval(() => {
        
    var p = createElement("p", str[0] + " ");
    
    p.parent(displayDiv);
    
    str = str.slice(1); //Move to next letter

    if (!str.length) {
      clearInterval(interval);
      noLoop(); //STOP LOOP
    }
  }, secondsPerLetter);
}






