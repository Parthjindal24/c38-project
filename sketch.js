var knife,knifeImage;
var ground;
var man ,manrunning;

var iground;
var boxI,box;

var knifeGroup,boxGroup;

var score;

function preload(){
knifeImage=loadImage("knife.png");
  
manrunning=loadAnimation("man1.png","man2.png","man3.png","man4.png","man5.png","man6.png","man7.png","man8.png");
  
  boxI=loadImage("gift-boxes.png")
  
}

function setup() {
  createCanvas(600,600)
 

  
  ground=createSprite(300,550,600,20);
  
  iground=createSprite(300,565,600,20);
  iground.visible=false;
  
  man=createSprite(50,460,10,10);
 man.addAnimation("manRunning",manrunning);
  man.scale=0.4;
 
  
  
   knifeGroup = createGroup();
  boxGroup = createGroup();
  
     score=0;
}

function draw() {
  background("teal");
   stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score,500,50);

  
  
  
  man.velocityY = man.velocityY + 0.8;
  
  spawnknife();
  spawngift();
  man.collide(iground);
  
  if(keyDown("space")&& man.y >= 400){
  man.velocityY=-15;
 }  
  
   
  if(boxGroup.isTouching(man)){
    score=score+1;
    boxGroup.destroyEach();
  }
  
  if(knifeGroup.isTouching(man)){
    
     score=0;
    
    
    knifeGroup.destroyEach();
    boxGroup.destroyEach();
  }
  
  
 drawSprites();
}

function spawngift(){
if(frameCount%150===0){
  var box = createSprite(600,120,40,10);
  
 box.y = Math.round(random(200,380)) ;
    
  box.scale=0.2;
  box.velocityX=-6;
  box.lifetime=160;
  box.addImage(boxI);

boxGroup.add(box)   

}  

}

function spawnknife() {
  if(frameCount%90===0){
  
  var knife = createSprite(600,510,20,20);
  knife.addImage(knifeImage);
  knife.scale=0.4;
   knife.velocityX=-6;
   knife.lifetime=130;
    
  knife.setCollider("rectangle",0,0,180,10);
  
    knife.debug=false;
   
    knifeGroup.add(knife);
 }
}