const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object, ground, box1, box2, bird, pig1, log1;

function setup() {
  createCanvas(1200,400);                
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,390,1200,20)

  bird = new Bird(100,100);

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,330,70,70);
  pig1 = new Pig(810,350);
  log1 = new Log(810,200,250,PI/2);
}                                                           
                        
function draw() {
  background(0);
  Engine.update(engine);

  ground.display();
  bird.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();

}
