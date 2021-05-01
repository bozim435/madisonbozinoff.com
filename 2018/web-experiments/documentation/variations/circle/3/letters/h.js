function draw_h(max) {

	strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var pr = 5; // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates
	var xA = random(5, q2);
	var yA = random(5, q2);
	var yB = random(q2, max);
	var yC = ((yB - yA) / 2) + yA;
	var xD = random(q2, max);

	// left line
	for (var k = 0; k <= items; k++) {

	    var x = xA;
	    var y = lerp(yA, yB, k / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// mid line
	for (var j = 0; j <= items; j++) {

	    var x = lerp(xA, xD, j / items);
	    var y = yC;
	 
	    ellipse(x, y, pr, pr);

	}

	// right line
	for (var i = 0; i <= items; i++) {

	    var x = xD;
	    var y = lerp(yA, yB, i / items);
	 
	    ellipse(x, y, pr, pr);

	}

}