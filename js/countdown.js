/*** Coundown ***/

const deadline = new Date("Aug 27, 2018 24:00:00").getTime();

setInterval(function() {

    let current = new Date().getTime();
    let difference = deadline - current;
    // console.log(difference);		    

    let h = Math.floor(difference / (1000 * 60 * 60));
    let m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML = h + " hours, " + m + " minutes, " + s + " seconds ";
    
}, 1000)