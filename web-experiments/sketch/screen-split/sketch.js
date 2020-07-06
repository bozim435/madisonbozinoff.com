function setup() {
    createCanvas(500,500);
    noLoop();

    noStroke();
    fill(255, 255, 255);
}

function draw() {
    background(200);
    
    var factors = [1, 2, 4, 5, 10, 20, 25, 50, 100, 125, 250, 500];
    
    var r = factors[Math.floor(Math.random()*factors.length)];
    
    var rows = 500 / r;

    for (row = 0; row < rows; row++) {
          fill(max(random(255), random(255)));
          
          var c = factors[Math.floor(Math.random()*factors.length)];
          var cols = 500 / c;
          
        for (col = 0; col < cols; col++) {
            var randW = factors[Math.floor(Math.random()*factors.length)];
            fill(random(255));
            rect(col * c, row * r, c, r);
        }
    }
}