function setup() {
 createCanvas(500,500);

}

function draw() {
var x = 0
var y = 0
var j=7
for (i = 1; i <= 80; i= i+1)
{
  for (z = 1; z <= j; z= z+1)
  {
    for (t = 1; t <= 2; t= t+1)
    {
      fill(0,0,0);
      triangle(x,30+y,30+x,30+y,30+x, y);
      triangle(60+x,30+y,60+x,y,90+x, y);
      x = x+30
     }
     x=x+60
   }
   j=j+1
  x=-90*i
  y=y+30
}
}
