var inc = 0.005;
var start = 0;

var t;

function setup() {
  createCanvas(500, 500);
  background(250);
  noStroke();
  t = 0;
}

function draw() {

  var xoff = start;
  stroke(0, 128, 0);
  strokeWeight(15);

  beginShape();

  vertex(width/2, height/2);

    for (var yl = 350; yl < width; yl++) {

      noFill();

      var xl = noise(xoff) * height/2 + height/4;
      vertex(xl, yl);

      xoff += inc;

  }

  endShape();

  fill(255, random(0, 50), 0, random(30, 255));
  noStroke();

  translate(width/2, height/2);
  beginShape();

  var r = random(0.01, 0.05);
  var r2 = random(0.001, 0.01);

  for (var i = 0; i < 300; i++) {

    var ang = map(i, 0, 300, 0, TWO_PI);
    var rad = 300 * noise(i * r, t * r2);

    var x = rad * cos(ang);
    var y = rad * sin(ang);

    curveVertex(x, y);

  }
  endShape(CLOSE);

  fill(255, random(200, 255), 0);

  beginShape();
  for (var j = 0; j < 300; j++) {
    var ang = map(j, 0, 300, 0, TWO_PI);
    var rad = 50 * noise(j * 0.01, t * 0.001);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t += 1;

  noLoop();

}

function mousePressed() {
  
}








