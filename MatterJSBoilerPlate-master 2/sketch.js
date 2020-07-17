
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options;
var rectangle1,rectangle2,rectangle3;
var ground;
var paperball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
	world = engine.world;
	ground=createSprite(600,685,1800,20);
	rectangle1=createSprite(600,660,200,20);
	rectangle2=createSprite(690,590,20,150);
	rectangle3=createSprite(500,595,20,150);
	rectangle3.shapeColor=("red")
	rectangle2.shapeColor=("red");
	rectangle1.shapeColor=("red");
	ground.shapeColor=("blue");
	var options={
		isStatic:false,
	   restitution:0.3,
	   friction:0.5,
	   density:1.2,
	}
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
 Matter.Bodies.circle(200,200,5 ,options,5);

  drawSprites();
 
}



