const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var plinko=[];
var division=[];
var particle= [];
var ground;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height-5,width,5);

  for(var k=0;k<=width;k=k+80){
      division.push(new Division(k,height-150,10,300));
  }

  for(var y=300;y<=450;y=y+50){

    for(var k=0;k<=width;k=k+50){

      plinko.push(new Plinko(k,y,5));

  }

}

}

function draw() {

  Engine.update(engine);
  background(255,255,255);

   if(frameCount%25===0){

    particle.push(new Particle(random(10,width-10),0,5));

   }

   for(k=0;k<particle.length;k++){

    particle[k].display();

    }

  for(k=0;k<division.length;k++){
      division[k].display();
  }

  for(var i=0;i<plinko.length;i++){

      plinko[i].display();

}
  
  ground.display();

}