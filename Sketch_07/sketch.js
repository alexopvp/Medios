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
var amplitud;
var lineasSonido = [];

//Cargar canciones}
function preload(){
  cancionJazz = loadSound( 'assets/Jazz.mp3');
  cancionPop = loadSound( 'assets/Pop latino.mp3');
}

function setup() {
  createCanvas(400, 400);
  cancionJazz.play(1);
  cancionPop.play(1);
  amplitud = new p5.Amplitude();


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
//***************************************************
//Amplitud
//***************************************************
if (mouseIsPressed == true)
{
  cancionJazz.setVolume(volJazz);
var vol = amplitud.getLevel();
  
  lineasSonido.push(vol);

  stroke(255);
  if(lineasSonido.length > width)
  {
    lineasSonido.splice(0,1);
  }

  noFill();

  beginShape();

  for ( var i = 0; i < lineasSonido.length; i++){

    var y = map(lineasSonido[i], 0, 1, height, 0);

    vertex(i, y);

  }

  endShape();
  
}


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