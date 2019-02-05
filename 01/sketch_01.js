function setup() {
createCanvas (500,500);
}

function draw()
{
fill(220,220,220); 
rect(0,0,500,500);
//Fondo
noStroke();
fill(128,96,0);
triangle(120,500,200,450,220,500);
//triangulo
fill(0,0,0);
quad(70,350,80,350,176,500,166,500);
quad(400,500,430,450,430,455,405,500);
//lineas
fill(186,51,0);
beginShape();
vertex(5,235);
vertex(166,100);
vertex(430,380);
vertex(170,200);
endShape();
//forma pico
fill(0,0,0);
triangle(160,350,440,20,200,380);
//Forma pico 2
fill(255,255,255);
quad(244,250,275,215,294,238,273,270);
//Forma ojo
fill(0,0,0);
beginShape();
vertex(270,450);
vertex(305,350);
vertex(360,380);
vertex(317,470);
endShape();
//cuadro grande
}
