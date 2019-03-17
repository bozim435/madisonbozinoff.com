var txt = "BDH MPQ TIJTIJ KEIMRt KEERt CAFGS BAFGBDDH KEI KEEIII CAF BDBDHHD CAF HCAF BAF DDH FGS FGS TIJTIJ KEIII HCA TIJTIJ TIJ TIJ MRt CAFHCAF KEEEIR BDFGS KEIKEI FGS MRt KKEEEI"
var order = 3;
var ngrams = [];
var button;

function setup() {

	noCanvas();

	for (var i = 0; i <= txt.length - order + 1; i++) {

		var gram = txt.substring(i, i + 3);
		ngrams.push(gram);

		if (!ngrams[gram]) {

			ngrams[gram] = [];

		}

		ngrams[gram].push(txt.charAt(i + 3));

	}

	button = createButton("generate");
	button.mousePressed(markov);

	console.log(ngrams);

}

function markov() {

	var currentGram = txt.substring(0, order);
	var result = currentGram;

	for (var i = 0; i < 10; i++) {
		
		var possibilites = ngrams[currentGram];
		var next = random(possibilites);
		result += next;
		var len = result.length;
		currentGram = result.substring(len - 3, len);	

	}

	createP(result);

}