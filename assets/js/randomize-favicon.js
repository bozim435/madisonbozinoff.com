window.setInterval(function() {
	r = Math.floor(Math.random() * 5 + 1);
	randomizeFavicon("assets/favicons/home-favicon-0" + r + ".png")

}, 500)

function randomizeFavicon(image) {
    var favicon = document.querySelector('link[rel="shortcut icon"]');
    
    if (!favicon) {
        favicon = document.createElement("link");
        favicon.setAttribute("rel", "shortcut icon");
        var head = document.querySelector("head");
        head.appendChild(favicon);
    }   
    
    favicon.setAttribute("type", "image/png");
    favicon.setAttribute("href", image);
}