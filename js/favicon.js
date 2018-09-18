function change_favicon(img) {

    let favicon = document.querySelector('link[rel="shortcut icon"]');
    
    if (!favicon) {

        favicon = document.createElement("link");
        favicon.setAttribute("rel", "shortcut icon");
        let head = document.querySelector("head");
        head.appendChild(favicon);

    }	
    
    
    favicon.setAttribute("type", "image/png");
    favicon.setAttribute("href", img);

}

window.setInterval(function() {

	r = Math.floor(Math.random() * 5 + 1);

	change_favicon("assets/favicons/FAV-0" + r + ".png")

}, 500)