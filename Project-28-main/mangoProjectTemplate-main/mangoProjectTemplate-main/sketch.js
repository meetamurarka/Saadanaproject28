
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var launchingForce = 300;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1000,70,30);
	mango2=new mango(900,130,30);
	mango3=new mango(850,100,30);
	mango4=new mango(1000,5,30);
	mango5=new mango(1100,110,30);
	mango6=new mango(900,1,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj= new Stone(230,412.5,40);
//made correction here
launcherObject=new launcher(stoneObj.body,{x:235,y:420})
// I have added this
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1300,
    height: 600,
    wireframes: false
  }
});
	Engine.run(engine);

}

function draw() {

  background(230);
 
  image(boy ,200,340,200,300);


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display(); 
  stoneObj.display();
  groundObject.display();
  launcherObject.display();

  // we have to detect collision between stone and mango so added this
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);

}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcherObject.fly();
}

function keyPressed(){
  if(keyCode===32){
    // I only changes Boby b from small to capital
    Matter.Body.setPosition(stoneObj.body, {x:235,y:420})
    launcherObject.attach(stoneObj.body);

  }
}
// We have to create function detect collision.
function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

