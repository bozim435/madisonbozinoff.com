function draw_a(max) {

	// top coordinate
	var x1 = random(5, max);

	// quarters of the canvas
	var q1 = max / 4;
	var q3 = (max / 4) * 3;

	// secondary coordinates
	var y1 = random(5, q1);
	var x2 = random(5, x1);
	var x3 = random(x1, max);
	var y = random(q3, max);

	// midpoints
	var midx1 = ((x1 - x2) / 2) + x2;
	var midx2 = ((x3 - x1) / 2) + x1;
	var midy = ((y - y1) / 2) + y1;

	// lines
	line(x1, y1, x2, y);
	line(x1, y1, x3, y);
	line(midx1, midy, midx2, midy);

}