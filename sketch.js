
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400, 690, width, 20);

	p1 = new Paper(20, 680);

	d1 = new Dustbin(650, 670, 180, 20);
  d2 = new Dustbin(570, 630, 20, 100);
  d3 = new Dustbin(740, 630, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  
  p1.display();

  d1.display();
  d2.display();
  d3.display();
  

 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(p1.body, p1.body.position,{x:40,y:-40});
  }
}

