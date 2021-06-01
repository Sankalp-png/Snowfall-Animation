var bg

function preload() {
  bg = loadImage("snow5.gif")
  d1 = loadImage("Doraemon.png") 
  music = loadSound("JingleBells3.mp3") 
}

function setup() {
  createCanvas(800, 500);
  d = createSprite(700, 200, 50, 50);
  d.addImage(d1)
}

function draw() {
  background(bg); 
  d.velocityX = -2;

  if(d.x<=-15) {
    d.x = 700
    
  }
    textFont("Comic Sans MS")
    fill("yellow")
    stroke("Black")
    strokeWeight(4)
    textSize(50)
    text("Merry Christmas!", 200, 350)
    music.stop();
  drawSprites();
}

