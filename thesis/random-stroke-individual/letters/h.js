function draw_h(max) {

	strokeWeight(random(0, window.innerWidth / 20));

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates
	var xA = random(5, q2);
	var yA = random(5, q2);
	var yB = random(q2, max);
	var yC = ((yB - yA) / 2) + yA;
	var xD = random(q2, max);

	// lines
	line(xA, yA, xA, yB);
	line(xA, yC, xD, yC);
	line(xD, yA, xD, yB);

}