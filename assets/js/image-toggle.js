container.onclick = function(event) {
	var target = event.target;

	if (target.tagName == "IMG") {
		if (target.style.height !== "500px") {
    		target.style.height = "500px";
	    } else {
	        target.style.height = "88px";
	    }
	}
}