function draw_g(max) {

	strokeWeight(random(0, window.innerWidth / 20));

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;
	
	//coordinates
	var h = random(5, max);
	var w = random(5, max);
	var yC = (h / 2) + q2;
	var xC = q2 - (w / 4);

	// curve
	arc(q2, q2, w, h, PI / 2, 3 * PI / 2);

	// lines
	line(q2, yC, q2, q2);
	line(xC, q2, q2, q2);

}