var deadline = new Date("Aug 19, 2018 24:00:00").getTime();

setInterval(function() {

    var current = new Date().getTime();
    var difference = deadline - current;		    

    var h = Math.floor(difference / (1000 * 60 * 60));
    var m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML = h + " hours, " + m + " minutes, " + s + " seconds ";
    
}, 1000)