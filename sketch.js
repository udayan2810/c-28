const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ball, slingShot,bin;
function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  ball = new Bob (1000,100,50);
  slingShot = new Launcher(ball.body,{x:200,y:100});
  bin  = new Ground (1000,290,120,150)
}

function draw() {
  background("Purple");
  Engine.update(engine);
  strokeWeight(4);  
  ground.display();
  ball.display();
  slingShot.display();
  bin.display();
    drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingShot.fly();
}