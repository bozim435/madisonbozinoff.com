var b = document.getElementsByTagName("BODY")[0];
var c = document.getElementById("container");
var h = document.getElementById("code-header");

var schemes = [["teal", "lightcyan"], ["tomato", "seashell"], ["sienna", "oldlace"], ["mediumseagreen", "honeydew"], ["slateblue", "ghostwhite"]]

var r = Math.floor(Math.random() * schemes.length);

h.style.borderColor = schemes[r][0];
b.style.color = schemes[r][0];
c.style.borderColor = schemes[r][0];
c.style.backgroundColor = schemes[r][1];