//Variables Abejas
var roberto;
var robertosArmy = [];
var numeroDeRobertos = 8;

//Variables Gusanos
var gusi;
var worms = [];
var tamGus = 20;
var contador = 0;
var numeroDeWorms = 10;

//Variables Hormigas
var culona;
var hormigasCulonas = [];
var numeroHormigasCulonas = 6;
var segundo;

//Variables moscas
var mosco;
var mosquitos = [];
var numeroMosquitos = 4;

//Variables Cucarachas
var cucarachin;
var lasCucarachas = [];
var numeroCucarachas = 5;

//Variables cacas
var cacas = [];
var numeroCacas = 6;
var tiempo1 = 0;

//Variables frutas
var fruto;
var frutas = [];
var numeroFrutas = 8;

function setup() {
  createCanvas(600, 600);
  roberto = new abeja(100, 100);
  gusi = new gusano(100, 100);
  culona = new hormiga(100, 100);
  mosco = new mosca(100, 100);
  cucarachin = new cucaracha(100, 100);
  fruto = new fruta(100,100);
  for (var i = 0; i < numeroDeRobertos; i++) {
    robertosArmy[i] = new abeja(random(width), random(height));
  }
  for (var g = 0; g < numeroDeWorms; g++) {
    worms[g] = new gusano(random(width), random(height));
  }
  for (var h = 0; h < numeroHormigasCulonas; h++) {
    hormigasCulonas[h] = new hormiga(random(width), random(height));
  }
  for (var m = 0; m < numeroMosquitos; m++) {
    mosquitos[m] = new mosca(random(width), random(height));
  }
  for (var c = 0; c < numeroCucarachas; c++) {
    lasCucarachas[c] = new cucaracha(random(width), random(height));
  }
  for (var ca = 0; ca < numeroCacas; ca++){
    for (var cah = 0; cah < numeroHormigasCulonas; cah++)
    {
      cacas[ca] = new caca(hormigasCulonas[cah].posXHor,hormigasCulonas[cah].posYHor);
    }
  }
  for (var f = 0; f < numeroFrutas; f++)
  {
   frutas[f] = new fruta (random(width), random(height));
  }
}

function draw() {
  background(44, 91, 52);
  segundo = second();
  gusi.dibujarse();
  roberto.dibujarse();
  roberto.moverse();
  gusi.moverse(1);
  culona.dibujarse();
  culona.moverse();
  mosco.dibujarse();
  mosco.moverse();
  cucarachin.dibujarse();
  cucarachin.moverse();
  fruto.dibujarse();
  if (dist(mouseX, mouseY, roberto.posXAbe, roberto.posYAbe) < 15) {
    roberto.morirse();
  }
  
  for (var g = 0; g < numeroDeWorms; g++) {
    worms[g].dibujarse();
    worms[g].moverse(1);
    for (var q = 0; q < numeroDeRobertos; q++) {
      if (dist(worms[g].posXGus, worms[g].posYGus, robertosArmy[q].posXAbe, robertosArmy[q].posYAbe) < 10) {
        if (contador == 0){
        worms[g].crecer();
        }
      }
    }
    for (var z = 0; z < numeroHormigasCulonas; z++){
      if (dist(worms[g].posXGus, worms[g].posYGus, hormigasCulonas[z].posXHor, hormigasCulonas[z].posYHor) < 10) {
        worms[g].morirse();      
      }
    }
  }
  for (var ca = 0; ca < numeroCacas; ca++){
    if ((tiempo1 - segundo) >= 10){
    cacas[ca].dibujarse();
      tiempo1 = segundo;
    }
  }
  for (var h = 0; h < numeroHormigasCulonas; h++) {
    hormigasCulonas[h].dibujarse();
    hormigasCulonas[h].moverse();
  }
  for (var i = 0; i < numeroDeRobertos; i++) {
    robertosArmy[i].dibujarse();
    robertosArmy[i].moverse();
    for (var j = 0; j < numeroDeWorms; j++) {
      if (dist(robertosArmy[i].posXAbe, robertosArmy[i].posYAbe, worms[j].posXGus, worms[j].posYGus) < 10) {
        robertosArmy[i].morirse();
      }
    }
  } 

  for (var m = 0; m < numeroMosquitos; m++) {
    mosquitos[m].dibujarse();
    mosquitos[m].moverse();
  }
  for (var c = 0; c < numeroCucarachas; c++){
    lasCucarachas[c].dibujarse();
    lasCucarachas[c].moverse();
  }
    for (var f = 0; f < numeroFrutas; f++)
  {
   frutas[f].dibujarse();
    for (var cf = 0; cf < numeroCucarachas; cf++)
    {
     if (dist(frutas[f].posXfru,frutas[f].posYfru,lasCucarachas[cf].posXcuc,lasCucarachas[cf].posYCuc)<20)
     {
      frutas[f].esComida(); 
     }
    }
  }
}

