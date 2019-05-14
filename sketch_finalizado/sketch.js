//Variables******************************
//Variables de las uvas
var uvas = [];
var numUvas = 0;

//Variables para la tabla de las Uvas
var tablaUvas;
var numFilasUvas;
var i;

//Variables del cambio de estado
var INTERACCION = 1;
var INTERACCION2 = 2;
var INFO1 = 3;
var INFO2 = 4;
var estado = INTERACCION;

//Variables del contador
var contador = 0;
var contar = false;
var tam = 10;

//Variables del cronometro
var tiempo;
var M = 10000;

//Variables contador de uvas
var contadorUvas = 0;

//Variables que representan los objetos creados
var u;
var v;
var d;
var b;

//Variables de las imagenes
var imgExportaciones;
var imgVino;
var botellas;
var fondo1;
var fondo2;
var billetes;

//Variable de la botella
var bot1;
var bots;
var posX = 120;

//Carga las imagenes y las tablas usadas
function preload(){
  tablaUvas = loadTable('Agrouvas.csv', 'csv', 'header');
  imgExportaciones = loadImage('Exportaciones.png');
  imgVino = loadImage('Botellav.png');
  fondo1 = loadImage('Fondo1.png');
  botellas = loadImage('Botellas.png');
  fondo2 = loadImage('Fondo2.png');
  billetes = loadImage('Billetes.png');
}

//Inicia las variables y crea el canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  tiempo = millis();
  u = new uvas1();
  v = new vino();
  d = new moneda();
  b = new botellasv(posX,120);
  
  bot1 = new botellasv(width/2 + 20,height - 100);
  //background(105,77,34);

  /*numFilasUvas = tablaUvas.getRowCount();2
  i = numFilasUvas;*/

}

//Dibuja todo el programa
function draw() {
  //Primera pantalla y donde se cultivan las uvas
  if (estado == INTERACCION){
    background(105, 77, 34)
    text ("Cuando toque la pantalla estará cultivando uvas, cuando el tiempo quede en ceros pasará a la parte de producción o exportación", 20,20);
    text ("Cuenta regresiva: "+(M - floor((millis() - tiempo))) / 1000, 20,40);
    text ("Uvas sembradas por usted: "+contadorUvas,20,60);
    
    //Cronometro
    if (frameCount % 10 != 0 && contar) {
      contador++;
    }
  //Permite seguir el dedo de la uva
    if (contar) {
      fill(0, 255, 0);
      triangle(mouseX, mouseY - 5, mouseX, mouseY - 10, mouseX + 5, mouseY - 7);
      fill(102, 0, 102);
      ellipse(mouseX, mouseY, tam, tam);
    }
  //Muestra las uvas
    for (var j = 0; j < numUvas; j++) {
      uvas[j].mostrar();

    }
  //Realiza el primer cambio de estado
    if (millis() - tiempo > M){
      estado = INTERACCION2;
    }
  }
  
  //Estado de interacción 2 y toma de decisión
  else if (estado == INTERACCION2){
    background(255);
    textSize(24);
    text ("Tu decides que quieres hacer con tu cultivo",width/4,40);
    text ("Exportación", width/20 - 10, height/2 - 20);
    text ("Producción", width-150, height/2 + 10);
    v.mostrar();
    d.mostrar();
    u.mostrar();
    u.mover();
    
    //Cambio de estado a la decisión de producción
    if (dist(u.x,u.y,v.x,v.y) < 10){
      estado = INFO1;
    }
    //Cambio de estado a la decisión de exportación
    if (dist(u.x,u.y,d.x,d.y)<10){
      estado = INFO2;
    }
    
  }
  
  //Estado de información 1, etapa de producción
  else if (estado == INFO1){
    //background (102,15,128);
    image(fondo1,0,0,width,height);
    fill(0);
    textSize(16);
    text("En los últimos 10 años, en promedio se producían 13842 toneladas al año", 20, 20);
    text("Es decir, 10000 botellas de vino",20,40);
    textSize(24);
    text("Con estos kilos de uvas: " + contadorUvas,20,120);
    text("Usted logró realizar " + contadorUvas + " Botellas de vino",width/2,120);
    //b.mostrar();
    bot1.mostrar();
    
    //Muestra la cantidad de vinos realizados
    for (var i = 0; i < contadorUvas; i++){
      //b.mostrar();
      image(botellas,i*10,120,1500/6,900/6);
    }
    textSize(28);
    text(" x 1333 = ", width / 2+30, height - 70);
    text("1 Tonelada", width / 2 + 150, height - 70);
  }
  
  //Estado de información 2, etapa de exportación
  else if (estado == INFO2){
    //background (102,0,0);
    image(fondo2,0,0,width,height);
    fill(0);
    textSize(16);
    text("En 8 años en promedio, donde se han exportado uvas, Colombia ha ganado en promedio por año 8699 dolares",20,20);
    text("Con esta cantidad de uvas cosechadas: " + contadorUvas,20,40);
    textSize(24);
    text ("Usted ganó al exportar estos kilos de uvas " + contadorUvas*8 + " Dolares",width/5, 120);
    
    //Muestra los billetes que se consigue a través de la cosecha de las uvas.
    for (var q = 0; q < contadorUvas; q++){
      image(billetes, q*10, height/5, 1500/6, 900/6);
    }
  }
}

//Permite el táctil en el IPAD
function touchStarted() {
  contar = true;
}

//Termina la sensación del toque
function touchEnded() {
  //crea la uva
  uvas[numUvas] = new uva(tam);

  numUvas++;

  contar = false;
  contador = 0;
  contadorUvas++;
}

//Objeto de uva cosechada
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

//Objeto de uva a la toma de decisiones
function uvas1(){
  
  this.tam = windowWidth / 20;
  
  this.x = width/2;
  this.y = height/3;
  
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
  
  //Permite el movimiento por rotación del IPAD
  this.mover = function(){
    
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;
    
    this.vely = map(rotationX, -90, 90, -3,3);
    this.velx = map(rotationY, -90, 50, -3,3);
    
    this.x = constrain(this.x, this.tam / 2, width - this.tam / 2);
    this.y = constrain(this.y, this.tam / 2, height - this.tam / 2);
  }
}

//Crea el objeto del vino en la toma de desiciones
function vino(){
  
  this.tam = windowWidth / 10;
  
  this.x = width - 80;
  this.y = height/3;
  
  this.mostrar = function(){
    fill (176, 131, 86);
    ellipse (this.x,this.y, 20,20);
    /*rect (this.x + 20, this.y - 20, this.tam - 40, this.tam - 100);
    fill (27,139,79);
    rect (this.x + 25, this.y - 20, this.tam - 50, this.tam);
    rect (this.x, this.y, this.tam, this.tam+80);*/
    push();
    translate (-55,-60);
    image(imgVino, this.x,this.y, 1500/5, 900/5);
    pop();
  }
}

//Crea el objeto de la bolsa en la toma de desiciones
function moneda(){
  this.tam = windowWidth / 8;
  
  this.x = width/10;
  this.y = height/3;
  
  this.mostrar = function(){
    push();
    translate(-50,-60);
    image(imgExportaciones, this.x,this.y, 1500/6, 900/6);
    pop();
  }
}

//Crea una botella que explica la cantidad necesaria de estas para ser una tonelada, en la etapa de producción
function botellasv(x,y){
  this.x = x;
  this.y = y;
  
  this.mostrar = function(){
    push();
    translate(-116,-60);
    image(botellas,this.x,this.y,1500/6,900/6);
    pop();
  }
}
