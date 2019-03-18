//variables de la cancion Jazz
var cancionJazz;
var volJazz;
var miPanJazz;
var velJazz = 1;
//variables de la cancion Pop latino
var cancionPop;
var volPop
var miPanPop;
var velPop=1;

//Cargar canciones}
function preload(){
  cancionJazz = loadSound( 'assets/Jazz.mp3');
  cancionPop = loadSound( 'assets/Pop latino.mp3');
}

function setup() {
  createCanvas(400, 400);
  cancionJazz.play(1);
  cancionPop.play(1);
}

function draw() {
  fill(0);
  rect(0,0,width/2,height);
  fill(255,255,0)
  rect(width/2,0,width,height);
//***************************************************
//volumenJazz
//***************************************************
  volJazz = map(mouseX,width,0,0.0,1.1);
  
  cancionJazz.setVolume(volJazz);

//***************************************************
//velocidadJazz
//***************************************************
  if(keyIsPressed == true){
    if(keyCode == UP_ARROW){
        cancionJazz.rate(velJazz+1);
    }
    else if (keyCode == DOWN_ARROW){
        cancionJazz.rate(velJazz-2);
    }
    if(keyCode == RIGHT_ARROW){
        cancionJazz.rate(velJazz);
    }
  }
//***************************************************
//parlanteJazz
//***************************************************
  miPanJazz = map(mouseY,0,height,-1.0,1.0);
  
  cancionJazz.pan(miPanJazz);
  
//***************************************************
//volumenPop
//***************************************************
  volPop = map(mouseX,0,width,0.0,1.1);
  
  cancionPop.setVolume(volPop);

//***************************************************
//velocidadPop
//***************************************************
   if(keyIsPressed == true){
    if(key == 'w'){
        cancionPop.rate(velPop+1);
    }
    else if (key == 's'){
        cancionPop.rate(velPop-2);
    }
    if(key == 'd'){
        cancionPop.rate(velPop);
    }
  }
//***************************************************
//velocidadPop
//***************************************************
   miPanPop = map(mouseY,height,0,-1.0,1.0);
  
  cancionPop.pan(miPanPop);
 
}