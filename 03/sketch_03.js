        var x = 0
        var direccion = 1
        var trayecto = 1
        var fondo = 255
        var incremento = 10
        var controlTrayectoDos = 0
        var y=0
        var Nube1 = 0
        var Nube2 = 0
        var Nube3 = 0
        var incrementoY = 5
        var contador = 0
        var estrella1 = 20
        var estrella2 = 270
        var estrella3 = 390  
        var estrella4 = 630
        var estrella5 = 755
        var yestrella1 = -20
        var yestrella2 = -500
        var yestrella3 = -370
        var yestrella4 = -680
        var yestrella5 = -795
        var contadorEstrella1 = 0
        var contadorEstrella2 = 0
        var contadorEstrella3 = 0
        var contadorEstrella4 = 0
        var contadorEstrella5 = 0
        
        
        function setup() {
        createCanvas(800, 800)
      }
      
      
      function draw() {
        background(20, 0, fondo);
        
        //**********************************************
        //Nave espacial
        //**********************************************
        fill(101, 163, 216);
        rect(x, 650, 50, 100);
        fill(206, 4, 4);
        triangle(x, 650, x+25, 600, x+50, 650);
        fill(232, 95, 9);
        triangle(x-10, 790, x, 750, x+12.5, 750);
        triangle(x+12.5, 750, x+25, 790, x+37.5, 750);
        triangle(x+37.5, 750, x+50, 750, x+60, 790);
        fill(7, 5, 232);
        ellipse(x+25, 700, 30, 30);
        
        //************************************************
        // Nubes
        //************************************************
          if(contador<3){  
          noStroke();
          fill(157,255,254);
        ellipse(Nube1+120,y,40,40);
        ellipse(Nube1+140,y,40,40);
        ellipse(Nube1+160,y,40,40);
        ellipse(Nube2+600,y+200,50,50);
        ellipse(Nube2+625,y+200,50,50);
        ellipse(Nube2+650,y+200,50,50);
        ellipse(Nube3+225,y+350,50,50);
        ellipse(Nube3+250,y+350,50,50);
        ellipse(Nube3+275,y+350,50,50);
          if(y>800){
            y=-350;
            Nube1=Nube1+105;
            Nube2=Nube2-105;
            Nube3=Nube3+50;
            contador=contador+1;
          }
        }
        //************************************************
        // Estrellas
        //************************************************
        if (contador>=3){
          noStroke();
          fill(255,250,88);   
         yestrella1=yestrella1+5;
         yestrella2=yestrella2+10;
         yestrella3=yestrella3+15;
         yestrella4=yestrella4+15;
         yestrella5=yestrella5+10;
         if (contadorEstrella1<2){
           ellipse(estrella1,yestrella1,10,10);
         if (yestrella1>800){
           yestrella1=-20;
           estrella1=250;
           contadorEstrella1=contadorEstrella1+1;
           }
         }
         if (contadorEstrella2<3){
           ellipse(estrella2,yestrella2,10,10);
          if(contadorEstrella2==1){
            estrella2=500;
          }
          else if(contadorEstrella2==2){
            estrella2=320;
          }
          if (yestrella2>800){
           yestrella2=-270;
           estrella2=500;
           yestrella2=yestrella2+15;
           contadorEstrella2=contadorEstrella2+1;
           }
          }
          if (contadorEstrella3<5){
           ellipse(estrella3,yestrella3,10,10);
          if(contadorEstrella3==1){
            estrella3=700;
          }
          else if(contadorEstrella3==2){
            estrella3=120;
          }
           else if(contadorEstrella3==3){
            estrella3=675;
          }
          if (yestrella3>800){
           yestrella3=-370;
           estrella3=400;
           contadorEstrella3=contadorEstrella3+1;
           }
          }
          if (contadorEstrella4<5){
           ellipse(estrella4,yestrella4,10,10);
          if(contadorEstrella4==1){
            estrella4=250;
          }
          else if(contadorEstrella4==2){
            estrella4=190;
          }
           else if(contadorEstrella4==3){
            estrella4=575;
          }
          if (yestrella4>800){
           yestrella4=-680;
           estrella4=630;
           contadorEstrella4=contadorEstrella4+1;
           }
          }
          if (contadorEstrella5<3){
           ellipse(estrella5,yestrella5,10,10);
          if(contadorEstrella5==1){
            estrella5=440;
          }
          else if(contadorEstrella5==2){
            estrella5=298;
          }
          if (yestrella5>800){
           yestrella5=-795;
           yestrella5=yestrella5+7;
           contadorEstrella5=contadorEstrella5+1;
           }
          }
        }
        //************************************************
        // Color
        //************************************************
        if (fondo==255) {
          incremento=-0.5
        }
        else if(fondo==0){
          incremento=0.5
        }
      
      //************************************************
      // Trayecto nave espacial
      //************************************************
        if (trayecto==1) {
          fondo = fondo+incremento;
          if (direccion==1) {
            x=x+5;
          } else {
            x=x-5;
          }
          if (x >800) {
            direccion=0;
          }
          if (x < -50) {
            direccion=1;
            trayecto = 2;
          }
        } 
        
        else if (trayecto==2) {
          fondo = fondo+incremento;
            if (direccion==1) {
            x=x+10;
          } else {
            x=x-5;
          }
          if (x >400) {
            direccion=0;
            controlTrayectoDos=1;
          }
          if (controlTrayectoDos==1 && x<100) {
            direccion=1;
            trayecto=3;
            controlTrayectoDos=0;
          }
        } 
        
        
        else if (trayecto==3) {
          fondo = fondo+incremento;
            if (direccion==1) {
            x=x+7;
          } else {
            x=x-5;
          }
          if (x >600) {
            direccion=0;
          }
          if (x < -50) {
            direccion=1;
            trayecto = 4;
          }
        }
         else if (trayecto==4) {
          fondo = fondo+incremento;
            if (direccion==1) {
            x=x+5;
          } else {
            x=x-5;
          }
          if (x >500) {
            direccion=0;
            controlTrayectoDos=1
          }
          if (controlTrayectoDos==1 && x<200) {
            direccion=1;
            trayecto = 1;
            controlTrayectoDos=0;
          }
        }
        y=y+incrementoY*(contador+1)
        if (contadorEstrella1==2 && contadorEstrella2==3){
          if (contadorEstrella3==5 && contadorEstrella4==5){
            if (contadorEstrella5==3){
               contador=0;
            }
          }
        }
      }
