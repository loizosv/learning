/**
 *
 * Author  : Loizos Vasileiou (eeu905)
 * Module  : UXS-2071 (Scripted Media)
 * Email   : eeu905@bangor.ac.uk
 * Project : X071_20_Arcade Game
 *
 */

/* Variables Declaration */

//Declare Canvas Attributes
var canvasWidth = 1000;
var canvasHeight = 1000;

//Declare Player
var player; //Space ship
var playerShield; //Player's Shield

//Set a boolean to true when the player is moving or attacking or adding a shield
var isMoving = false;
var isAttacking = false;
var setShield = false;

//Declare Bullets & Audio
var bullets = [];
var laserAudio;

//Animator Controller
function preload(s) {

  //Set animator for the Player
  animator_default = loadAnimation("spaceship_Default.png");
  animator_moving = loadAnimation("spaceship_IsMoving.png");
  
  //Set animator for the Shield
  animator_shield_default = loadAnimation("shield_orange.png");
  animator_shield_attacked = loadAnimation("shield_red.png");
}

//Set up Canvas & Components
function setup() {

  //Create Canvas
  createCanvas(canvasWidth, canvasHeight);

  //Set audio to the bullet
  //laserAudio = loadSound('assets/laser.mp3');
  
  //Set the obstacles to the canvas
  setupObstacles();
  
  //Provide User Information
  var h1 = createElement("h1","Player Information");
  h1.id("h1");
  
  var h2 = createElement("h21","You can move the character with using the Arrow Key");
	h2.id("h2");
  
  var h3 = createElement("h3", "You can attack the player by using the SHIFT Key");
	h3.id("h3"); 
  
  var h4 = createElement("h4", "You can add the shield on the player with using ALT Key");
  h4.id("h4");
}

function draw() {

  //Set White Background Color
  background(255);
  
  //Set Frame Rate to 50 
  frameRate(50);

  //Draw Sprites in the canvas
  drawSprites();

  //Stop Player from moving unless an arrow is pressed
  player.setSpeed(0, 0);
	
  //Set the State Machine to the Player
  setStateMachine();
  
  //Check if a button is pressed
  checkButtons();
}

function checkButtons() {

  //If the buttons is not pressed the player is not moving
  isMoving = false;
	isAttacking = false;
  setShield = false;
  
  //Check single pressed Keys
  if (keyIsDown(UP_ARROW)) {
    player.setSpeed(3, 270);
    isMoving = true;
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.setSpeed(3, 90);
    isMoving = true;
  }
  if (keyIsDown(LEFT_ARROW)) {
    player.setSpeed(3, 180);
    isMoving = true;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.setSpeed(3, 0);
    isMoving = true;
  }

  //Check multiple pressed Keys
  if (keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)) {
    player.setSpeed(3, 315);
    isMoving = true;
  }
  if (keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)) {
    player.setSpeed(3, 45);
    isMoving = true;
  }
  if (keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW)) {
    player.setSpeed(3, 135);
    isMoving = true;
  }
  if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) {
    player.setSpeed(3, 225);
    isMoving = true;
  }

  //Check Attacking Keys
  if (keyIsDown(ALT)) {
    setShield = true;
  }

  if (keyIsDown(SHIFT)) {
    isAttacking = true;
  }
}

function setStateMachine() {

  //Add Movement Behaviour
  if (isMoving == true) {
    player.addAnimation("default", animator_moving);
  } else {
    player.addAnimation("default", animator_default);
  }

  //Add Attack Behaviour
  if(isAttacking == true) {

    //Throw bullets
		var bullet = createSprite(player.position.x, player.position.y, 10, 10);
		bullet.setSpeed(30,0);
    bullet.rotateToDirection=player.position;
    
    //Add audio 
    laserAudio.play();
    
  }
  var playerShield;
  
  if(setShield == true){
  	playerShield = ellipse(player.position.x, player.position.y, 150, 150);   
		playerShield.addAnimation("default", animator_shield_default);
  }
  
  
}

function setupObstacles(){
	
  //Create the player in the canvas
  player = createSprite(500, 500, 10, 10);
  player.maxSpeed = 50;
  player.rotateToDirection = true;
  
  //Create the enemy in the canvas
  enemy = createSprite(width-200,height-200,600,600);
  enemy.addImage(loadImage("assets/enemyboss.jpg"));
}