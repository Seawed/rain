element = document.getElementsByName('rain');
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

let div = document.createElement('div');
div.className = "rain";

base = document.getElementsByTagName('article');

function add_rain() {
	let test = div.cloneNode(true);
	//test.setAttribute('animation', "go-left-right "+ getRandomInt(5) +"s infinite");
	test.style.animation = "go-left-right "+ getRandomInt(15) +"s infinite"
	base[0].append(test);
	//base[0].append(test.('animation', "go-left-right "+ getRandomInt(5) +"s infinite"));
}
setInterval(add_rain, 122)
