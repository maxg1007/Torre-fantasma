var imagemDaTorre, torre;
var imagemDaPorta, porta, grupoDePortas;
var imagemDeEscalador, escalador, grupoDeEscaladores;
var fantasma, imagemDoFantasma;
var grupoDeBlocoInvisivel, blocoInvisivel;
var estadoJogo = "JOGAR"

function preload(){
  imagemDaTorre = loadImage("tower.png");
  imagemDaPorta = loadImage("door.png");
  imagemDeEscalador = loadImage("climber.png");
  imagemDoFantasma = loadImage("ghost-standing.png");
  somAssustador = loadSound("spooky.wav");
}

function setup(){
  createCanvas(590,600);
  
  torre = createSprite(width/2,595);
  torre.addImage("towe",imagemDaTorre);
 torre.velocityY = 3;
  
  grupoDeEscaladores = new Group();
  grupoDePortas = new Group();
  grupoDeBlocoInvisivel = new Group();
  
  fantasma = createSprite(width/2,height/2-80);
  fantasma.addImage('fantasma',imagemDoFantasma);
  fantasma.scale = 0.4;
  
  }


function draw(){
  background(200);
  if(torre.y > 600){
      torre.y = 0
    }
  if(fantasma.isTouching(grupoDeBlocoInvisivel)||fantasma.y > 600){
    
    fantasma.destroy();
    
  }
  
  fantasma.velocityY = fantasma.velocityY+1;
  
  fantasma.collide(grupoDeEscaladores);
  controle();
  portas();
  drawSprites();
}
function portas(){
  if(frameCount%100===0){
  
  porta = createSprite(470,-50);
  porta.addImage('porta',imagemDaPorta);
  porta.x = Math.round(random(130,470));
  porta.velocityY = 3;
  porta.lifetime = 250;
  grupoDePortas.add(porta);
  
  escalador = createSprite(300,300);
  escalador.addImage('escalador',imagemDeEscalador);
  escalador.x = porta.x;
  escalador.y = porta.y + 70;
  escalador.velocityY = 3;
  escalador.lifetime = 250;
  grupoDeEscaladores.add(escalador);
    
  fantasma.depth=porta.depth
  fantasma.depth = fantasma.depth+1;
    
  blocoInvisivel = createSprite(200,30)
  blocoInvisivel.width=escalador.width;  
  blocoInvisivel.height = 2; 
  blocoInvisivel.x = escalador.x;
  blocoInvisivel.velocityY = 3;
  blocoInvisivel.lifetime = 250;
  grupoDeBlocoInvisivel.add(blocoInvisivel);
  }
}
function controle(){
  
  if (keyDown('space')){
    fantasma.velocityY = -6;
  }
  if (keyDown('right')){
    fantasma.x=fantasma.x+5
  }
  if (keyDown('left')){
    fantasma.x=fantasma.x-5
  }
  
}