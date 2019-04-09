var datos; 
var cuantos;
var img1;
var img2;
var img3;
var img4;
function preload(){
  datos = loadJSON("pokemon.json");
  img1 = loadImage("bulbasaur.png");
  img2 = loadImage("ivysaur.png");
  img3 = loadImage("venusaur.png");
  img4 = loadImage("charmander.png");
function setup() {
createCanvas(400,400);
backgorund(0);
cuantos = datos.pokemon.length;
}

function draw() {
for (var i = 0; i < cuantos; i++){
 var posX = random(width);
 var posY = random(height); 
 if (i == 1){
  image(img1, posX, posY, 985/3, 1037/3);
 }
 if (i == 2){
   image(img2, posX, posY, 977/3, 817/3);
 }
 if (i == 3){
   image(img3, posX, posY, 281/3, 250/3);
 }
 if (i == 4){
   image(img4, posX, posY, 1354/3, 1500/3);
 }
}
}
