function draw_q(max) {

	strokeWeight(random(0, window.innerWidth / 20));

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// height and width of circle
	var h = random(5, max);
	var w = random(5, max);

	// coordinates
	var xL = q2;
	var yL = q2 + (h / 2);
	var yL2 = random(yL, max);

	// circle
	ellipse(q2, q2, w, h);

	// tail
	line(xL, yL, xL, yL2);

}