var x = 500;
var y = 500;
var direccion1 = 0;
var xE = 250;
var yE = 250;
var direccion2 = 0;
var x2 = 0;
var y2 = 0;
var ganador1 = 255/2;
var ganador2 = 255/2;
function setup() {
createCanvas(500, 500);


}

function draw() {
background((ganador1+ganador2)/2);
//********************************************
// Comida
//********************************************
fill(xE, yE, 0);
ellipse(xE, yE, 50, 50);
//********************************************
// Gato
//********************************************
fill(231,93,250);
triangle (x+5, y-25, x+25, y-25, x+25, y-45);
triangle (x-25, y-25, x-25, y - 45, x - 5, y - 25);
fill(101,90,103);
rect (x-25,y-25,50,50);
fill(255);
rect (x-20,y-17,10,10);
rect (x+10,y-17,10,10);
fill(0);
rect (x-15,y-12,5,5);
rect (x+15,y-12,5,5);
ellipse (x, y, 10,10);
//********************************************
//Ratón
//********************************************
fill (82, 176, 203);
ellipse (x2-20,y2-20,30,30);
ellipse (x2+20,y2-20,30,30);
fill (27, 70, 82);
ellipse (x2,y2,50,50);
fill(0);
ellipse (x2-10,y2-10,10,10);
ellipse (x2+10,y2-10,10,10);
ellipse (x2,y2,5,5);
//********************************************
//movimientoRaton
//********************************************
if (keyIsPressed == true) {
if (key == 'd') {
direccion2 = 1;
} else if (key == 'a') {
direccion2 = 2;
}
if (key == 'w') {
direccion2 = 3;
} else if (key == 's') {
direccion2 = 4;
}
if (keyCode == 32) {
x2 = 250;
y2 = 250;
}
//*********************************************
//movimiento Gato
//*********************************************
if (keyCode == RIGHT_ARROW) {
direccion1 = 1;

} else if (keyCode == LEFT_ARROW) {
direccion1 = 2;
}
if (keyCode == UP_ARROW) {
direccion1 = 3;
} else if (keyCode == DOWN_ARROW) {
direccion1 = 4;
}
if (keyCode == 32) {
x = 250;
y = 250;
}
}
//**********************************
//Retorno ratón
//**********************************
if (x2 > 550) {
x2 = -50;
}
if (x2 < -50) {
x2 = 550;
}
if (y2 > 550) {
y2 = -50;
}
if (y2 < -50) {
y2 = 550;
}
//**************************************
//retorno Gato
//**************************************
if (x > 550) {
x = -50;
}
if (x < -50) {
x = 550;
}
if (y > 550) {
y = -50;
}
if (y < -50) {
y = 550;
}
//**************************************
//Gana gato
//**************************************
if (dist(x, y, x2, y2) < 30) {
x2 = 0;
y2 = 0;
ganador1 = ganador1+50;
}
//**************************************
//Gana raton
//**************************************
if (dist(x2, y2, xE, yE) < 30) {
xE = random(0, 500);
yE = random(0, 500);
ganador2 = ganador2-50;
}
//**************************************
//Direccion gato
//**************************************
if (direccion1 == 1) {
x = x + 5;
}
if (direccion1 == 2) {
x = x - 5;
}
  if (direccion1 == 3) {
y = y - 5;
 }
if (direccion1 == 4) {
y = y + 5;
}
//**************************************
//Direccion ratón
//**************************************
if (direccion2 == 1) {
x2 = x2 + 5;
}
if (direccion2 == 2) {
x2 = x2 - 5;
}
  if (direccion2 == 3) {
y2 = y2 - 5;
 }
if (direccion2 == 4) {
y2 = y2 + 5;
}
//**************************************
//Fin juego
//**************************************
if((ganador1+ganador2)/2 < 0 || (ganador1+ganador2)/2 > 255){
  fill(0);
  rect(0,0,500,500);
}
}
