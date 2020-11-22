const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var bin1,bin2,bin3;

function preload() {
	
}

function setup() {
  createCanvas(800,200);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,190,800,10);
  ball = new Paper(50,350,50,50);

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Gainsboro");
  
  drawSprites();
}

function keyPressed() {
  if (keyDown(DOWN_ARROW)) {
    Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x: 85, y: -85});
  }
}