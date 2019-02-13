var points = [];
var canvas;

function setup() {
  
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  frameRate(5);

  for (var i = 0; i < 10; i++) {

    points[i] = new dots;

  }
  
}

function draw() {

  background(0);

  for (var i = 0; i < points.length; i++) {

    points[i].drawPoint();
    points[i].movePoints();

    // for (var j = 0; j < points.length; j++){

    //   line(points[i], points[i], points[j], points[j]);

    // }

  }
  
}

function dots() {

  this.x  = random(0, width);
  this.y = random(0, height);
  // this.x2 = random(0, width);
  // this.y2 = random(0, height);
  this.r = 1;
  this.jitterX;
  this.jitterY;

  this.drawPoint = function() {

    fill(255);
    stroke(255);
    ellipse(this.x, this.y, this.r, this.r);
    line(this.x, this.y, random(0, width), random(0, height));

  }

  this.movePoints = function() {

    this.jitterX = random(-3, 3);
    this.jitterY = random(-4, 4);
    // this.jitterX2 = random(-3, 3);
    // this.jitterY2 = random(-4, 4);
    this.x += this.jitterX;
    this.y += this.jitterY;
    // this.x2 += this.jitterX2;
    // this.y2 += this.jitterY2;

    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {

      this.x = random(0, width);
      this.y = random(0, height);

    }

  }

}








