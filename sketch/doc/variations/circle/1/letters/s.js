function draw_s(max) {

	// strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var pr = 5; // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;
	
	// coordinates
	var xA = random(q1, q2);
	var yA = random(5, q1);
	var yB = random(q3, max);
	var yC = ((yB - yA) / 2) + yA;
	var xD = random(q2, max);
	var w = xD - xA;
	var h = yC - yA;
	var yH = (h / 2) + yA;
	var yI = (h / 2) + yA + h;
	var r = h / 2;

	// top arc
	for (var f = 0; f < items; f++) {

		var y = yH + r * - Math.cos(1.1 * Math.PI * f / items);
   		var x = xA + r * - Math.sin(1.1 * Math.PI * f / items);

		ellipse(x, y, pr, pr);

	}

	// bottom arc
	for (var e = 0; e < items; e++) {

		var y = yI + r * Math.cos(1.1 * Math.PI * e / items);
   		var x = xD + r * Math.sin(1.1 * Math.PI * e / items);

		ellipse(x, y, pr, pr);

	}

	// connecting lines

	// top line
	for (var j = 0; j <= items; j++) {

	    var x = lerp(xA, xD + (w / 4), j / items);
	    var y = yA;
	 
	    ellipse(x, y, pr, pr);

	}

	// bottom line
	for (var d = 0; d <= items; d++) {

	    var x = lerp(xA - (w / 4), xD, d / items);
	    var y = yB;
	 
	    ellipse(x, y, pr, pr);

	}

	// middle line
	for (var k = 0; k <= items; k++) {

	    var x = lerp(xA, xD, k / items);
	    var y = yC;
	 
	    ellipse(x, y, pr, pr);

	}


}