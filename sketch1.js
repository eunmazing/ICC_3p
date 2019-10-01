var x,y,w; // x : positionX y : sin w : tan
var j; // j : 층

var a = 5;
var i = 8;
var h = 40;

//var A = map(mouseX, 0, width,3,30);

function setup() {
  createCanvas(1300,800);
  noStroke();
  fill(0,255,255);
  let h = height/i;
 // color stroke(A)
}

function draw() {
  background(200,0,255);
  
  for(j=1; j<i; j+=1){
    for(x=0; x<width*i; x+=a){ //x가 width
    if(width*j<= x<width*(j+1)){ //
    y = sin(x*PI/180)*h;
    w = tan(x*PI/180)*h;
      if(j%2 == 0){
    line(x,height*(i-j)/i+y,x+a,height*(i-j)/i+sin((x+a)*PI/180));
      }
      else
      {
      ellipse(x-width,height*(i-j)/i + w,(mouseX%180)/20);
      }
    //fill(0);
    stroke(255);
      strokeWeight(2);
    }
    }
  }
}