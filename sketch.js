let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

let velocidadexBolinha = 7;
let velocidadeyBolinha = 7;

let xRaquete = 10;
let yRaquete = 155;
let larguraRaquete = 10;
let alturaRaquete = 90;

let xRaqueteOponente = 580;
let yRaqueteOponente = 155;
// let velocidadeRaqueteOponente;

let meuPlacar = 0;
let placarOponente = 0;

function setup() {
  createCanvas(600, 400);
  trilha.play()
}

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  verificaBorda();
  desenhaRaquete(xRaquete, yRaquete);
  desenhaRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaquete();
  colisaoRaquete();
  contaPlacar();
  verificaColisaoRaquete();
  mostraPlacar();
  
  //xBolinha = xBolinha +6;
  
}
  function desenhaBolinha(){
 circle(xBolinha , yBolinha , diametro);
    fill('pink')
   }


// xBolinha = xBolinha +6;
  // xBolinha += velocidadexBolinha;
  // yBolinha += velocidadeyBolinha;
  // yBolinha += velocidadeyBolinha;
  

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  
  if (yBolinha + raio  > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}  
  function desenhaRaquete(x, y){
    fill(0, 0, 255);
    rect(x, y, larguraRaquete, alturaRaquete);
}
  
function movimentaRaquete(){
  if (keyIsDown(87)){
    yRaquete -=10;
}
  
  if  (keyIsDown(83)){
    yRaquete +=10;
     }
  
  if (keyIsDown(UP_ARROW)){
    yRaqueteOponente -=10;

  } 
  if  (keyIsDown(DOWN_ARROW)){
    yRaqueteOponente +=10;
     }
} 

function movimentaRaqueteOponente(){
  if (keyIsDown(UP_ARROW)){
  yRaqueteOponente -=10;
}

  if (keyIsDown(DOWN_ARROW)){
     yRaqueteOponente +=10;
      }
}

function colisaoRaquete(){
  if (xBolinha - raio <= xRaquete + larguraRaquete && yBolinha +raio){
      
      }
  
}

function verificaColisaoRaquete() {
    if (xBolinha - raio <= xRaquete + larguraRaquete && 
        yBolinha + raio >= yRaquete &&
        yBolinha - raio <= yRaquete + alturaRaquete) {
        velocidadexBolinha *= -1;
        raquetada.play()
    }


    if (xBolinha + raio >= xRaqueteOponente && 
        yBolinha + raio >= yRaqueteOponente &&
        yBolinha - raio <= yRaqueteOponente + alturaRaquete) {
        velocidadexBolinha *= -1;
        raquetada.play()
    }
}

function mostraPlacar(){
  fill('rgb(172,76,157)')
  rect(130, 5, 40, 25);
  rect(430, 5, 40, 25);
  fill(255);
  textSize(22);
  textAlign(CENTER)
  text(meuPlacar, 150, 25)
  text(placarOponente, 450, 25)
}


function contaPlacar(){
  //  contabiliza placar do oponente
  if(xBolinha - raio <=0){
    placarOponente += 1;
    ponto.play()
   }
  
  //  contabiliza meu placar
  if(xBolinha + raio >=width){
    meuPlacar += 1;
    ponto.play()
  }
}

function preload(){
  trilha = loadSound ("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");  

}
