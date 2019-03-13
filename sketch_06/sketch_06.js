var hora;
var minuto;
var segundo;
var colorB = 200;
var colorA = 255;
var dia = 1;
function setup() 
{
  createCanvas(400, 400);
angleMode(DEGREES);
}

function draw() 
{
//***************************************************
//Fondo reloj
//***************************************************
  
//***************************************************
//Def var
//***************************************************
hora = hour();
minuto = minute();
segundo = second();
  if (hora <= 12)
   {
     dia = 1;
     hora = hora;
   }
  else if (hora > 12)
   {
     dia = 2;
     hora = hora - 12;
   }
   hora = map (hora, 0, 12, 0, 360);
   segundo = map (segundo, 0, 60, 0, 360);
   minuto = map (minuto, 0, 60, 0, 360);
//**************************************************
//AM
//**************************************************
  if(dia == 1)
  {
//**************************************************
//Madrugada
//**************************************************
     if (hora >= 360 && hora <= 150){
        background(0,0,0+segundo);
        fill (255,255,111-segundo)
        ellipse (50,50,50,50);
        fill (0,0,20+segundo);
        ellipse (width/2, height/2, 250, 250);
        push();
        translate (width/2, height/2);
        rotate(segundo*10);
        stroke(255, 0, 0);
        line (0, 0, 0, -90);
        pop();
    push();
      translate (width/2, height/2);
      rotate(hora*2);
      line (0, 0, 0, -80);
    pop();
    push();
      translate (width/2, height/2);
      rotate(minuto*5);
      line (0, 0, 0, -120);
    pop();
}
//***************************************************
//Mañana
//***************************************************
    if (hora >= 150 && hora <= 330){
        background(0,0,100+minuto);
        fill (255,colorB+segundo,0)
        ellipse (50,50,50,50);
        fill (0,0,20+minuto);
        ellipse (width/2, height/2, 250, 250);
        push();
        translate (width/2, height/2);
        rotate(segundo/5);
        stroke(255, 0, 0);
        line (0, 0, 0, -90);
        pop();
    push();
      translate (width/2, height/2);
      rotate(hora/2);
      line (0, 0, 0, -80);
    pop();
    push();
      translate (width/2, height/2);
      rotate(minuto/4);
      line (0, 0, 0, -120);
    pop();
}
}
//******************************************************
//PM
//******************************************************  
  if (dia == 2)
  {
//******************************************************
//Tarde
//******************************************************    
      if (hora >= 360 && hora <= 150){
        background(0+(segundo*3),0+segundo,255-segundo);
        fill (255,colorA-segundo,0)
        ellipse (50,50,50,50);
        fill (0,0,250-minuto);
        ellipse (width/2, height/2, 250, 250);
        push();
        translate (width/2, height/2);
        rotate(segundo/3);
        stroke(255, 0, 0);
        line (0, 0, 0, -90);
        pop();
    push();
      translate (width/2, height/2);
      rotate(hora/2);
      line (0, 0, 0, -80);
    pop();
    push();
      translate (width/2, height/2);
      rotate(minuto/3);
      line (0, 0, 0, -120);
    pop();
      }
//******************************************************
//Noche
//******************************************************    
    if (hora >= 150 && hora <= 330){
      background(0,0,255-segundo);
        fill (255,colorB+(segundo*2),111)
        ellipse (segundo,50,50,50);
        fill (0,0,colorB+segundo);
        ellipse (width/2, height/2, 250, 250);
        push();
        translate (width/2, height/2);
        rotate(segundo)
        stroke(255, 0, 0);
        line (0, 0, 0, -90);
        pop();
        push();
         translate (width/2, height/2);
        rotate(hora*3);
        line (0, 0, 0, -80);
        pop();
        push();
        translate (width/2, height/2);
        rotate(minuto);
        line (0, 0, 0, -120);
        pop();
      }
  }
}
