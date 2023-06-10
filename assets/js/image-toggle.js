projectsContainer.onclick = function(event) {
	let target = event.target;

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

window.onresize = function(event) {
	let images = document.getElementsByTagName("IMG");

	if (window.innerWidth == 500) {
		for (let i = 0; i < images.length; i++) {
			const image = images[i];
			
			if (image.style.height == "30rem") {
				image.style.height = "auto";
				image.style.width = "calc(100% - 1.5rem)";
				image.style.marginRight = "1.5rem";
			} else {
				image.style.height = "auto";
				image.style.width = "calc(50% - 1.5rem)";
				image.style.marginRight = "1.5rem";
			}
		}
	}
	
	if (window.innerWidth > 500 && window.innerWidth < 700) {
		console.log("desktop view")

		for (let j = 0; j < images.length; j++) {
			const image = images[j];
			
			if (image.style.width == "calc(100% - 1.5rem)") {
				image.style.height = "30rem";
				image.style.width = "auto";
				image.style.marginRight = "2rem";
			} else {
				image.style.height = "5.5rem";
				image.style.width = "auto";
				image.style.marginRight = "2rem";
			}
		}
	}
}