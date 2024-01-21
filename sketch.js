const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var target, bow, back;
var targetI, bowI, backgroundI;
var angle,bowAngle;
var arrows = []



function preload(){
    targetI = loadImage("assets/target.png")
    bowI = loadImage("assets/bow.png")
    backgroundI = loadImage("assets/background.jpg")
   
}
function setup(){
    createCanvas(1200, 600)
    engine = Engine.create();
    world = engine.world;

    // angle= -40;
    // bowAngle= 0

    target = Bodies.circle(600, 80, 150, {isStatic :true})
    World.add(world, target);

    bow = new Bow(640,530,80,100)
    
   
    

}
function draw(){
    background("red")
    image(backgroundI, 0,0, 1200, 600)
    Engine.update(engine);
    image(targetI, target.position.x, target.position.y, 150, 150);
    bow.show()

    for(var i=0 ; i< arrows.length ; i++){
        if(arrows[i] != undefined){
            arrows[i].show()
        }
    }
    
    

       
}

function keyPressed(){
    if(keyCode == 32){
        var posX= bow.body.position.x;
        var posY = bow.body.position.y;
        var angle = bow.body.angle

        var arrow = new Arrow(posX, posY, 30, 130,angle)
        Matter.Body.setAngle(arrow.body, angle)
        arrows.push(arrow)
        
    
   
    }
}

function keyReleased(){
    if (keyCode == 32){
        if (arrows.length){
            var angle = bow.body.angle;
            arrows[arrows.length-1].shoot(angle);
            
            
            
        }
        
    }
 }


