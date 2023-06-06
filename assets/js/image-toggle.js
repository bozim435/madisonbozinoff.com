projectsContainer.onclick = function(event) {
	var target = event.target;

	if (window.innerWidth > 500) {
		if (target.tagName == "IMG") {
			if (target.style.height !== "30rem") {
				target.style.height = "30rem";
			} else {
				target.style.height = "5.5rem";
			}
		}
	} else if (window.innerWidth <= 500) {
		if (target.tagName == "IMG") {
			if (target.style.width !== "calc(100% - 1.5rem)") {
				target.style.width = "calc(100% - 1.5rem)";
			} else {
				target.style.width = "calc(50% - 1.5rem)";
			}
		}
	}
}

// add something that resets the image sizes when resizing the browser