function setup() {

    createCanvas(800, 600);
    ellipseMode(CORNER);
    fill(100);
    noStroke();

}


function draw() {

  background(255);
  var n;

  for (var y = 1; y < height; y += 16) {

    for (var x = 1; x < width; x += 16) {


      n = noise(x*.005, y*.005);

      var diameter = n * 20;
      var box = createCheckbox();
      box.position(x, y);

      if (diameter > 8.5) {

        fill(255);
        box.checked(false);

      } else {

        fill(0, 255, 0)
        box.checked(true);

      }

    }

  }

  button = createButton('X');
  button.position(random(width), random(height));

  noLoop();

}

function mouseClicked() {

    alert("Treasure Here!");
    
}