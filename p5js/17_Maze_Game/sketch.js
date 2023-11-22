/**
 *
 * Author  : Loizos Vasileiou (eeu905)
 * Module  : UXS-2071 (Scripted Media)
 * Email   : eeu905@bangor.ac.uk
 * Project : X071_17_Maze Game
 *
 */

/* Variables Declaration */
//Create Canvas Attributes
var canvasWidth = 900;
var canvasHeight = 800; 

//Create components for the moving objects
var player, box1, box2, box3, box4; //Create a sprite that holds an image
var wallsGroup, fuelGroup; // Create groups to hold the walls and the fuels

//This holds the number of fuels in the endPoint (Final Destination)
var collectedFuels = 0;

//Set a boolean to check the win message
var checkMessage = false; 

/**
 * This function is only called once at the beggining of the game
 * and it creates the canvas, setup the Maze, the end point,
 * the player and the fuels of the game
 */
function setup() { 
 
  //Create canvas
  createCanvas(canvasWidth, canvasHeight); // 400 x 400
  
  /* Setup Maze */
  setupMaze(); //Create the Maze of the Game 
  
  
  /* Create End Point */
  endBox = createSprite(90, height/2+80, 115, 115);
  endBox.shapeColor = color("white");
  endPoint = endBox;
  
  
  /* Create Player   */
  player = createSprite(100,300,30,30);
  player.addImage(loadImage("player.png")); //Set image
  player.maxSpeed = 2; //Set speed
  player.rotateToDirection = true;
  
  //Create Fuels
  createFuelsSprites();
  
} 

/**
 * This setup the maze of the game. Sprites with 
 * different sizes and locations are added to a group of walls.
 */
function setupMaze(){

  //Create a group that holds walls
  wallsGroup = new Group(); 
  
  // Create outer walls (BLACK BOX) 
  var northWall = createSprite(0,0,width*3,25); //UP WALL
  northWall.shapeColor = color("black");
	var southWall = createSprite(0,height,width*3,25); //DOWN WALL
  southWall.shapeColor = color("black");
  var westWall = createSprite(0,width,25,height*3); //LEFT WALL
  westWall.shapeColor = color("black");
  var eastWall = createSprite(width,0,25,height*3); //RIGHT WALL
  eastWall.shapeColor = color("black");
  
  //Create BROWN WALLS
  var mazeWall1 = createSprite(170,400,10,450); //WALL 1
  mazeWall1.shapeColor = color("brown");
  var mazeWall2 = createSprite(400,170,470,10); //WALL 2
  mazeWall2.shapeColor = color("brown");
  var mazeWall3 = createSprite(400,630,470,10); //WALL 2
  mazeWall3.shapeColor = color("brown");
  
  //Create BLUE WALLS
  var mazeWall4 = createSprite(480,300,300,10); //WALL 4
  mazeWall4.shapeColor = color("blue");
 	var mazeWall5 = createSprite(630,400,10,210); //WALL 5
  mazeWall5.shapeColor = color("blue");
  var mazeWall6 = createSprite(480,500,300,10); //WALL 6
  mazeWall6.shapeColor = color("blue");
  
  //Create BLACK WALLS
  var mazeWall7 = createSprite(90,height/2,155,10); //WALL 7
  mazeWall7.shapeColor = color("black");
  var mazeWall8 = createSprite(760,height/2,255,10); //WALL 8
  mazeWall8.shapeColor = color("black");

  //Add outer walls in the group 
  wallsGroup.add(northWall); //UP
  wallsGroup.add(southWall); //DOWN
  wallsGroup.add(westWall); //LEFT
  wallsGroup.add(eastWall); //RIGHT
  wallsGroup.add(mazeWall1); //BROWN
  wallsGroup.add(mazeWall2); //BROWN
  wallsGroup.add(mazeWall3); //BROWN
  wallsGroup.add(mazeWall4);  //BLUE
  wallsGroup.add(mazeWall5);  //BLUE
  wallsGroup.add(mazeWall6);  //BLUE
  wallsGroup.add(mazeWall7);  //BLACK
  wallsGroup.add(mazeWall8);  //BLACK
}

/**
 * This method creates and add the fuels to a group
 */
function createFuelsSprites(){

  //Create the Fuels 
  fuel1 = createSprite(95, 200, 20, 20);
  fuel1.addImage(loadImage("fuel.jpg"));
  fuel2 = createSprite(750, 250, 20, 20);
  fuel2.addImage(loadImage("fuel.jpg"));
  fuel3 = createSprite(width/2+50, height/2-50, 20, 20);
  fuel3.addImage(loadImage("fuel.jpg"));
  fuel4 = createSprite(450,600,20,20);
  fuel4.addImage(loadImage("fuel.jpg"));

  /*fuel1.debug = true;
  fuel2.debug = true;
  fuel3.debug = true;
  fuel4.debug = true;*/
  
  //Add fuels to a Group
  fuelGroup = new Group(); //Create a group that holds the boxes
	
  fuelGroup.add(fuel1);
  fuelGroup.add(fuel2);
  fuelGroup.add(fuel3);
  fuelGroup.add(fuel4);
}

/**
 * The draw function is used to get changable 
 * operation in the game play
 */
function draw() { 
  
  //Set background color
  background(150);

  //Draw components
  drawSprites();
  
  //Set Start/End Text on Canvas
  textSize(20);
  fill(0,255,0);
  text("S T A R T", 45,350);
  fill(255,0,0);
  text("End Point", 48,485);
  
  //Set Score Message on Canvas
  textSize(40);
  fill(255,255,0);
  text("Score = " + collectedFuels,700,50);
  
  //Check colliders
  player.collide(wallsGroup);
  fuelGroup.collide(player);
  fuelGroup.collide(fuelGroup);
  fuelGroup.collide(wallsGroup);
  
  //Move the player with mouse input
  if(mouseIsPressed){
    player.attractionPoint(1, mouseX, mouseY);  
  }
  
  //For every element in the Group of Fuels
  for(i=0; i<fuelGroup.size(); i++){

    //Check if their overlaping with the endPoint
    if(fuelGroup[i].overlap(endPoint)){

      //Add Score
      collectedFuels++;
      
      //Remove Fuel from the Canvas
      fuelGroup[i].remove();
      
      //Check if the score is equal with 4
      if(collectedFuels == 4){
                
        //Set a boolean to true
        checkMessage = true;
        
      }
 	  }
    /*
    if(fuelGroup[i].overlap(wallsGroup)){
    
      fuel1.setCollider("rectangle", 20, 20, 30, 35);
      fuel2.setCollider("rectangle", 20, 20, 30, 35);
      fuel3.setCollider("rectangle", 20, 20, 30, 35);
      fuel4.setCollider("rectangle", 20, 20, 30, 35);
    }*/
  }
  
  //If boolean is true
  if(checkMessage == true){
    
    //Display Win Message
    textSize(40);
  	text("YOU WON!", width/2-90,height/2);
    //Display Reset Message
    textSize(20);
    text("To reset the game click PLAY...", width/2-105, height/2+50);
  }  
}