function abeja(_x, _y) {
  //Caracteristicas
  this.posXAbe = _x;
  this.posYAbe = _y;
  this.estaViva = true;

  //Habilidades

  //Dibujarse
  this.dibujarse = function() {
    if (this.estaViva == true) {
      fill(255, 255, 0)
      ellipse(this.posXAbe, this.posYAbe, 30, 45);
      fill(0);
      rect(this.posXAbe - 15, this.posYAbe - 5, 29, 10);
      rect(this.posXAbe - 10, this.posYAbe + 10, 20, 5);
      rect(this.posXAbe - 12, this.posYAbe + -15, 23, 5);
      fill(90, 128, 155);
      triangle(this.posXAbe - 20, this.posYAbe + 30, this.posXAbe, this.posYAbe, this.posXAbe - 13, this.posYAbe - 12);
      triangle(this.posXAbe, this.posYAbe, this.posXAbe + 13, this.posYAbe - 12, this.posXAbe + 20, this.posYAbe + 30);
      fill(255, 255, 0);
      ellipse(this.posXAbe, this.posYAbe - 25, 20, 20);
      fill(62, 72, 79);
      triangle(this.posXAbe - 3, this.posYAbe + 23, this.posXAbe + 3, this.posYAbe + 23, this.posXAbe, this.posYAbe + 35)
      fill(0);
      ellipse(this.posXAbe - 5, this.posYAbe - 30, 5, 5);
      ellipse(this.posXAbe + 5, this.posYAbe + -30, 5, 5);
    }
  }

  //Moverse
  this.moverse = function() {


    //movimiento
    this.posXAbe = this.posXAbe + random(0, 0.5);
    this.posXAbe = this.posXAbe + random(-0.5, 0);
    this.posYAbe = this.posYAbe + random(0, 0);
    this.posYAbe = this.posYAbe + random(-2, 0);

    //Salida
    if (this.posXAbe > width) {
      this.posXAbe = random(width);
      this.posYAbe = random(height);
    }
    if (this.posXAbe < 0) {
      this.posXAbe = random(width);
      this.posYAbe = random(height);
    }
    if (this.posYAbe < -300) {
      this.posXAbe = random(width);
      this.posYAbe = random(height);
    }
    if (this.posYAbe > height) {
      this.posXAbe = random(width);
      this.posYAbe = random(height);
    }
  }

  //morirse
  this.morirse = function() {
    this.estaViva = false;
  }
}

