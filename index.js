// const BTN = document.getElementById("btn");
// let click = false;
// BTN.addEventListener("click", e => {
// 	const img = document.querySelector("img");
// 	// console.log(cs)
// 	// if (img.style.visibility == "hidden") {
// 	// 	img.style.visibility = "visible";
// 	// } else img.style.visibility = "hidden";

// 	if (img.src) {
// 		// console.log(cs)
// 		if (img.style.visibility == "hidden") {
// 			img.style.visibility = "";
// 		} else {
// 			img.style.visibility = "hidden";
// 		}
// 	} else {
// 		img.src = "https://images.aif.ru/007/410/7099f160be2419d6128e3a57e62ec326jpg";
// 		img.style.visibility = "hidden";
// 		img.addEventListener("load", loaded);
// 		img.addEventListener("error", e => {
// 			// console.log(e);
// 			document.querySelector("#rectangle").parentElement.removeChild(document.querySelector("#rectangle"));
// 			document.querySelector("img").parentElement.removeChild(document.querySelector("img"));
// 			let el = document.createElement("label");
// 			el.innerText = "This image cannot be load!";
// 			document.body.appendChild(el);

// 		});
// 	}

// 	function loaded(e) {
// 		this.removeEventListener("load", loaded);
// 		this.style.visibility = "";
// 		document.querySelector("#rectangle").parentElement.removeChild(document.querySelector("#rectangle"));
// 		// console.log(this, e.target);
// 		// console.log("success");
// 	}

// });

// https://images.aif.ru/007/410/7099f160be2419d6128e3a57e62ec326.jpg


// d1.addEventListener("click", onClick, true);
// d2.addEventListener("click", onClick);
// d3.addEventListener("click", onClick);
// d4.addEventListener("click", onClick);
// b1.addEventListener("click", onClick);


// function onClick(e) {
// 	console.log(this);
// 	this.style.background = "red";
// 	setTimeout(() => {
// 		this.style.background = "white";
// 	}, 1000);
// }
const ROOT = document.querySelector("#container");



ROOT.onclick = function (e) {
	let x = document.createElement('p');
	let o = document.createElement('p');

	x.classList.add("x");
	o.classList.add("o");

	if (e.target.childNodes.length == 0 && e.target.tagName !=="P"){
		e.target.appendChild(o);
	}
}


