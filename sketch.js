const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var log6,chain;
var ground;
var bob;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,100,1200,20);
    
   
    bob = new Bob(600,300,60);
    

    chain = new Slingshot(bob.body,ground.body);

    
   
}

function draw(){
    background("blue");
    Engine.update(engine);
   // log6.display();
    bob.display();
    chain.display();

   

    
}





