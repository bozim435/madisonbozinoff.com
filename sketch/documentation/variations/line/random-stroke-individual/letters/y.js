function draw_y(max) {

	strokeWeight(random(0, window.innerWidth / 20));
	
	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates
	var x1 = random(5, max);
	var y1 = random(q1, max);
	var x2 = random(5, x1);
	var x3 = random(x1, max);
	var y = random(5, q1);
	var yb = random(y1, max);

	// lines
	line(x1, y1, x2, y);
	line(x1, y1, x3, y);
	line(x1, y1, x1, yb);

}