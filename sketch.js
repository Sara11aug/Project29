const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var surface1, surface2;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15, block16, block17;
var block18, block19, block20;
var block21, block22, block23;
var block24;
var block25;
var slingShot,polygon,polygonImage;

function preload(){
    polygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20);
    surface1 = new Ground(355,400,220,10);
    surface2 = new Ground(655,300,160,10);

    block1 = new PinkBlock(265,374,30,40);
    block2 = new PinkBlock(295,374,30,40);
    block3 = new PinkBlock(325,374,30,40);
    block4 = new PinkBlock(355,374,30,40);
    block5 = new PinkBlock(385,374,30,40);
    block6 = new PinkBlock(415,374,30,40);
    block7 = new PinkBlock(445,374,30,40);

    block13 = new BlueBlock(295,334,30,40);
    block14 = new BlueBlock(325,334,30,40);
    block15 = new BlueBlock(355,334,30,40);
    block16 = new BlueBlock(385,334,30,40);
    block17 = new BlueBlock(415,334,30,40);

    block21 = new GreenBlock(325,294,30,40);
    block22 = new GreenBlock(355,294,30,40);
    block23 = new GreenBlock(385,294,30,40);

    block25 = new YellowBlock(355,254,30,40);

    block8 = new PinkBlock(595,274,30,40);
    block9 = new PinkBlock(625,274,30,40);
    block10 = new PinkBlock(655,274,30,40);
    block11 = new PinkBlock(685,274,30,40);
    block12 = new PinkBlock(715,274,30,40);

    block18 = new BlueBlock(625,234,30,40);
    block19 = new BlueBlock(655,234,30,40);
    block20 = new BlueBlock(685,234,30,40);

    block24 = new GreenBlock(655,194,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw(){
    background(rgb(160,82,45));
    //background(rgb(101,67,33));
    textSize(20);
    textFont(BOLD);
    stroke("black");
    fill("black");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,50);

    ground.display();
    surface1.display();
    surface2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();

    block21.display();
    block22.display();
    block23.display();

    block25.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block18.display();
    block19.display();
    block20.display();

    block24.display();

    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);

    slingShot.display();
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased() {
    slingShot.fly();
}