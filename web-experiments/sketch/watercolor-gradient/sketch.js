function setup() {
  
  createCanvas(500, 500);
  background(255);
  frameRate(10);
  noStroke();
  noLoop();
  
}

function draw() {
  
  drawLeft();
  drawRight();
  
}

function drawLeft() {
  
  fill(random(255), random(255), random(255), 20);
  
  for (i = 0; i < 1400; i++) {
    
    ellipse(max(random(width), random(width)), random(height), 70, 70);
    
  }
  
}

function drawRight() {
  
  fill(random(255), random(255), random(255), 10);
  
  for (i = 0; i < 1400; i++) {
    
    ellipse(min(random(width), random(width)), random(height), 70, 70);
    
  }
  
}