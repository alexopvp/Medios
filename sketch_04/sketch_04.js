var posXrec1 = 10;
var posYrec1 = 10;
var tamRec1 = 40;
var pincel = 0;
var colores = 0;

  function setup() {
  createCanvas (windowWidth, windowHeight);
  background(100);
}


function draw() {
  noStroke();
  fill (255);
  //*****************************************************
  //Boton Herramientas
  //*****************************************************
  //Boton Reset
  rect(posXrec1, posYrec1, tamRec1, tamRec1);
  //Boton Borrador
  rect(posXrec1+60, posYrec1, tamRec1, tamRec1);
  fill (100);
  rect(posXrec1+75, posYrec1+15, 10, 10);
  //Boton Cuadrados
  fill(255);
  rect(posXrec1+120, posYrec1, tamRec1, tamRec1);
  fill(0);
  rect (posXrec1+135, posYrec1+15, 10, 10);
  rect (posXrec1+140, posYrec1+15, 15, 15);
  rect (posXrec1+130, posYrec1+15, 5, 5);
  //Boton Spry
  fill(255);
  rect(posXrec1+180, posYrec1, tamRec1, tamRec1);
  fill(0);
  ellipse(posXrec1+200, posYrec1+20, 15, 15);
  ellipse(posXrec1+213, posYrec1+20, 7, 7);
  ellipse(posXrec1+187, posYrec1+20, 7, 7);
  ellipse(posXrec1+200, posYrec1+33, 7, 7);
  ellipse(posXrec1+200, posYrec1+7, 7, 7);
  //Boton Picos
  fill(255);
  rect(posXrec1+240, posYrec1, tamRec1, tamRec1);
  fill(0);
  rect(posXrec1+256, posYrec1+20, 7.5, 15);
  triangle(posXrec1+256, posYrec1+20, posXrec1+261, posYrec1+10, posXrec1+264, posYrec1+20);
  //Boton shape1
  fill(255);
  rect(posXrec1+300, posYrec1, tamRec1, tamRec1);
  fill(0);
  quad(posXrec1+315,posYrec1+15,posXrec1+325,posYrec1+15,posXrec1+317.6,posYrec1+33,posXrec1+316.6,posYrec1+33);
  //Boton Sombreado comic
  fill(255);
  rect(posXrec1+360, posYrec1, tamRec1, tamRec1);
  fill(0);
  beginShape();
      vertex(posXrec1+375,posYrec1+15);
      vertex(posXrec1+383.3,posYrec1+20);
      vertex(posXrec1+396.5,posYrec1+34);
      vertex(posXrec1+383.5,posYrec1+25);
      endShape();
  //Boton Shape2
  fill(255);
  rect(posXrec1+420, posYrec1, tamRec1, tamRec1);
  fill(0);
   beginShape();
      vertex(posXrec1+435.25,posYrec1+26.75);
      vertex(posXrec1+443.3,posYrec1+20);
      vertex(posXrec1+456.5,posYrec1+34);
      vertex(posXrec1+443.5,posYrec1+25);
  //Boton Alien
  fill(255);
  rect(posXrec1+480, posYrec1, tamRec1, tamRec1);
  fill(0);
      rect(posXrec1+495, posYrec1+15, 5, 10);
      triangle(posXrec1+495-2, posYrec1+25, posXrec1+495, posYrec1+30, posXrec1+497, posYrec1+25);
      triangle(posXrec1+498, posYrec1+25, posXrec1+500, posYrec1+30, posXrec1+502, posYrec1+25);
  //Boton Random
  fill(255);
  rect(posXrec1+540, posYrec1, tamRec1, tamRec1);
  //*****************************************************
  //Boton Colores
  //*****************************************************
  //Boton Aguamarina
  fill (100, 224, 213);
  rect(posXrec1, posYrec1 +60, tamRec1, tamRec1);
  //Boton Rojo
  fill (255, 0, 0);
  rect(posXrec1 +60, posYrec1 +60, tamRec1, tamRec1);
  //Boton Morado
  fill (193, 15, 206);
  rect(posXrec1 +120, posYrec1 +60, tamRec1, tamRec1);
  //Boton Verde
  fill (0, 255, 0);
  rect(posXrec1 +180, posYrec1 +60, tamRec1, tamRec1);
  //Boton Azul
  fill (0, 0, 255);
  rect(posXrec1 +240, posYrec1 +60, tamRec1, tamRec1);
  //Boton Amarillo
  fill (255, 255, 0);
  rect(posXrec1 +300, posYrec1 +60, tamRec1, tamRec1);
  //Boton Naranja
  fill (255, 154, 3);
  rect(posXrec1 +360, posYrec1 +60, tamRec1, tamRec1);
  //Boton Negro
   fill (0);
  rect(posXrec1 +420, posYrec1 +60, tamRec1, tamRec1);
  //Boton Magenta
   fill (255, 0, 255);
  rect(posXrec1 +480, posYrec1 +60, tamRec1, tamRec1);
  //Boton Vinotinto
  fill (142, 21, 21);
  rect(posXrec1 +540, posYrec1 +60, tamRec1, tamRec1);
  if (mouseIsPressed==true)
  {
    //******************************************************************
    //Colores
    //******************************************************************
    //**********************************************************************************
    //Color Aguamarina
    //**********************************************************************************
    if (mouseX > posXrec1 && mouseX < posXrec1 + tamRec1 && mouseY > posYrec1 +60 && mouseY < posYrec1 +60 + tamRec1) {
      if (colores != 1)
      {
        colores = 1;
      } else if (colores == 1)
      {
        colores = 0;
      }
    }
    if (colores == 1)
    {
      fill (100, 224, 213);
    }
    if (colores == 0)
    {
      fill (255);
    }
    //**********************************************************************************
    //Color Rojo
    //**********************************************************************************
    if (mouseX > posXrec1 +60 && mouseX < posXrec1 +60 + tamRec1 && mouseY > posYrec1 +60 && mouseY < posYrec1 +60 + tamRec1) {
      if (colores != 2)
      {
        colores = 2;
      } else if (colores == 2)
      {
        colores = 0;
      }
    }
    if (colores == 2)
    {
      fill (255, 0, 0);
    }
    if (colores == 0)
    {
      fill (255);
    }
    //***********************************************************************************
    //Color Morado
    //***********************************************************************************
    if (mouseX > posXrec1 +120 && mouseX < posXrec1 +120 + tamRec1 && mouseY > posYrec1 +60 && mouseY < posYrec1 +60 + tamRec1) {
      if (colores != 3)
      {
        colores = 3;
      } else if (colores == 3)
      {
        colores = 0;
      }
    }
    if (colores == 3)
    {
      fill (193, 15, 206);
    }
    if (colores == 0)
    {
      fill (255);
    }
    //***********************************************************************************
    //Color Verde
    //***********************************************************************************
    if (mouseX > posXrec1 +180 && mouseX < posXrec1 +180 + tamRec1 && mouseY > posYrec1 +60 && mouseY < posYrec1 +60 + tamRec1) {
      if (colores != 4)
      {
        colores = 4;
      } else if (colores == 4)
      {
        colores = 0;
      }
    }
    if (colores == 4)
    {
      fill (0, 255, 0);
    }
    if (colores == 0)
    {
      fill (255);
    }
    //***********************************************************************************
    //Color Azul
    //***********************************************************************************
    if (mouseX > posXrec1 +240 && mouseX < posXrec1 +240 + tamRec1 && mouseY > posYrec1 +60 && mouseY < posYrec1 +60 + tamRec1) {
      if (colores != 5)
      {
        colores = 5;
      } else if (colores == 5)
      {
        colores = 0;
      }
    }
    if (colores == 5)
    {
      fill (0, 0, 255);
    }
    if (colores == 0)
    {
      fill (255);
    }
    //***********************************************************************************
    //Color Amarillo
    //***********************************************************************************
    if (mouseX > posXrec1 +300 && mouseX < posXrec1 +300 + tamRec1 && mouseY > posYrec1 +60 && mouseY < posYrec1 +60 + tamRec1) {
      if (colores != 6)
      {
        colores = 6;
      } else if (colores == 6)
      {
        colores = 0;
      }
    }
    if (colores == 6)
    {
      fill (255, 255, 0);
    }
    if (colores == 0)
    {
      fill (255);
    }
    //***********************************************************************************
    //Color Naranja
    //***********************************************************************************
    if (mouseX > posXrec1 +360 && mouseX < posXrec1 +360 + tamRec1 && mouseY > posYrec1 +60 && mouseY < posYrec1 +60 + tamRec1) {
      if (colores != 7)
      {
        colores = 7;
      } else if (colores == 7)
      {
        colores = 0;
      }
    }
    if (colores == 7)
    {
      fill (255, 154, 3);
    }
    if (colores == 0)
    {
      fill (255);
    }
    //***********************************************************************************
    //Color Negro
    //***********************************************************************************
    if (mouseX > posXrec1 +420 && mouseX < posXrec1 +420 + tamRec1 && mouseY > posYrec1 +60 && mouseY < posYrec1 +60 + tamRec1) {
      if (colores != 8)
      {
        colores = 8;
      } else if (colores == 8)
      {
        colores = 0;
      }
    }
    if (colores == 8)
    {
      fill (0, 0, 0);
    }
    if (colores == 0)
    {
      fill (255);
    }
    //***********************************************************************************
    //Color Magenta
    //***********************************************************************************
    if (mouseX > posXrec1 +480 && mouseX < posXrec1 +480 + tamRec1 && mouseY > posYrec1 +60 && mouseY < posYrec1 +60 + tamRec1) {
      if (colores != 9)
      {
        colores = 9;
      } else if (colores == 9)
      {
        colores = 0;
      }
    }
    if (colores == 9)
    {
      fill (255, 0, 255);
    }
    if (colores == 0)
    {
      fill (255);
    }
    //***********************************************************************************
    //Color Vinotinto
    //***********************************************************************************
    if (mouseX > posXrec1 +540 && mouseX < posXrec1 +540 + tamRec1 && mouseY > posYrec1 +60 && mouseY < posYrec1 +60 + tamRec1) {
      if (colores != 10)
      {
        colores = 10;
      } else if (colores == 10)
      {
        colores = 0;
      }
    }
    if (colores == 10)
    {
      fill (142, 21, 21);
    }
    if (colores == 0)
    {
      fill (255);
    }
    //***********************************************************************************
    //Herramientas
    //***********************************************************************************
    //***********************************************************************************
    //Reset
    //***********************************************************************************
    if (mouseX > posXrec1 && mouseX < posXrec1 + tamRec1 && mouseY > posYrec1 && mouseY < posYrec1 + tamRec1) {
      background(100);
    }
    //***********************************************************************************
    //Borrador
    //***********************************************************************************
    if (mouseX > posXrec1 +60 && mouseX < posXrec1 +60 + tamRec1 && mouseY > posYrec1 && mouseY < posYrec1 + tamRec1) {
      if (colores != 11)
      {
        colores = 11;
      } else if (colores == 11)
      {
        colores = 0;
      }
    }
    if (colores == 11)
    {
      fill (100);
    }
    if (colores == 0)
    {
      fill (255);
    }
    //***********************************************************************************
    //Cuadros
    //***********************************************************************************
    if (mouseX > posXrec1+120 && mouseX < posXrec1+120 + tamRec1 && mouseY > posYrec1 && mouseY < posYrec1 + tamRec1) {
      if (pincel != 1) {
        pincel = 1;
      } else if (pincel == 1) {
        pincel = 0;
      }
    }
    if (pincel == 1)
    {
      rect (mouseX, mouseY, 10, 10);
      rect (mouseX+5, mouseY, 15, 15);
      rect (mouseX-5, mouseY, 5, 5);
    }
    if (pincel == 0) {
      ellipse(mouseX, mouseY, 10, 10);
    }
    //***********************************************************************************
    //Spry
    //***********************************************************************************
    if (mouseX > posXrec1+180 && mouseX < posXrec1+180 + tamRec1 && mouseY > posYrec1 && mouseY < posYrec1 + tamRec1) {
      if (pincel != 2) {
        pincel = 2;
      } else if (pincel == 2) {
        pincel = 0;
      }
    }
    if (pincel == 2)
    {
      ellipse(mouseX, mouseY, 15, 15);
      ellipse(mouseX+13, mouseY, 7, 7);
      ellipse(mouseX-13, mouseY, 7, 7);
      ellipse(mouseX, mouseY+13, 7, 7);
      ellipse(mouseX, mouseY-13, 7, 7);
      ellipse(mouseX+13, mouseY+13, 2, 2);
      ellipse(mouseX-13, mouseY-13, 2, 2);
      ellipse(mouseX-13, mouseY+13, 2, 2);
      ellipse(mouseX+13, mouseY-13, 2, 2);
      ellipse(mouseX+7.5, mouseY+7.5, 2, 2);
      ellipse(mouseX-7.5, mouseY-7.5, 2, 2);
      ellipse(mouseX-7.5, mouseY+7.5, 2, 2);
      ellipse(mouseX+7.5, mouseY-7.5, 2, 2);
      ellipse(mouseX+13, mouseY+7.5, 2, 2);
      ellipse(mouseX-13, mouseY-7.5, 2, 2);
      ellipse(mouseX-13, mouseY+7.5, 2, 2);
      ellipse(mouseX+13, mouseY-7.5, 2, 2);
      ellipse(mouseX+7.5, mouseY+13, 2, 2);
      ellipse(mouseX-7.5, mouseY-13, 2, 2);
      ellipse(mouseX-7.5, mouseY+13, 2, 2);
      ellipse(mouseX+7.5, mouseY-13, 2, 2);
    }
    if (pincel == 0) {
      ellipse(mouseX, mouseY, 10, 10);
    }
    //***********************************************************************************
    //Picos
    //***********************************************************************************
    if (mouseX > posXrec1+240 && mouseX < posXrec1+240 + tamRec1 && mouseY > posYrec1 && mouseY < posYrec1 + tamRec1) {
      if (pincel != 3) {
        pincel = 3;
      } else if (pincel == 3) {
        pincel = 0;
      }
    }
    if (pincel == 3)
    {
      rect(mouseX, mouseY+50, 15, 30);
      triangle(mouseX, mouseY+50, mouseX+10, mouseY+5, mouseX+15, mouseY+50);
    }
    if (pincel == 0) {
      ellipse(mouseX, mouseY, 10, 10);
    }
    //***********************************************************************************
    //Shape1
    //***********************************************************************************
    if (mouseX > posXrec1+300 && mouseX < posXrec1+300 + tamRec1 && mouseY > posYrec1 && mouseY < posYrec1 + tamRec1) {
      if (pincel != 4) {
        pincel = 4;
      } else if (pincel == 4) {
        pincel = 0;
      }
    }
    if (pincel == 4)
    {
      quad(mouseX,mouseY,mouseX+10,mouseY,mouseX+17.6,mouseY+150,mouseX+16.6,mouseY+150);
      quad(mouseX+100,mouseY+125,mouseX+107.5,mouseY+112.5,mouseX+107.5,mouseY+113.75,mouseX+101.25,mouseY+125);

    }
    if (pincel == 0) {
      ellipse(mouseX, mouseY, 10, 10);
    }
    //***********************************************************************************
    //Sombreado comic
    //***********************************************************************************
    if (mouseX > posXrec1+360 && mouseX < posXrec1+360 + tamRec1 && mouseY > posYrec1 && mouseY < posYrec1 + tamRec1) {
      if (pincel != 5) {
        pincel = 5;
      } else if (pincel == 5) {
        pincel = 0;
      }
    }
    if (pincel == 5)
    {
      beginShape();
      vertex(mouseX,mouseY);
      vertex(mouseX+16.6,mouseY+10);
      vertex(mouseX+43,mouseY+38);
      vertex(mouseX+17,mouseY+20);
      endShape();
    }
    if (pincel == 0) {
      ellipse(mouseX, mouseY, 10, 10);
    }
    //***********************************************************************************
    //Shape2
    //***********************************************************************************
    if (mouseX > posXrec1+420 && mouseX < posXrec1+420 + tamRec1 && mouseY > posYrec1 && mouseY < posYrec1 + tamRec1) {
      if (pincel != 6) {
        pincel = 6;
      } else if (pincel == 6) {
        pincel = 0;
      }
    }
    if (pincel == 6)
    {
      beginShape();
      vertex(mouseX+0.5,mouseY+23.5);
      vertex(mouseX+16.6,mouseY+10);
      vertex(mouseX+43,mouseY+38);
      vertex(mouseX+17,mouseY+20);
      endShape();
    }
    if (pincel == 0) {
      ellipse(mouseX, mouseY, 10, 10);
    }
    //***********************************************************************************
    //Alien
    //***********************************************************************************
    if (mouseX > posXrec1+480 && mouseX < posXrec1+480 + tamRec1 && mouseY > posYrec1 && mouseY < posYrec1 + tamRec1) {
      if (pincel != 7) {
        pincel = 7;
      } else if (pincel == 7) {
        pincel = 0;
      }
    }
    if (pincel == 7)
    {
      rect(mouseX, mouseY+50, 5, 10);
      triangle(mouseX-1, mouseY+69, mouseX, mouseY+65, mouseX+1.25, mouseY+65);
      triangle(mouseX+1.25, mouseY+65, mouseX+2.5, mouseY+69, mouseX+3.75, mouseY+65);
      triangle(mouseX+3.75, mouseY+65, mouseX+5, mouseY+65, mouseX+6, mouseY+69);
    }
    if (pincel == 0) {
      ellipse(mouseX, mouseY, 10, 10);
    }
    //***********************************************************************************
    //Random
    //***********************************************************************************
    if (mouseX > posXrec1+540 && mouseX < posXrec1+540 + tamRec1 && mouseY > posYrec1 && mouseY < posYrec1 + tamRec1) {
      background (random(255),random(255),random(255));
    }
  }
}
