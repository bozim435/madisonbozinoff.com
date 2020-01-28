function draw_c(max) {

	// strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var more_items = items * 2;
	var pr = random(5, window.innerWidth / 21); // radius of the points
	 
	var h = random(5, max);
	var w = random(5, max);
	var r = h / 2;
	var q2 = max / 2;

	for (var k = 0; k < more_items; k++) {

		var y = q2 + r * - Math.cos(1 * Math.PI * k / more_items);
   		var x = q2 + r * - Math.sin(1 * Math.PI * k / more_items);

		ellipse(x, y, pr, pr);

	}


}