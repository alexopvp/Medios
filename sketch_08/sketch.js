var posXGus = [];
var posYGus = [];
var posXHor = [];
var posYHor = [];
var posXMos = [];
var posYMos = [];
var posXAbe = [];
var posYAbe = [];
var posXCuc = [];
var posYCuc = [];
var cant = 10;
var cantMos = 4;
var cantGus = 3;
var cantAbe = 5;
var cantCuc = 8;
var tam = [];
var laFont;


function setup() {
  createCanvas(600, 600);
    for( var i = 0; i < cant; i = i +1){
		posXHor[i] = random(width);
		posYHor[i] = random(height);
  }
   for( var j = 0; j< cantMos; j++)
  {
    posXMos[j] = random(width);
    posYMos[j] = random(height);
  }
	 for ( var g = 0; g < cantGus; g++)
  {
    posXGus[g] = random(width);
    posYGus[g] = random(height);
  }
   for ( var a = 0; a < cantAbe; a++)
  {
    posXAbe[a] = random(width);
    posYAbe[a] = random(height);
  }
   for ( var c = 0; c < cantCuc; c++)
  {
    posXCuc[c] = random(width);
    posYCuc[c] = random(height);
  }
}
function draw() {
  background(44, 91, 52);
//*************************************************************
//Mov Hormigas
//*************************************************************
  for (var i = 0; i < 100; i = i+1)
  {
		posXHor[i] = posXHor[i] + random (0,3);
		posXHor[i] = posXHor[i] + random (-1,0);  
		posYHor[i] = posYHor[i] + random (0,2);  
	  posYHor[i] = posYHor[i] + random (-2,0);
//**************************************************
//Hormiga salida
//**************************************************
if (posXHor[i] > width)
{
posXHor[i] = random(width);
posYHor[i] = random (height);
}
if (posXHor[i] < 0)
{
posXHor[i] = random(width);
posYHor[i] = random (height);
}
if (posYHor[i] < 0)
{
posXHor[i] = random(width);
posYHor[i] = random (height);
}
if (posYHor[i] > height)
{
posXHor[i] = random(width);
posYHor[i] = random (height);
}		
   
		
    
//**************************************************************
//Forma Hormiga
//**************************************************************
  fill (94,33,41);
	ellipse (posXHor[i]+185,posYHor[i]+200,25,25);
	ellipse (posXHor[i]+200,posYHor[i]+200,20,20);
	ellipse (posXHor[i]+215,posYHor[i]+200,20,20);
	fill(0,0,0);
	ellipse (posXHor[i]+217,posYHor[i]+196,5,5);
	ellipse (posXHor[i]+217,posYHor[i]+204,5,5);
	line (posXHor[i]+165,posYHor[i]+185,posXHor[i]+180,posYHor[i]+187);
	line (posXHor[i]+165,posYHor[i]+215,posXHor[i]+180,posYHor[i]+212);
	line (posXHor[i]+190,posYHor[i]+185,posXHor[i]+200,posYHor[i]+190);
	line (posXHor[i]+190,posYHor[i]+215,posXHor[i]+200,posYHor[i]+210);
	line (posXHor[i]+200,posYHor[i]+190,posXHor[i]+210,posYHor[i]+185);
	line (posXHor[i]+200,posYHor[i]+210,posXHor[i]+210,posYHor[i]+ 215);
  }
//***************************************************************
//Mosca
//***************************************************************
  for ( var j = 0; j < 100; j = j+1)
  {
//***************************************************************
//SalidaMosca
//***************************************************************
    if (posXMos[j]  > width)
{
posXMos[j] = random(width);
posYMos[j] = random (height);
}
if (posXMos[j]  < 0)
{
posXMos[j]  = random(width);
posYMos[j] = random (height);
}
if (posYMos[j] < -100)
{
posXMos[j]  = random(width);
posYMos[j] = random (height);
}
if (posYMos[j] > height)
{
posXMos[j]  = random(width);
posYMos[j] = random (height);
}
//***************************************************************
//MovMosca
//***************************************************************
    posXMos[j] = posXMos[j] + random (0,1);
    posXMos[j] = posXMos[j] + random (-1,0);
    posYMos[j] = posYMos[j] + random (0,1);
    posYMos[j] = posYMos[j] + random (-3,0);
//***************************************************************
//FormaMosca
//***************************************************************
  fill (51,26,0)
	ellipse (posXMos[j]+100,posYMos[j]+100,30, 45);
	fill (219,19,19);
	ellipse (posXMos[j]+95,posYMos[j]+78,10,10);
	ellipse (posXMos[j]+105,posYMos[j]+78,10,10);
	fill (132,120,120);
	triangle (posXMos[j]+80,posYMos[j]+130,posXMos[j]+100,posYMos[j]+100,posXMos[j]+87,posYMos[j]+88);
	triangle (posXMos[j]+100,posYMos[j]+100,posXMos[j]+113,posYMos[j]+88,posXMos[j]+120,posYMos[j]+130);
	line (posXMos[j]+90,posYMos[j]+130,posXMos[j]+90,posYMos[j]+115);
	line (posXMos[j]+110,posYMos[j]+130,posXMos[j]+110,posYMos[j]+115);
  }
//***************************************************************
//Gusano
//***************************************************************
  for ( var g = 0; g < 100; g = g+1)
  {
//***************************************************************
//Mov gusano
//***************************************************************
    posXGus[g] = posXGus[g] + random (0,0.5);
    posXGus[g] = posXGus[g] + random (-0.3,0);
    posYGus[g] = posYGus[g] + random (0,0);
    posYGus[g] = posYGus[g] + random (-0,0);
//***************************************************************
//Salida gusano
//***************************************************************
      if (posXGus[g]  > width)
{
posXGus[g] = random(width);
posYGus[g] = random (height);
}
if (posXGus[g]  < 0)
{
posXGus[g]  = random(width);
posYGus[g] = random (height);
}
if (posYGus[g] < -100)
{
posXGus[g]  = random(width);
posYGus[g] = random (height);
}
if (posYGus[g] > height)
{
posXGus[g]  = random(width);
posYGus[g] = random (height);
}
//***************************************************************
//Forma Gusano
//***************************************************************
	fill (0,255,0);
	ellipse (posXGus[g]+100,posYGus[g]+250,20,20);
	fill (255,0,0);
	ellipse (posXGus[g]+100,posYGus[g]+255,5,5);
	ellipse (posXGus[g]+95,posYGus[g]+245,5,5);
	fill (0,255,0);
	ellipse (posXGus[g]+110,posYGus[g]+250,20,20);
	fill (255,0,0);
	ellipse (posXGus[g]+110,posYGus[g]+245,5,5);
	fill (0,255,0);
	ellipse (posXGus[g]+120,posYGus[g]+250,20,20);
	fill(255,0,0);
	ellipse (posXGus[g]+120,posYGus[g]+250,5,5);
	fill(0,255,0);
	ellipse (posXGus[g]+130,posYGus[g]+250,20,20);
	fill (35,90,130);
	ellipse (posXGus[g]+135,posYGus[g]+245,10,10);
	ellipse (posXGus[g]+135,posYGus[g]+255,10,10);
}
//***************************************************************
//Abeja
//***************************************************************
  for ( var a = 0; a < 100; a++)
  {
//***************************************************************
//Movimiento Abeja
//***************************************************************
    posXAbe[a] = posXAbe[a] + random (0,0.5);
    posXAbe[a] = posXAbe[a] + random (-0.5,0);
    posYAbe[a] = posYAbe[a] + random (0,0);
    posYAbe[a] = posYAbe[a] + random (-2,0);
//***************************************************************
//Salida Abeja
//***************************************************************
if (posXAbe[a]  > width)
{
posXAbe[a] = random(width);
posYAbe[a] = random (height);
}
if (posXAbe[a]  < 0)
{
posXAbe[a]  = random(width);
posYAbe[a] = random (height);
}
if (posYAbe[a] < -300)
{
posXAbe[a]  = random(width);
posYAbe[a] = random (height);
}
if (posYAbe[a] > height)
{
posXAbe[a]  = random(width);
posYAbe[a] = random (height);
}
//***************************************************************
//Forma Abeja
//***************************************************************
  fill(255,255,0)
	ellipse (posXAbe[a]+255,posYAbe[a]+255,30,45);
	fill(0);
	rect (posXAbe[a]+240,posYAbe[a]+250,29,10);
	rect (posXAbe[a]+245,posYAbe[a]+265,20,5);
	rect (posXAbe[a]+243,posYAbe[a]+240,23,5);
	fill (90, 128, 155);
	triangle (posXAbe[a]+235,posYAbe[a]+285,posXAbe[a]+255,posYAbe[a]+255,posXAbe[a]+242,posYAbe[a]+243);
	triangle (posXAbe[a]+255,posYAbe[a]+255,posXAbe[a]+268,posYAbe[a]+243,posXAbe[a]+275,posYAbe[a]+285);
	fill (255,255,0);
	ellipse (posXAbe[a]+255,posYAbe[a]+230,20,20);
	fill (62, 72, 79);
	triangle (posXAbe[a]+252,posYAbe[a]+278,posXAbe[a]+258,posYAbe[a]+278,posXAbe[a]+255,posYAbe[a]+290)
	fill(0);
	ellipse (posXAbe[a]+250,posYAbe[a]+225,5,5);
	ellipse (posXAbe[a]+260,posYAbe[a]+225,5,5);
}
//***************************************************************
//Cucaracha
//***************************************************************
  for ( var c = 0; c < 100; c = c + 1)
  {
//***************************************************************
//Movimiento Cucaracha
//***************************************************************
    posXCuc[c] = posXCuc[c] + random (0,1);
    posXCuc[c] = posXCuc[c] + random (-3,0);
    posYCuc[c] = posYCuc[c] + random (0,1);
    posYCuc[c] = posYCuc[c] + random (-1,0);
//***************************************************************
//Salida Cucaracha
//***************************************************************
if (posXCuc[c]  > width)
{
posXCuc[c] = random(width);
posYCuc[c] = random (height);
}
if (posXCuc[c]  < -100)
{
posXCuc[c] = random(width);
posYCuc[c] = random (height);
}
if (posYCuc[c] < -300)
{
posXCuc[c] = random(width);
posYCuc[c] = random (height);
}
if (posYCuc[c] > height)
{
posXCuc[c] = random(width);
posYCuc[c] = random (height);
}
//***************************************************************
//Forma cucaracha
//***************************************************************   
	fill(102, 44, 11);
	ellipse (posXCuc[c]+30,posYCuc[c]+50,13,13);
	fill(140, 65, 22);
	ellipse (posXCuc[c]+50,posYCuc[c]+50,45,25);
	line (posXCuc[c]+40,posYCuc[c]+60,posXCuc[c]+20,posYCuc[c]+60);
	line (posXCuc[c]+20,posYCuc[c]+60,posXCuc[c]+35,posYCuc[c]+65);
	line (posXCuc[c]+50,posYCuc[c]+63,posXCuc[c]+40,posYCuc[c]+65);
	line (posXCuc[c]+40,posYCuc[c]+65,posXCuc[c]+50,posYCuc[c]+67);
	line (posXCuc[c]+63,posYCuc[c]+60,posXCuc[c]+55,posYCuc[c]+65);
	line (posXCuc[c]+55,posYCuc[c]+65,posXCuc[c]+63,posYCuc[c]+67);
	line (posXCuc[c]+40,posYCuc[c]+38,posXCuc[c]+20,posYCuc[c]+38);
	line (posXCuc[c]+20,posYCuc[c]+38,posXCuc[c]+35,posYCuc[c]+33);
	line (posXCuc[c]+50,posYCuc[c]+37,posXCuc[c]+40,posYCuc[c]+35);	
	line (posXCuc[c]+40,posYCuc[c]+35,posXCuc[c]+50,posYCuc[c]+33);
	line (posXCuc[c]+63,posYCuc[c]+40,posXCuc[c]+55,posYCuc[c]+33);
	line (posXCuc[c]+55,posYCuc[c]+33,posXCuc[c]+63,posYCuc[c]+33);
}
}
  

