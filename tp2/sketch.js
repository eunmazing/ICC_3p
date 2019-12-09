var SuicideData = null;
var yearPosition;
var finalYear = 29;
var yearNumber;
var yeoja;
var namja;
var gye;

function setup() {
  createCanvas(windowWidth, windowHeight);
  var url =
    "http://openapi.seoul.go.kr:8088/434f4365526b7468313236754b6b454f/json/octastatapi10775/1/5/";
  loadJSON(url, onSuicide);
}

function draw() {
  background(51);

  if (SuicideData == null) return;
  mouseValue();
  updateYeoja();
  updateNamja();
  updateGye();

  fill(255);
  rect(50, 300 - yeoja, 30, yeoja);
  rect(100, 300 - namja, 30, namja);
  rect(150, 300 - gye, 30, gye);
}

//1. 데이터값 불러오기.
function onSuicide(data) {
  SuicideData = data.octastatapi10775;
}

//1. 마우스의 위치에 따라 연령대 값으로 변환.
//2. 연령대 값은 JSON의 row 값으로 변환.
function mouseValue() {
  yearNumber = map(mouseX, 0, windowWidth, 0, finalYear);

  if (yearNumber >= 0 && yearNumber < 15) {
    yearPosition = 1;
  } else if (yearNumber >= 15 && yearNumber < 20) {
    yearPosition = 2;
  } else if (yearNumber >= 20 && yearNumber < 25) {
    yearPosition = 3;
  } else if (yearNumber >= 25 && yearNumber < 30) {
    yearPosition = 4;
  }

  console.log(yearNumber);
  console.log(yearPosition);
}

//1. function mouseValue에 따라 var yeoja 값 변환.
function updateYeoja() {
  yeoja = SuicideData.row[yearPosition].YEOJA_1;
  console.log("YEOJA", SuicideData.row[yearPosition].YEOJA_1);
}

//1. function mouseValue에 따라 var namja 값 변환.
function updateNamja() {
  namja = SuicideData.row[yearPosition].NAMJA_1;
  console.log("NAMJA", SuicideData.row[yearPosition].NAMJA_1);
}

//1. function mouseValue에 따라 var gye 값 변환.
function updateGye() {
  gye = SuicideData.row[yearPosition].GYE_1;
  console.log("GYE", SuicideData.row[yearPosition].GYE_1);
}