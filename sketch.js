let ground;
let lander;
var lander_img;
var bg_img;

var edges

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(2000,630);
  frameRate(80);

  lander = createSprite(100,500,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  ground = createSprite(500,540,2000,10);

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  
  background(51);
  image(bg_img,0,0);

ground.visible = false ;

  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  if(keyWentDown("SPACE")){
    lander.velocityY = 0 ;
    lander.velocityX = 0 ;
    
     }
edges=createEdgeSprites();

lander.bounceOff [0];
lander.bounceOff[1];
lander.bounceOff[2];
lander.bounceOff[3];

  if(keyWentDown(DOWN_ARROW)){
    lander.velocityY =  2 ;
     }

     if(keyWentDown(RIGHT_ARROW)){
      lander.velocityX = 2 ;
      
       }

       if(keyWentDown(LEFT_ARROW)){
        lander.velocityX = -2 ;
         }

  if(keyWentDown(UP_ARROW)){
 lander.velocityY = -3 ; 
   
  }
  
 //lander.velocityY= lander.velocityY+0.2
  
//console.log(lander.y) ;
  //fall down
 // vy +=g;
//  lander.position.y+=vy;

lander.collide(ground);

  drawSprites();
}


