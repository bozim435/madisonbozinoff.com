let IO = ["IO-01", "IO-02", "IO-03", "IO-04"];
let LFL = ["LFL-01", "LFL-02", "LFL-03"];
let Mat = ["Mat-01", "Mat-02"];
let RGB = ["RGB-01", "RGB-02", "RGB-03"];
let RWP = ["RWP-01", "RWP-02"];
let SB = ["SB-01", "SB-02", "SB-03"];

let arr = [IO, LFL, Mat, RGB, RWP, SB];

const content = document.getElementById("content");

shuffle(arr);

for (let i = 0; i < arr.length; i++) {

	shuffle(arr[i]);
	console.log(arr[i]);

	//for (var j = 0; j < arr[i].length; j++) {

		let n = Math.floor(Math.random() * arr[i].length);
		console.log(n);
		let j = i + 1;

		content.innerHTML += '<div class="size"><img src="assets/' + arr[i][n] + '.png"><p>' + j + '</p></div>';
		//content.innerHTML += '<img src="assets/' + arr[i][j] + '.png">';
		console.log(content.innerHTML);

		if (content.innerHTML.includes("LFL-01") == true) {

			console.log("got here");

		}

	//}

}

// Generic Shuffle Function

function shuffle(a) {

    let j, x, i;

    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }

    return a;

}