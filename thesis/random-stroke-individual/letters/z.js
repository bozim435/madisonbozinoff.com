function draw_z(max) {

	strokeWeight(random(0, window.innerWidth / 20));

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates
	var xA = random(5, q3);
	var yA = random(5, q1);
	var xB = random(xA, max);
	var yC = random(yA, max);

	// lines
	line(xA, yA, xB, yA);
	line(xA, yC, xB, yC);
	line(xB, yA, xA, yC);

}