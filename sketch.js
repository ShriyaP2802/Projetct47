var player,gameState;
var sun1,sun2,co,fertilizer,water;
var human;
var sunImage,coImage,ferImage,waterImage, humanImage;
var seed,sapling,smallTree,bigTree, bgImage;
var buttonImage, titleImage;
var restart, restartImage;
var gameState;
var start = 0;
var round1 =1;
var round2= 2;
var round3= 3;
var round4 = 4;
var END = 5;
var WIN = 6;
var edges;
var sunCount = 0;
var waterCount = 0;
var carbonCount = 0;
var ferCount = 0;



function preload(){
sunImage = loadImage("sunImage.png");
coImage = loadImage("co2Image.png");
ferImage = loadImage("fertilizerImage.png");
waterImage = loadImage("waterImage.png");
seed = loadImage("seedImage.png");
sapling = loadImage("saplingImage.png");
smallTree = loadImage("smallTreeImage.png");
bigTree = loadImage("bigTreeImage.png");
bgImage = loadImage("backgroundImage.png");
humanImage = loadImage("humanImage.png");
buttonImage = loadImage("PlayButtonImage.png");
titleImage = loadImage("titleImage.png");
restartImage = loadImage("restartImage.png");
}

function setup() {
  createCanvas(windowWidth-50,windowHeight-50);
  edges = createEdgeSprites();
  gameState = start;

  restart = createSprite(width/2,400,80,50);
  restart.addImage("restartImage",restartImage);
  restart.visible=false;

  button = createSprite(width/2, 400, 80, 50);
  button.addImage("buttonImage",buttonImage);
  button.scale = 0.2;

 title = createSprite(width/2,200,50,50);
 title.addImage("titleImage",titleImage);

 player = createSprite(600,height-80,30,10);
 player.addImage("seedImage",seed);
 player.addImage("sapling",sapling);
 player.addImage("smallTree",smallTree);
 player.addImage("bigTree",bigTree);
    player.scale = 0.1;
    player.visible = false;

    sun1 = createSprite(width,random(100,height-200));
    sun1.addImage("sun1Image",sunImage);
    sun1.scale = 0.5;
    sun1.velocityX = -(random(4,8));
    sun1.velocityY = -(random(4,8));
    sun1.visible = false;
  
    sun2 = createSprite(0,random(200,height-300));
    sun2.addImage("sun2Image",sunImage);
    sun2.scale = 0.5;
    sun2.velocityX = (random(4,8));
    sun2.velocityY = (random(4,8));
    sun2.visible = false;

    water1 = createSprite(30,random(200,height-300));
    water1.addImage("waterImage",waterImage);
    water1.scale = 0.2;
    water1.velocityX= (random(4,8));
    water1.velocityY = (random(4,8));
    water1.visible = false;

    water2 = createSprite(50,random(200,height-300));
    water2.addImage("waterImage",waterImage);
    water2.scale = 0.2;
    water2.velocityX= (random(4,8));
    water2.velocityY = -(random(4,8));
    water2.visible = false;

    water3 = createSprite(width-10,random(200,height-300));
    water3.addImage("waterImage",waterImage);
    water3.scale = 0.2;
    water3.velocityX= -(random(4,8));
    water3.velocityY = (random(4,8));
    water3.visible = false;

    water4 = createSprite(width-20,random(200,height-300));
    water4.addImage("waterImage",waterImage);
    water4.scale = 0.2;
    water4.velocityX= -(random(4,8));
    water4.velocityY = -(random(4,8));
    water4.visible = false;

    carbon1 = createSprite(10,random(200,height-300));
    carbon1.addImage("carbonImage",coImage);
    carbon1.scale = 0.2;
    carbon1.velocityX = (random(4,8));
    carbon1.velocityY = (random(4,8));
    carbon1.visible = false;

    carbon2 = createSprite(20,random(200,height-300));
    carbon2.addImage("carbonImage",coImage);
    carbon2.scale = 0.2;
    carbon2.velocityX = (random(4,8));
    carbon2.velocityY = -(random(4,8));
    carbon2.visible = false;

    carbon3 = createSprite(30,random(200,height-300));
    carbon3.addImage("carbonImage",coImage);
    carbon3.scale = 0.2;
    carbon3.velocityX = (random(4,8));
    carbon3.velocityY = (random(4,8));
    carbon3.visible = false;

    carbon4 = createSprite(width-10,random(200,height-300));
    carbon4.addImage("carbonImage",coImage);
    carbon4.scale = 0.2;
    carbon4.velocityX = -(random(4,8));
    carbon4.velocityY = -(random(4,8));
    carbon4.visible = false;
    
    carbon5 = createSprite(width-20,random(200,height-300));
    carbon5.addImage("carbonImage",coImage);
    carbon5.scale = 0.2;
    carbon5.velocityX = -(random(4,8));
    carbon5.velocityY = -(random(4,8));
    carbon5.visible = false;

    carbon6 = createSprite(width-30,random(200,height-300));
    carbon6.addImage("carbonImage",coImage);
    carbon6.scale = 0.2;
    carbon6.velocityX = -(random(4,8));
    carbon6.velocityY = (random(4,8));
    carbon6.visible = false;

    fer1 = createSprite(10,random(200,height-300));
    fer1.addImage("fertilizerImage",ferImage);
    fer1.scale =0.3;
    fer1.velocityX = (random(4,8));
    fer1.velocityY = -(random(4,8));
    fer1.visible = false;

    fer2 = createSprite(20,random(200,height-300));
    fer2.addImage("fertilizerImage",ferImage);
    fer2.scale =0.3;
    fer2.velocityX = (random(4,8));
    fer2.velocityY = -(random(4,8));
    fer2.visible = false;

    fer3 = createSprite(30,random(200,height-300));
    fer3.addImage("fertilizerImage",ferImage);
    fer3.scale =0.3;
    fer3.velocityX = (random(4,8));
    fer3.velocityY = (random(4,8));
    fer3.visible = false;

    fer4 = createSprite(40,random(200,height-300));
    fer4.addImage("fertilizerImage",ferImage);
    fer4.scale =0.3;
    fer4.velocityX = (random(4,8));
    fer4.velocityY = (random(4,8));
    fer4.visible = false;

    fer5 = createSprite(width-10,random(200,height-300));
    fer5.addImage("fertilizerImage",ferImage);
    fer5.scale =0.3;
    fer5.velocityX = -(random(4,8));
    fer5.velocityY = (random(4,8));
    fer5.visible = false;

    fer6 = createSprite(width-20,random(200,height-300));
    fer6.addImage("fertilizerImage",ferImage);
    fer6.scale =0.3;
    fer6.velocityX = -(random(4,8));
    fer6.velocityY = (random(4,8));
    fer6.visible = false;

    fer7 = createSprite(width-30,random(200,height-300));
    fer7.addImage("fertilizerImage",ferImage);
    fer7.scale =0.3;
    fer7.velocityX = -(random(4,8));
    fer7.velocityY = -(random(4,8));
    fer7.visible = false;

    fer8 = createSprite(width-40,random(200,height-300));
    fer8.addImage("fertilizerImage",ferImage);
    fer8.scale =0.3;
    fer8.velocityX = -(random(4,8));
    fer8.velocityY = -(random(4,8));
    fer8.visible = false;

    
    humanGroup = new Group();
   //player.debug=true;
}

