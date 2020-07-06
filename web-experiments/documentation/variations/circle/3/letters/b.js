function draw_b(max) {

	strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var less_items = items / 2;
	var pr = 5; // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	var min_dist = max / 50; // minimum distance so that it looks like a "b" and doesn't invert

	// coordinates
	var xA = random(5, q1);
	var yA = random(5, q1);
	var yB = random(q3, max);
	var yC = ((yB - yA) / 2) + yA;
	var xD = random(xA + min_dist, q3);

	// vertical line
	for (var q = 0; q <= items; q++) {

	    var x = xA;
	    var y = lerp(yA, yB, q / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// top line
	for (var o = 0; o <= less_items; o++) {

	    var x = lerp(xA, xD, o / less_items);
	    var y = yA;
	 
	    ellipse(x, y, pr, pr);

	}

	// bottom line
	for (var k = 0; k <= less_items; k++) {

	    var x = lerp(xA, xD, k / less_items);
	    var y = yB;
	 
	    ellipse(x, y, pr, pr);

	}

	// middle line
	for (var e = 0; e <= less_items; e++) {

	    var x = lerp(xA, xD, e / less_items);
	    var y = yC;
	 
	    ellipse(x, y, pr, pr);

	}

	// lengths
	var w = (yB - yA) / 2;
	var h = yC - yA;
	var yH = (h / 2) + yA;
	var yI = (h / 2) + yA + h;
	var r = h / 2;

	// top arc
	for (var i = 0; i < items; i++) {

		var y = yH + r * Math.cos(1.1 * Math.PI * i / items);
   		var x = xD + r * Math.sin(1.1 * Math.PI * i / items);

		ellipse(x, y, pr, pr);

	}

	// bottom arc
	for (var j = 0; j < items; j++) {

		var y = yI + r * Math.cos(1.1 * Math.PI * j / items);
   		var x = xD + r * Math.sin(1.1 * Math.PI * j / items);

		ellipse(x, y, pr, pr);

	}



}