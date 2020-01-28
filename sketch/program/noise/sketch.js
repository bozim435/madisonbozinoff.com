function setup() {

  createCanvas(500, 500);
  background(255);
  noStroke();

}

function draw() {

  var inc = random(0.01, 0.1);
  var start = 0;

  var xoff = start;
  stroke(0);
  strokeWeight(random(0, 100));

  beginShape();
  for (var yl = height / 8; yl < (height / 8) * 7; yl++) {

    noFill();

    var xl = noise(xoff) * width / 8 + width / 8;
    vertex(xl, yl);

    xoff += inc;

  }
  endShape();

  beginShape();
  for (var yl = height / 8; yl < (height / 8) * 7; yl++) {

    noFill();

    var xl = noise(xoff) * width / 8 + (width / 8) * 7;
    vertex(xl, yl);

    xoff += inc;

  }
  endShape();

  rotate(PI / 3);
  beginShape();
  for (var xl = width / 8; xl < width; xl++) {

    noFill();

    var yl = noise(xoff) * width / 8 - width / 7;
    vertex(xl, yl);

    xoff += inc;

  }
  endShape();

  rotate(PI / 3.0);
  stroke(0);
  beginShape();
  for (var xl = - 200; xl < width/2; xl++) {

    noFill();

    var yl = noise(xoff) * width / 8 - width;
    vertex(xl, yl);

    xoff += inc;

  }
  endShape();

  noLoop();

}







