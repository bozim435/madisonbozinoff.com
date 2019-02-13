function draw_m(max) {

	strokeWeight(random(0, window.innerWidth / 20));

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;
	
	// coordinates
	var xb1 = random(5, max);
	var y1 = random(5, q1);
	var xb2 = random(xb1, max);
	var x2 = random(5, xb1);
	var x3 = random(xb1, xb2);
	var y = random(q3, max);
	var x4 = random(xb2, max);

	// lines
	line(xb1, y1, x2, y);
	line(xb1, y1, x3, y);
	line(xb2, y1, x3, y);
	line(xb2, y1, x4, y);

}