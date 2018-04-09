function draw_o(max) {

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates
	var h = random(5, max);
	var w = random(5, max);

	// circle
	ellipse(q2, q2, w, h);

}