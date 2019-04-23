//Variables vino
var tablaVino;
var botella;

//Variables columnas y filas
var numFilas;
var numColumnas;

//Cargar cosas
function preload() {
  tablaVino = loadTable('assets/vino.csv', 'csv', 'header');
  botella = loadImage ("Botellap.png");
}

function setup() {
  createCanvas(1000, 1000);
  background(130,0,130);

  //Numero de filas
  numFilas = tablaVino.getRowCount();
  //Numero de Columnas
  numColumnas = tablaVino.getColumnCount();

  for (var i = 0; i < numFilas; i = i + 1) {
    //Años tomados
    var ano = tablaVino.getString(i, 2);
    //Toneladas en el año
    var toneladas = tablaVino.getNum(i, 4);
    
    //medidas de la grafica
    var alto = map(toneladas, 1931, 20000, 0, height);
    var ancho = width / numFilas;
    var posX = (numFilas - 1 - i) * (ancho);
    var posY = height - alto;
    
    //Bottella de vino
    stroke(0);
    fill (0, 197, 20)
    strokeWeight(2);
    rect(posX, posY, ancho - 1, alto - 1);
    fill(0, 172, 15)
    noStroke();
    rect (posX + ancho - 5, posY, 5, alto-1);
    image(botella, posX - 13, posY - 50, ancho + 25, 50);
    
    //Año
    fill (0);
    push();
    translate(posX+(ancho-3), height-2);
    rotate(-HALF_PI);
    textSize(16);
    text(ano, 0, 0);
    pop();
    
    //Toneladas
    push();
    translate(posX+(ancho - 13) -10, posY-90);
    rotate(HALF_PI);
    textSize(16);
    text(toneladas, 0, 0);
    pop();
    
    
    
  }
}

function draw() {
  //background(220);
}