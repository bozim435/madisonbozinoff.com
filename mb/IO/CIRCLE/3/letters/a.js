function draw_a(max) {

	strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var pr = 5; // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q3 = (max / 4) * 3;

	// coordinates
	var x1 = random(5, max);
	var y1 = random(5, q1);
	var x2 = random(5, x1);
	var x3 = random(x1, max);
	var y2 = random(q3, max);

	// right line
	for (var i = 0; i <= items; i++) {

	    var x = lerp(x1, x2, i / items) + items;
	    var y = lerp(y1, y2, i / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// left line
	for (var j = 0; j <= items; j++) {

	    var x = lerp(x1, x3, j / items) + items;
	    var y = lerp(y1, y2, j / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// calculating mid points
	var midx1 = ((x1 - x2) / 2) + x2;
	var midx2 = ((x3 - x1) / 2) + x1;
	var midy = ((y2 - y1) / 2) + y1;

	var less_items = items / 2;

	// mid line
	for (var k = 0; k <= less_items; k++) {

	    var x = lerp(midx1, midx2, k / less_items) + items;
	    var y = midy;
	 
	    ellipse(x, y, pr, pr);

	}

}