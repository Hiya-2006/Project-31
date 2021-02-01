const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops=[]
var maxDrops=100
var thunder_frame=0
var rand
var thunder, thunder1,thunder2,thunder3,thunder4;


function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(500,650);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,500);
    
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

    }
}

function draw(){
    background("black");
    Engine.update(engine);

    umbrella.display();

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunder_frame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
       
    }
    if(thunder_frame + 10 ===frameCount && thunder){
        thunder.destroy();
    }
  
    for(var i = 0; i<maxDrops; i++){
        drops[i].display_drop();
        drops[i].update()
        
    }
}   

