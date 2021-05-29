const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies; 
var engine,world,ground,ball,box1;               
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;


  //add objects or bodies
  box1=Bodies.rectangle(200,200,50,50);
  World.add(world,box1);
  var opt_ground={
    isStatic:true
  }
  ground=Bodies.rectangle(0,380,800,20,opt_ground);
  World.add(world,ground);
  //add ball object 
  var opt_ball={
   restitution:0.8 
  }
  ball=Bodies.circle(100,100,50,opt_ball);
  World.add(world,ball);

  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
   
  rect(box1.position.x,box1.position.y,50,50);


  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50);
}