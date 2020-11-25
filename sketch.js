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
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,390,800,10);
  ball = new Paper(250,100,50);
  bin1 = new Dustbin(645,335,10,60);
  bin2 = new Dustbin(700,360,100,10);
  bin3 = new Dustbin(755,335,10,60);

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Gainsboro");
  
  ball.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();

  drawSprites();
}

function keyPressed() {
  if (keyDown(UP_ARROW)) {
    Matter.Body.applyForce(ball.body, ball.body.position, {x: 85, y: -85});
  }
}