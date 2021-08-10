const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var con;
var bob_radius = 40;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options = {
		isStatic: false,
		restitution: 0.5,
		friction:1.0,
		density: 1.5
	  } 

	bob1 = Bodies.circle(400,400,bob_radius/2,ball_options)
	World.add(world,bob1);

	bob2 = Bodies.circle(430,400,bob_radius/2,ball_options)
	World.add(world,bob2);

	bob3 = Bodies.circle(460,400,bob_radius/2,ball_options)
	World.add(world,bob3);

	bob4 = Bodies.circle(490,400,bob_radius/2,ball_options)
	World.add(world,bob4);

	bob5 = Bodies.circle(520,400,bob_radius/2,ball_options)
	World.add(world,bob5);

	rope1 = new rope(bob1,roof,-80,0);
	rope2 = new rope(bob2,roof,-40,0);
	rope3 = new rope(bob3,roof,0,0);
	rope4 = new rope(bob4,roof,40,0);
	rope5 = new rope(bob5,roof,80,0);

	

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  rect(roof.position.x,roof.position.y,230,20);

  ellipse(bob1.position.x,bob1.position.y,bob_radius);
  ellipse(bob2.position.x,bob2.position.y,bob_radius);
  ellipse(bob3.position.x,bob3.position.y,bob_radius);
  ellipse(bob4.position.x,bob4.position.y,bob_radius);
  ellipse(bob5.position.x,bob5.position.y,bob_radius);



  textSize(20);
  text("Press UP ARROW to Apply Force", 20,30);
}

function keyPressed()
{
  	if(keyCode === UP_ARROW)
    {
      Matter.Body.applyForce(bob1,{x:0,y:0},{x:30,y:0});
    }
}

