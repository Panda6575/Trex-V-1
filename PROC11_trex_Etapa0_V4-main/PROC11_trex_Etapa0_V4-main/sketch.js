//creación de variables globales
var trex ,trex_running, trex_collided;
var ground, invisibleGround,groundImage;
function preload(){
  //precargando imagenes
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup(){
  //tamaño de pantalla de nuestro juego
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex = createSprite(50,180,20,50)
trex.addAnimation("running", trex_running);

//agregar tamaño y posicion al Trex
trex.scale = 0.5;
trex.x = 50

//crear sprite de suelo
ground = createSprite(200,180,400,20);

}

function draw(){
  background(220);
// hacer que el Trex salte al presionar la barr especiadora
if(keyDown("space")) {
  trex.velocityY = -10;
}
//trex gravedad cuando brinca
trex.velocityY = trex.velocityY + 0.8;
//evitar que el trex caiga
trex.collide(ground);
drawSprites();
  }
  