function gusano(x, y) {

  //Caracteristicas
  this.posXGus = x;
  this.posYGus = y;
  this.tamGus = tamGus;
  this.contador = contador;
  this.estaViva = true;
  //Habilidades
  this.dibujarse = function() {
    if (this.estaViva == true){
    fill(0, 255, 0);
    ellipse(this.posXGus - 10, this.posYGus, this.tamGus, this.tamGus);
    fill(255, 0, 0);
    ellipse(this.posXGus - 10, this.posYGus + 5, 5, 5);
    ellipse(this.posXGus - 15, this.posYGus - 5, 5, 5);
    fill(0, 255, 0);
    ellipse(this.posXGus, this.posYGus, this.tamGus, this.tamGus);
    fill(255, 0, 0);
    ellipse(this.posXGus, this.posYGus - 5, 5, 5);
    fill(0, 255, 0);
    ellipse(this.posXGus + 10, this.posYGus, this.tamGus, this.tamGus);
    fill(255, 0, 0);
    ellipse(this.posXGus + 10, this.posYGus, 5, 5);
    fill(0, 255, 0);
    ellipse(this.posXGus + 20, this.posYGus, this.tamGus, this.tamGus);
    fill(35, 90, 130);
    ellipse(this.posXGus + 25, this.posYGus - 5, 10, 10);
    ellipse(this.posXGus + 25, this.posYGus + 5, 10, 10);
    }
  }

  //Moverse
  this.moverse = function(dir) {
    this.dir = dir;
    if (this.dir == 1) {
      this.posXGus = this.posXGus + random(0, 0.5);
      this.posXGus = this.posXGus + random(-0.3, 0);
    }

    //Salida
    if (this.posXGus > width) {
      this.posXGus = random(width);
      this.posYGus = random(height);
    }
    if (this.posXGus < 0) {
      this.posXGus = random(width);
      this.posYGus = random(height);
    }
    if (this.posYGus < -100) {
      this.posXGus = random(width);
      this.posYGus = random(height);
    }
    if (this.posYGus > height) {
      this.posXGus = random(width);
      this.posYGus = random(height);
    }
  }

  //Crecer por picada 
  this.crecer = function() {
  this.tamGus = tamGus + 5;
  this.contador = contador + 1;
  }
  //morirse
  this.morirse = function() {
    this.estaViva = false;
  }
}

function hormiga(hX, hY) {
  //Caracteristicas
  this.posXHor = hX;
  this.posYHor = hY;

  //Habilidades

  //Dibujarse 
  this.dibujarse = function() {
    fill(94, 33, 41);
    ellipse(this.posXHor - 15, this.posYHor, 25, 25);
    ellipse(this.posXHor, this.posYHor, 20, 20);
    ellipse(this.posXHor + 15, this.posYHor, 20, 20);
    fill(0, 0, 0);
    ellipse(this.posXHor + 17, this.posYHor - 4, 5, 5);
    ellipse(this.posXHor + 17, this.posYHor + 4, 5, 5);
    line(this.posXHor - 35, this.posYHor - 15, this.posXHor - 20, this.posYHor - 13);
    line(this.posXHor - 35, this.posYHor + 15, this.posXHor - 20, this.posYHor + 12);
    line(this.posXHor - 10, this.posYHor - 15, this.posXHor, this.posYHor - 10);
    line(this.posXHor - 10, this.posYHor + 15, this.posXHor, this.posYHor + 10);
    line(this.posXHor, this.posYHor - 10, this.posXHor + 10, this.posYHor - 15);
    line(this.posXHor, this.posYHor + 10, this.posXHor + 10, this.posYHor + 15);
  }

  //Moverse 
  this.moverse = function() {
    this.posXHor = this.posXHor + random(0, 3);
    this.posXHor = this.posXHor + random(-1, 0);
    this.posYHor = this.posYHor + random(0, 2);
    this.posYHor = this.posYHor + random(-2, 0);

    //Salida
    if (this.posXHor > width + 50) {
      this.posXHor = random(width);
      this.posYHor = random(height);
    }
    if (this.posXHor < 0) {
      this.posXHor = random(width);
      this.posYHor = random(height);
    }
    if (this.posYHor < -300) {
      this.posXHor = random(width);
      this.posYHor = random(height);
    }
    if (this.posYAbe > height) {
      this.posXHor = random(width);
      this.posYHor = random(height);
    }
  }
}

function mosca(mX, mY) {
  // Caracteristicas
  this.posXMos = mX;
  this.posYMos = mY;

  //Habilidades

  //Dibujarse
  this.dibujarse = function() {
    fill(51, 26, 0)
    ellipse(this.posXMos, this.posYMos, 30, 45);
    fill(219, 19, 19);
    ellipse(this.posXMos - 5, this.posYMos - 22, 10, 10);
    ellipse(this.posXMos + 5, this.posYMos - 22, 10, 10);
    fill(132, 120, 120);
    triangle(this.posXMos - 20, this.posYMos + 30, this.posXMos, this.posYMos, this.posXMos - 13, this.posYMos - 12);
    triangle(this.posXMos, this.posYMos, this.posXMos + 13, this.posYMos - 12, this.posXMos + 20, this.posYMos + 30);
    line(this.posXMos - 10, this.posYMos + 30, this.posXMos - 10, this.posYMos + 15);
    line(this.posXMos + 10, this.posYMos + 30, this.posXMos + 10, this.posYMos + 15);
  }

  //Moverse
  this.moverse = function() {
    this.posXMos = this.posXMos + random(0, 1);
    this.posXMos = this.posXMos + random(-1, 0);
    this.posYMos = this.posYMos + random(0, 1);
    this.posYMos = this.posYMos + random(-3, 0);
    //Salida
    if (this.posXMos > width) {
      this.posXMos = random(width);
      this.posYMos = random(height);
    }
    if (this.posXMos < 0) {
      this.posXMos = random(width);
      this.posYMos = random(height);
    }
    if (this.posYMos < -100) {
      this.posXMos = random(width);
      this.posYMos = random(height);
    }
    if (this.posYMos > height) {
      this.posXMos = random(width);
      this.posYMos = random(height);
    }
  }
}

