var rSlider, gSlider, bSlider, kSlider;
function setup() {
// create canvas
colorMode(HSB,360,100,100);
createCanvas(windowWidth, windowHeight);
textSize(15);

noStroke();
// create sliders
rSlider = createSlider(0, 360, 100);
rSlider.position(20, 20);
gSlider = createSlider(0, 100, 0);
gSlider.position(20, 50);
bSlider = createSlider(0, 100, 100);
bSlider.position(20, 80);
kSlider = createSlider(10,height/4,100);
kSlider.position(20, 110);
aSlider = createSlider(3,100,10);
aSlider.position(20, 140);
  
    background('gray');

}


function greet() {
var name = input.value();
input.value('');
  text(name,windowWidth/2, windowHeight/2);
  textSize(100);
  fill(150,100,100);
}


function draw() {
var r = rSlider.value();
var g = gSlider.value();
var b = bSlider.value();
var k = kSlider.value();
var a = aSlider.value();
  
var x1 = width / 2;
var y1 = height / 2;
  background('gray');
  for (var i = 0; i < a; i++) {
noStroke();
var x2 = x1 + k*cos(TWO_PI * i / a);
var y2 = y1 + k*sin(TWO_PI * i / a);
var x3 = x1 + k*cos(TWO_PI * (i + 1) / a);
var y3 = y1 + k*sin(TWO_PI * (i + 1) / a);
triangle(x1, y1, x2, y2, x3, y3); 
  }
textAlign('left');
fill(r,g,b);
text("Hue", rSlider.x * 2 + rSlider.width, 35);
text("Saturation", gSlider.x * 2 + gSlider.width, 65);
text("Bright", bSlider.x * 2 + bSlider.width, 95);
text("radius",kSlider.x * 2 + kSlider.width, 125);
text("number of angle",aSlider.x * 2 + aSlider.width, 155);
text("Math N-Polygon Logo",windowWidth/2,35);
//  text(name,windowWidth/2, windowHeight/2);
text("Regular",aSlider.x * 2 + aSlider.width, 185);
text(a,aSlider.x * 2 + aSlider.width+60, 185);
text("Polygon",aSlider.x * 2 + aSlider.width+100, 185);
}