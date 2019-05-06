var uvas = [];
var numUvas = 0;

var tablaUvas;
var numFilasUvas;
var i;


var INTERACCION = 1;
var INTERACCION2 = 2;
var INFO1 = 3;
var INFO2 = 4;
var estado = INTERACCION;

var contador = 0;
var contar = false;
var tam = 10;

var tiempo;
var M = 10000;

var contadorUvas = 0;

var u;
var v;
var d;

/*function preload(){
  tablaUvas = loadTable('assets/Agrouvas.csv', 'csv', 'header');
}*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  tiempo = millis();
  u = new uvas1();
  v = new vino();
  d = new moneda();
  //background(105,77,34);

  /*numFilasUvas = tablaUvas.getRowCount();
  i = numFilasUvas;*/

}

function draw() {
  if (estado == INTERACCION){
    background(105, 77, 34)
    text ("Cuando toque la pantalla estará cultivando uvas, cuando el tiempo quede en ceros habra pasará a la parte de producción", 20,20);
    text ("Cuenta regresiva: "+(M - floor((millis() - tiempo))) / 1000, 20,40);
    text ("Uvas sembradas por usted: "+contadorUvas,20,60);

    if (frameCount % 10 != 0 && contar) {
      contador++;
    }

    if (contar) {
      fill(0, 255, 0);
      triangle(mouseX, mouseY - 5, mouseX, mouseY - 10, mouseX + 5, mouseY - 7);
      fill(102, 0, 102);
      ellipse(mouseX, mouseY, tam, tam);
    }

    for (var j = 0; j < numUvas; j++) {
      uvas[j].mostrar();

    }
    if (millis() - tiempo > M){
      estado = INTERACCION2;
    }
  }
  else if (estado == INTERACCION2){
    background(255);
    v.mostrar();
    d.mostrar();
    u.mostrar();
    u.mover();
    
    if (dist(u.x,u.y,v.x,v.y) < 10){
      estado = INFO1;
    }
    if (dist(u.x,u.y,d.x,d.y)<10){
      estado = INFO2;
    }
    
  }
  else if (estado == INFO1){
    background (102,15,128);
    fill(255);
    text("Con estos kilos de uvas: " + contadorUvas,20,20);
    text("Se lográn realizar " + contadorUvas + " Botellas de vino",width/2,height/2);
  }
  else if (estado == INFO2){
    background (102,0,0);
    fill(255);
    text("Con esta cantidad de uvas cosechadas: " + contadorUvas,20,20);
    text ("Usted gano al exportar estos kilos de uvas " + contadorUvas*8 + " Dolares",width/2, height/2);
  }
}

function touchStarted() {
  contar = true;
}

function touchEnded() {
  uvas[numUvas] = new uva(tam);

  numUvas++;

  contar = false;
  contador = 0;
  contadorUvas++;
}

function uva(t) {
  this.x = mouseX;
  this.y = mouseY;

  this.tam = t;

  this.mostrar = function() {
    fill(0, 255, 0);
    triangle(this.x, this.y - 5, this.x, this.y - 10, this.x + 5, this.y - 7);
    fill(102, 0, 102);
    ellipse(this.x, this.y, this.tam, this.tam);
  }

}
function uvas1(){
  
  this.tam = windowWidth / 20;
  
  this.x = width/2;
  this.y = height/2;
  
  this.velx = 0;
  this.vely = 0;
  
  this.mostrar = function(){
    fill(0,255,0);
    triangle (this.x, this.y-this.tam/3, this.x, this.y-this.tam, this.x+this.tam/2, this.y-this.tam*1.5);
    fill(102,0,102);
    ellipse(this.x+this.tam/2,this.y,this.tam,this.tam);
    ellipse(this.x-this.tam/2,this.y,this.tam,this.tam);
    ellipse(this.x,this.y,this.tam,this.tam);
    ellipse(this.x+this.tam/3,this.y+this.tam/2,this.tam,this.tam);
    ellipse(this.x-this.tam/3,this.y+this.tam/2,this.tam,this.tam);
    ellipse(this.x,this.y+this.tam,this.tam,this.tam);
  }
  this.mover = function(){
    
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;
    
    this.vely = map(rotationX, -90, 90, -3,3);
    this.velx = map(rotationY, -90, 50, -3,3);
    
    this.x = constrain(this.x, this.tam / 2, width - this.tam / 2);
    this.y = constrain(this.y, this.tam / 2, height - this.tam / 2);
  }
}
function vino(){
  
  this.tam = windowWidth / 10;
  
  this.x = width - 80;
  this.y = height/3;
  
  this.mostrar = function(){
    fill (176, 131, 86);
    rect (this.x + 20, this.y - 20, this.tam - 40, this.tam - 100);
    fill (27,139,79);
    rect (this.x + 25, this.y - 20, this.tam - 50, this.tam);
    rect (this.x, this.y, this.tam, this.tam+80);
  }
}

function moneda(){
  this.tam = windowWidth / 8;
  
  this.x = width/10;
  this.y = height/2;
  
  this.mostrar = function(){
    fill(216,198,32);
    ellipse(this.x,this.y,this.tam,this.tam);
  }
}
