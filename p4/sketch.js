var max_Coins = 1000;
var Coins = [];
var Sound;


function Coin(x, y, vy, vx, sz, c) {
  this.x = x;
  this.y = y;
  this.vy = vy;
  this.vx = vx;
  this.sz = sz;
  this.c = c;

  this.move = function() {
    this.y += this.vy;
    this.x += this.vx;
    if (this.y<0 || this.y>windowHeight) this.vy = -this.vy;
    if (this.x<0 || this.x>windowWidth) this.vx = -this.vx;

    if (mouseIsPressed) {
      C.play();
      var xdif = abs(this.x-mouseX);
      if (xdif < 100 + random(-100,100)) {
        if ( (this.y- mouseY) > random(-100,100)) {
          this.y=mouseY;
          this.x=mouseX;
        }
      }
    }
  }

  this.render = function() { 
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, random(10,50), this.sz);
  }
}

function preload() {
  Sound = loadSound('5AQHO.mp3');
  C = loadSound('Coin.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  var i;
  for (i=0; i<max_Coins; i++) {
    Coins[i] = new Coin(
      random(0, windowWidth),
      random(0, windowHeight), 
      random(-3, 3), //속도
      random(-3, 3),
      random(30, 100), //길이
      color(random(240, 255),random(200, 255),random(0,100)) );
  }
  
  Sound.loop();
}

function draw() {
  background(255,50,50);
  


  var i;
  for (i=0; i<max_Coins; i++) {
    Coins[i].move();
    Coins[i].render();
  }
}
