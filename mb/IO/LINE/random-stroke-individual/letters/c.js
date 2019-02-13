function draw_c(max) {

	strokeWeight(random(0, window.innerWidth / 20));
	 
	var h = random(5, max);
	var w = random(5, max);

	arc(max / 2, max / 2, w, h, PI / 2, 3 * PI / 2);

}