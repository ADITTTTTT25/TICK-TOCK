var hr;
var mn;
var sc;
var hrAngle;
var mnAngle;
var scAngle;

function setup() {
  createCanvas(800, 400);
  hr = hour() % 12;
  mn = minute();
  sc = second();

  hrAngle = map(hr, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);
  hrAngle = hrAngle - 90;
  mnAngle = mnAngle - 90;
  scAngle = scAngle - 90;
}

function draw() {
  background(0);
  angleMode(DEGREES);

  hr = hour() % 12;
  mn = minute();
  sc = second();

  hrAngle = map(hr, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);
  hrAngle = hrAngle - 90;
  mnAngle = mnAngle - 90;
  scAngle = scAngle - 90;

  // for hour
  push();
  translate(400, 200);
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 80, 0);

  pop();

  push();
  noFill();
  stroke("green");
  strokeWeight(7);
  arc(400, 200, 310, 310, 270, scAngle);
  pop();

  push();
  noFill();
  stroke("red");
  strokeWeight(7);
  arc(400, 200, 290, 290, 270, mnAngle);
  pop();

  push();
  noFill();
  stroke("blue");
  strokeWeight(7);
  arc(400, 200, 270, 270, 270, hrAngle);
  pop();

  //for minute
  push();
  translate(400, 200);
  rotate(mnAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  //for second
  push();
  translate(400, 200);
  rotate(scAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 120, 0);
  pop();

  fill("yellow");

  textSize(20);
  text(hr + " : " + mn + " : " + sc, 350, 250);
}