function draw() {
  background(bgImage);

  sun1.bounceOff(edges);
  sun2.bounceOff(edges);
  
  water1.bounceOff(edges);
  water2.bounceOff(edges);
  water3.bounceOff(edges);
  water4.bounceOff(edges);

  carbon1.bounceOff(edges);
  carbon2.bounceOff(edges);
  carbon3.bounceOff(edges);
  carbon4.bounceOff(edges);
  carbon5.bounceOff(edges);
  carbon6.bounceOff(edges);

  fer1.bounceOff(edges);
  fer2.bounceOff(edges);
  fer3.bounceOff(edges);
  fer4.bounceOff(edges);
  fer5.bounceOff(edges);
  fer6.bounceOff(edges);
  fer7.bounceOff(edges);
  fer8.bounceOff(edges);


  
  player.bounce(edges);
  if(gameState===start){

    if(mousePressedOver(button)){
      button.visible = false;
      title.visible = false;
      gameState = round1;
    }
  }
  
  if(gameState === round1){

    player.addImage("seedImage",seed);

    player.visible = true;
    textSize(30);
    fill("black");
    stroke(255);
    strokeWeight(3);
    text("Catch Sun",windowWidth/10,windowHeight/10);
    text("Sun Count: "+sunCount,windowWidth/10,windowHeight/10+50);

    
   

    sun1.bounce(sun2);

    if(keyDown(UP_ARROW)){
      player.y = player.y-10;
    }
    if(keyDown(DOWN_ARROW)){
      player.y = player.y+10;
    }
    if(keyDown(RIGHT_ARROW)){
      player.x = player.x+10;
    }
    if(keyDown(LEFT_ARROW)){
      player.x = player.x-10;
    }
    if(frameCount%30===0){
    enemies();
    }
    humanGroup.bounceOff(edges[2]);
    humanGroup.bounceOff(edges[3]);
    humanGroup.bounceOff(edges[1]);

    sun1.visible = true;
    sun2.visible = true;

    if(sun1.isTouching(player)){
      sun1.destroy();
      sunCount = sunCount+1;
    }
    if(sun2.isTouching(player)){
      sun2.destroy();
      sunCount = sunCount+1;
    }
    if(sunCount===2){
      gameState = round2;
      humanGroup.destroyEach();
    }

    /*if(humanGroup.isTouching(player)){
      gameState=END;
      
   }*/

  }

  if(gameState===round2){
      water1.visible = true;
      water2.visible = true;
      water3.visible = true;
      water4.visible = true;

      player.changeImage("sapling",sapling);
      player.scale = 0.7;
      
      player.setCollider("rectangle",0,0,100,100)
      

     textSize(25);
     fill("black");
     stroke(255);
     strokeWeight(3);
     text("Sun Count: "+sunCount,windowWidth/10,windowHeight/10);
     text("Water Count: "+waterCount,windowWidth/10,windowHeight/10+50);


      water1.bounce(water2);
      water1.bounce(water3);
      water1.bounce(water4);
      water2.bounce(water3);
      water2.bounce(water4);
      water3.bounce(water4);

      if(keyDown(UP_ARROW)){
        player.y = player.y-10;
      }
      if(keyDown(DOWN_ARROW)){
        player.y = player.y+10;
      }
      if(keyDown(RIGHT_ARROW)){
        player.x = player.x+10;
      }
      if(keyDown(LEFT_ARROW)){
        player.x = player.x-10;
      }
      if(frameCount%50===0){
      enemies();
      }
    humanGroup.bounceOff(edges[2]);
    humanGroup.bounceOff(edges[3]);
    humanGroup.bounceOff(edges[1]);

    if(water1.isTouching(player)){
      water1.destroy();
      waterCount = waterCount+1;
    }
    if(water2.isTouching(player)){
      water2.destroy();
      waterCount = waterCount+1;
    }
    if(water3.isTouching(player)){
      water3.destroy();
      waterCount = waterCount+1;
    }
    if(water4.isTouching(player)){
      water4.destroy();
      waterCount = waterCount+1;
    }

    if(waterCount===4){
      gameState = round3;
      humanGroup.destroyEach();
    }

   /* if(humanGroup.isTouching(player)){
      gameState=END;
   }*/
  }

  if(gameState===round3){
    carbon1.visible = true;
    carbon2.visible = true;
    carbon3.visible = true;
    carbon4.visible = true;
    carbon5.visible = true;
    carbon6.visible = true;

    player.changeImage("smallTree",smallTree);
      player.scale = 0.7;

      textSize(20);
      fill("black");
      stroke(255);
      strokeWeight(3);
      text("Sun Count: "+sunCount,windowWidth/10,windowHeight/10);
      text("Water Count: "+waterCount,windowWidth/10,windowHeight/10+25);
      text("CO2 Count: "+carbonCount,windowWidth/10,windowHeight/10+50);


    carbon1.bounce(carbon2);
    carbon1.bounce(carbon3);
    carbon1.bounce(carbon4);
    carbon1.bounce(carbon5);
    carbon1.bounce(carbon6);

    carbon2.bounce(carbon3);
    carbon2.bounce(carbon4);
    carbon2.bounce(carbon5);
    carbon2.bounce(carbon6);

    carbon3.bounce(carbon4);
    carbon3.bounce(carbon5);
    carbon3.bounce(carbon6);

    carbon4.bounce(carbon5);
    carbon4.bounce(carbon6);

    carbon5.bounce(carbon6);

    if(keyDown(UP_ARROW)){
      player.y = player.y-10;
    }
    if(keyDown(DOWN_ARROW)){
      player.y = player.y+10;
    }
    if(keyDown(RIGHT_ARROW)){
      player.x = player.x+10;
    }
    if(keyDown(LEFT_ARROW)){
      player.x = player.x-10;
    }
    if(frameCount%40===0){
    enemies();
    }
  humanGroup.bounceOff(edges[2]);
  humanGroup.bounceOff(edges[3]);
  humanGroup.bounceOff(edges[1]);

  if(carbon1.isTouching(player)){
    carbon1.destroy();
    carbonCount = carbonCount+1;
  }
  if(carbon2.isTouching(player)){
    carbon2.destroy();
    carbonCount = carbonCount+1;
  }
  if(carbon3.isTouching(player)){
    carbon3.destroy();
    carbonCount = carbonCount+1;
  }
  if(carbon4.isTouching(player)){
    carbon4.destroy();
    carbonCount = carbonCount+1;
  }
  if(carbon5.isTouching(player)){
    carbon5.destroy();
    carbonCount = carbonCount+1;
  }
  if(carbon6.isTouching(player)){
    carbon6.destroy();
    carbonCount = carbonCount+1;
  }

  if(carbonCount===6){
    gameState=round4;
  }

  /*if(humanGroup.isTouching(player)){
    gameState=END;
    
 }*/




  }

  if(gameState===round4){

    player.setCollider("rectangle",0,0,200,200);

    fer1.visible = true;
    fer2.visible = true;
    fer3.visible = true;
    fer4.visible = true;
    fer5.visible = true;
    fer6.visible = true;
    fer7.visible = true;
    fer8.visible = true;
    
    player.changeImage("bigTree",bigTree);
          player.scale = 0.3;
    
          textSize(20);
          fill("black");
          stroke(255);
          strokeWeight(3);
          text("Sun Count: "+sunCount,windowWidth/10,windowHeight/10);
          text("Water Count: "+waterCount,windowWidth/10,windowHeight/10+25);
          text("CO2 Count: "+carbonCount,windowWidth/10,windowHeight/10+50);
          text("fertilizer Count: "+ferCount,windowWidth/10,windowHeight/10+75);

          fer1.bounce(fer2);
          fer1.bounce(fer3);
          fer1.bounce(fer4);
          fer1.bounce(fer5);
          fer1.bounce(fer6);
          fer1.bounce(fer7);
          fer1.bounce(fer8);

          fer2.bounce(fer3);
          fer2.bounce(fer4);
          fer2.bounce(fer4);
          fer2.bounce(fer5);
          fer2.bounce(fer6);
          fer2.bounce(fer7);
          fer2.bounce(fer8);

          fer3.bounce(fer4);
          fer3.bounce(fer5);
          fer3.bounce(fer6);
          fer3.bounce(fer7);
          fer3.bounce(fer8);

          fer4.bounce(fer5);
          fer4.bounce(fer6);
          fer4.bounce(fer7);
          fer4.bounce(fer8);

          fer5.bounce(fer6);
          fer5.bounce(fer7);
          fer5.bounce(fer8);

          fer6.bounce(fer7);
          fer6.bounce(fer8);

          fer7.bounce(fer8);

    
          if(keyDown(UP_ARROW)){
            player.y = player.y-10;
          }
          if(keyDown(DOWN_ARROW)){
            player.y = player.y+10;
          }
          if(keyDown(RIGHT_ARROW)){
            player.x = player.x+10;
          }
          if(keyDown(LEFT_ARROW)){
            player.x = player.x-10;
          }
          if(frameCount%40===0){
          enemies();
          }
        humanGroup.bounceOff(edges[2]);
        humanGroup.bounceOff(edges[3]);
        humanGroup.bounceOff(edges[1]);

        if(fer1.isTouching(player)){
          fer1.destroy();
          ferCount = ferCount+1;
        }

        if(fer2.isTouching(player)){
          fer2.destroy();
          ferCount = ferCount+1;
        }
        if(fer3.isTouching(player)){
          fer3.destroy();
          ferCount = ferCount+1;
        }
        if(fer4.isTouching(player)){
          fer4.destroy();
          ferCount = ferCount+1;
        }
        if(fer5.isTouching(player)){
          fer5.destroy();
          ferCount = ferCount+1;
        }
        if(fer6.isTouching(player)){
          fer6.destroy();
          ferCount = ferCount+1;
        }
        if(fer7.isTouching(player)){
          fer7.destroy();
          ferCount = ferCount+1;
        }
        if(fer8.isTouching(player)){
          fer8.destroy();
          ferCount = ferCount+1;
        }

        if(ferCount===8){
          gameState=WIN
        }

                /*if(humanGroup.isTouching(player)){
    gameState=END;
    
 }*/
  }
    

  if(gameState===END){
    background(0);
    humanGroup.destroyEach();
      sun1.destroy();
      sun2.destroy();

      water1.destroy();
      water2.destroy();
      water3.destroy();
      water4.destroy();

      carbon1.destroy();
      carbon2.destroy();
      carbon3.destroy();
      carbon4.destroy();
      carbon5.destroy();
      carbon6.destroy();

      fer1.destroy();
      fer2.destroy();
      fer3.destroy();
      fer4.destroy();
      fer5.destroy();
      fer6.destroy();
      fer7.destroy();
      fer8.destroy();
      
      player.visible = false
      textSize(50);
      fill("white");
      text("Game Over",windowWidth/3,windowHeight/2);

      restart.visible = true;
      
  }
  

if(mousePressedOver(restart) && (gameState === END || gameState===WIN)){
  restart();
}

  if(gameState===WIN){
  
    humanGroup.destroyEach();
    player.x = windowWidth/4;
    player.y = windowHeight/3;
    player.scale=1.2;
    textSize(50);
    fill("white");
    text("Congrats! You Won!",windowWidth/3,windowHeight/2)
  }
  

  drawSprites();
}
function enemies(){

    human = createSprite(width,random(50,height-100));
    human.addImage("human",humanImage);
    human.scale = 0.2;
    human.velocityX = -(random(4,8));
    human.velocityY = (random(4,8));
    human.lifetime = 1000;
    humanGroup.add(human);
    
}

function restart(){
  
  gameState=start;
  sunCount=0;
  waterCount=0;
  carbonCount=0;
  ferCount=0;
  button.visible = true;

}