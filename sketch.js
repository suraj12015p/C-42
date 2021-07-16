var bg
var iss
var sp1
var sp2
var sp3
var sp4
var spacecraft
var iss1
var hasdocked = false


function preload(){
  bg = loadImage("spacebg.jpg");
  iss = loadImage("iss.png");
  sp1 = loadImage("spacecraft1.png");
  sp2 = loadImage("spacecraft2.png");
  sp3 = loadImage("spacecraft3.png");
  sp4 = loadImage("spacecraft4.png");
}



function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(sp1)
  spacecraft.scale = 0.15
  iss1 = createSprite(330,130);
  iss1.addImage(iss)
  iss2 = createSprite(16,330,130);
  

  
}  



function draw() {
  background(bg);  
  if(!hasdocked){
    if (keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y-2
    }
    if(keyDown("LEFT_ARROW")){
     spacecraft.addImage(sp3)
     spacecraft.x = spacecraft.x-1
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(sp4)
      spacecraft.x = spacecraft.x+1
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(sp1)
      spacecraft.y = spacecraft.y+2
    }
     }
    if(spacecraft.y<=(iss1.y+70)&&spacecraft.x<=(iss1.x-10)){
      hasdocked = true 
      textSize(25)
      fill("white")
      text("dockingsuccessful",200,300)
    }
  
  drawSprites();
}