function cucaracha(cX, cY) {
  //Caracteristicas 
  this.posXCuc = cX;
  this.posYCuc = cY;

  //Habilidades

  //Dibujarse
  this.dibujarse = function() {
    fill(102, 44, 11);
    ellipse(this.posXCuc - 20, this.posYCuc, 13, 13);
    fill(140, 65, 22);
    ellipse(this.posXCuc, this.posYCuc, 45, 25);
    line(this.posXCuc - 10, this.posYCuc + 10, this.posXCuc - 30, this.posYCuc + 10);
    line(this.posXCuc - 30, this.posYCuc + 10, this.posXCuc - 15, this.posYCuc + 15);
    line(this.posXCuc, this.posYCuc + 13, this.posXCuc - 10, this.posYCuc + 15);
    line(this.posXCuc - 10, this.posYCuc + 15, this.posXCuc, this.posYCuc + 17);
    line(this.posXCuc + 13, this.posYCuc + 10, this.posXCuc + 5, this.posYCuc + 15);
    line(this.posXCuc + 5, this.posYCuc + 15, this.posXCuc + 13, this.posYCuc + 17);
    line(this.posXCuc - 10, this.posYCuc - 12, this.posXCuc - 30, this.posYCuc - 12);
    line(this.posXCuc - 30, this.posYCuc - 12, this.posXCuc - 15, this.posYCuc - 17);
    line(this.posXCuc, this.posYCuc - 13, this.posXCuc - 10, this.posYCuc - 15);
    line(this.posXCuc - 10, this.posYCuc - 15, this.posXCuc, this.posYCuc - 17);
    line(this.posXCuc + 13, this.posYCuc - 10, this.posXCuc + 5, this.posYCuc - 17);
    line(this.posXCuc + 5, this.posYCuc - 17, this.posXCuc + 13, this.posYCuc - 17);
  }

  //Movimiento
  this.moverse = function() {
    //Moverse
    this.posXCuc = this.posXCuc + random(0, 1);
    this.posXCuc = this.posXCuc + random(-3, 0);
    this.posYCuc = this.posYCuc + random(0, 1);
    this.posYCuc = this.posYCuc + random(-1, 0);

    //Salida
    if (this.posXCuc > width) {
      this.posXCuc = random(width);
      this.posYCuc = random(height);
    }
    if (this.posXCuc < -100) {
      this.posXCuc = random(width);
      this.posYCuc = random(height);
    }
    if (this.posYCuc < -300) {
      this.posXCuc = random(width);
      this.posYCuc = random(height);
    }
    if (this.posYCuc > height) {
      this.posXCuc = random(width);
      this.posYCuc = random(height);
    }
  }
}
function caca(caX,caY){
  //caracteristicas
  this.posXCac = caX;
  this.posYCac = caY;
  
  //Habilidades
  
  //Dibujarse
  this.dibujarse = function(){
    fill (150,75,0);
    ellipse (this.posXCac,this.posYCac,5,5)
  }
  //Ser comida
}

function fruta(fX,fY)
{
 //Caracteristicas
  this.posXfru = fX;
  this.posYfru = fY;
  this.noEsComida = true;
  //Habilidades
  
  //Dibujarse
  this.dibujarse = function(){
    if (this.noEsComida == true){
    fill (125,0,125);
    ellipse (this.posXfru,this.posYfru,10,10);
    }
  }
  //Es comida
  this.esComida = function(){
  this.noEsComida = false; 
  }
}