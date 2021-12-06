var pacman;
var pacmanImg;
var pacbackground;

var ghost1;
var ghost1Img;
var ghost2;
var ghost2Img;
var ghost3;
var ghost3Img;
var ghost4;
var ghost4Img;

var ghostwall1;
var ghostwall2;
var ghostwall3;
var ghostwall4;
var ghostwall5;

var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;
var wall10;
var wall11;
var wall12;
var wall13;
var wall14;
var wall15;
var wall16;
var wall17;
var wall18;
var wall19;
var wall20;
var wall21;
var wall22;
var wall23;
var wall24;
var wall25;
var wall26;
var wall27;
var wall28;
var wall29;
var wall30;

var borderwall1;
var borderwall2;
var borderwall3;
var borderwall4;
var borderwall5;
var borderwall6;
var borderwall7;
var borderwall8;
var borderwall9;
var borderwall10;
var borderwall11;
var borderwall12;
var borderwall13;
var borderwall14;
var borderwall15;
var borderwall16;
var borderwall17;
var borderwall18;

function preload(){

  pacbackground=loadImage("Pacman_background.png");
  pacmanImg=loadAnimation("Pacman_open_mouth.png","Pacman_closed_mouth.png");
  
  ghost1Img=loadImage("Pacman_ghost1-removebg-preview.png");
  ghost2Img=loadImage("Pacman_ghost2-removebg-preview.png");
  ghost3Img=loadImage("Pacman_ghost3-removebg-preview.png");
  ghost4Img=loadImage("Pacman_ghost4-removebg-preview.png");

}

function setup() {

  createCanvas(700, 610);

  pacman=createSprite(350,300,20,20);
  pacman.depth=100;
  pacman.addAnimation("pacman moving",pacmanImg);
  pacman.scale=1.5;

  ghostwall1=createSprite(350.3,320,174.2,8.5);
  ghostwall2=createSprite(268.5,281.5,11,70);
  ghostwall3=createSprite(432,281.5,11,70);
  ghostwall4=createSprite(298.5,250.5,50,8.4);
  ghostwall5=createSprite(403,250.5,52,8.4);

  wall1=createSprite(350,137.7,169,18);
  wall2=createSprite(350,175,22.5,60);

  wall3=createSprite(200,197,22,135);
  wall4=createSprite(239,196.8,90,18);

  wall5=createSprite(500,197,22,135);
  wall6=createSprite(459,196.8,90,18);

  wall7=createSprite(100,69,70,37);
  wall8=createSprite(237.5,69,97,37);
  wall9=createSprite(100,137.5,70,18);

  wall10=createSprite(462.6,69,97,37);
  wall11=createSprite(600,69,70,37);
  wall12=createSprite(600,137.5,70,18);

  wall13=createSprite(500,344,22,73);
  wall14=createSprite(200,344,22,73);

  wall15=createSprite(350,374,169,18);
  wall16=createSprite(350,405,22.5,70);
  wall17=createSprite(350,492,169,18); 
  wall18=createSprite(350,523,22.5,70);

  wall19=createSprite(237.5,432.9,94,18);
  wall20=createSprite(463,432.9,94,18);

  wall20=createSprite(200,520,23,73);
  wall21=createSprite(175,551,217,18);

  wall22=createSprite(500,520,23,73);
  wall23=createSprite(525,551,217,18);

  wall24=createSprite(100,433,70,18);
  wall25=createSprite(124.8,462,22,74);

  wall26=createSprite(600,433,70,18);
  wall27=createSprite(575,462,22,74);

  wall28=createSprite(350,37,22,100);
  wall29=createSprite(10,492,100,18);
  wall30=createSprite(690,492,100,18);

  borderwall1=createSprite(350,4,700,10);
  borderwall2=createSprite(350,606,700,10);
  borderwall3=createSprite(694,95.5,10,200);
  borderwall4=createSprite(6,95.5,10,200);
  borderwall5=createSprite(694,490,11,230);
  borderwall6=createSprite(6,490,10,230);

  borderwall7=createSprite(633,191.5,140,8);
  borderwall8=createSprite(67,191.5,140,8);
  borderwall9=createSprite(633,261,140,8);
  borderwall10=createSprite(67,261,140,8);
  borderwall11=createSprite(131.8,230,10,70);
  borderwall12=createSprite(568.3,230,10,70);

  borderwall13=createSprite(633,379,140,8);
  borderwall14=createSprite(633,309.78,140,8);
  borderwall15=createSprite(67,379,140,8);
  borderwall16=createSprite(67,309.78,140,8);
  borderwall17=createSprite(131.8,341,10,70);
  borderwall18=createSprite(568.3,341,10,70);

  ghostwall1.debug=true;
  ghostwall1.setCollider("rectangle",0,0,ghostwall1.width,ghostwall1.height)
  ghostwall2.debug=true;
  ghostwall3.debug=true;
  ghostwall4.debug=true;
  ghostwall5.debug=true;
      
}

function draw() {

  background(pacbackground);

  if(keyDown("UP_ARROW")){
    pacman.velocityY=-3
    pacman.velocityX=0
    pacman.rotation=270
  }
  if(keyDown("DOWN_ARROW")){
    pacman.velocityY=3
    pacman.velocityX=0
    pacman.rotation=90
  }
  if(keyDown("LEFT_ARROW")){
   pacman.velocityX=-3
   pacman.velocityY=0
   pacman.rotation=180
  }
  if(keyDown("RIGHT_ARROW")){
    pacman.velocityX=3
    pacman.velocityY=0
    pacman.rotation=0
   }  

   pacman.collide(ghostwall1);
   pacman.collide(ghostwall2);
   pacman.collide(ghostwall3);
   pacman.collide(ghostwall4);
   pacman.collide(ghostwall5);

  drawSprites()

}