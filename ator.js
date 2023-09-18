// código do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;
let vida = 3;

// vida da vaquinha
let alturaCirculo = 20;
let alturaCirculo2 = 20;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3; 
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor -=3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor +=3;
    
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++)
  {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play()
;    vida -= 1;
      if(vida == 2){
        alturaCirculo = -20;
         }
      if(vida == 1){
        alturaCirculo2 = -20;
      }
      if(vida == 0){
        vida = 3 
        velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3]
        meusPontos = 0
        alturaCirculo = 20;
        alturaCirculo2 = 20;
      }
      }
    }
  }

function movimentaCirculo(){
  if(colisao){
      
     }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

//Colisão da vaquinha com as bordas
function limitaAtor(){
  if (yAtor > 367){
    yAtor = 366;  
  }
  if (yAtor < 0){
    yAtor = 1;
  }
  if (xAtor < 0){
    xAtor = 1;
  }
  if (xAtor > 471){
    xAtor = 470;
  }
}


function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
  fill("red");
  circle(60, 20, 20);
  circle(36, alturaCirculo2, 20);
  circle(12, alturaCirculo, 20);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    velocidadeCarros[0]+= 1
    velocidadeCarros[1]+= 1
    velocidadeCarros[2]+= 1
    velocidadeCarros[3]+= 1
    velocidadeCarros[4]+= 1
    velocidadeCarros[5]+= 1
    voltaAtorParaPosicaoInicial()
  }
}


