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

let step = 0;

ROOT.onclick = function(e) {
  let x = document.createElement("p");
  let o = document.createElement("p");

  //   x.classList.add("x");
  x.innerHTML = "&times;";
  o.classList.add("o");

  if (e.target.childNodes.length == 0 && e.target.tagName !== "P") {
    if (step % 2 == 0) {
      e.target.appendChild(o);
      e.target.setAttribute("data-flag", "o");
    } else {
      e.target.appendChild(x);
      e.target.setAttribute("data-flag", "x");
    }
    // if (step == 5) {
    //   //   setTimeout(() => {
    //   alert("Anyone will can`t win");
    //   location.reload();

    //   //   }, 10);
    // }
    step++;
    // console.log(step);
  }
};

function _win() {
  //------------------ 1,2,3 O ------------------//
  if (
    ROOT.childNodes[1].getAttribute("data-flag") &&
    ROOT.childNodes[1].getAttribute("data-flag") == "o" &&
    (ROOT.childNodes[3].getAttribute("data-flag") &&
      ROOT.childNodes[3].getAttribute("data-flag") == "o") &&
    (ROOT.childNodes[5].getAttribute("data-flag") &&
      ROOT.childNodes[5].getAttribute("data-flag") == "o")
  ) {
    ROOT.querySelector("[data-num='1']").style.background = "green";
    ROOT.querySelector("[data-num='2']").style.background = "green";
    ROOT.querySelector("[data-num='3']").style.background = "green";
    setTimeout(() => {
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 1,2,3 X ------------------//
  if (
    ROOT.childNodes[1].getAttribute("data-flag") &&
    ROOT.childNodes[1].getAttribute("data-flag") == "x" &&
    (ROOT.childNodes[3].getAttribute("data-flag") &&
      ROOT.childNodes[3].getAttribute("data-flag") == "x") &&
    (ROOT.childNodes[5].getAttribute("data-flag") &&
      ROOT.childNodes[5].getAttribute("data-flag") == "x")
  ) {
    ROOT.querySelector("[data-num='1']").style.background = "green";
    ROOT.querySelector("[data-num='2']").style.background = "green";
    ROOT.querySelector("[data-num='3']").style.background = "green";
    setTimeout(() => {
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  //------------------ 4,5,6 O ------------------//
  if (
    ROOT.childNodes[7].getAttribute("data-flag") &&
    ROOT.childNodes[7].getAttribute("data-flag") == "o" &&
    (ROOT.childNodes[9].getAttribute("data-flag") &&
      ROOT.childNodes[9].getAttribute("data-flag") == "o") &&
    (ROOT.childNodes[11].getAttribute("data-flag") &&
      ROOT.childNodes[11].getAttribute("data-flag") == "o")
  ) {
    ROOT.querySelector("[data-num='4']").style.background = "green";
    ROOT.querySelector("[data-num='5']").style.background = "green";
    ROOT.querySelector("[data-num='6']").style.background = "green";
    setTimeout(() => {
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 4,5,6 X ------------------//
  if (
    ROOT.childNodes[7].getAttribute("data-flag") &&
    ROOT.childNodes[7].getAttribute("data-flag") == "x" &&
    (ROOT.childNodes[9].getAttribute("data-flag") &&
      ROOT.childNodes[9].getAttribute("data-flag") == "x") &&
    (ROOT.childNodes[11].getAttribute("data-flag") &&
      ROOT.childNodes[11].getAttribute("data-flag") == "x")
  ) {
    ROOT.querySelector("[data-num='4']").style.background = "green";
    ROOT.querySelector("[data-num='5']").style.background = "green";
    ROOT.querySelector("[data-num='6']").style.background = "green";
    setTimeout(() => {
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  //------------------ 7,8,9 O ------------------//
  if (
    ROOT.childNodes[13].getAttribute("data-flag") &&
    ROOT.childNodes[13].getAttribute("data-flag") == "o" &&
    (ROOT.childNodes[15].getAttribute("data-flag") &&
      ROOT.childNodes[15].getAttribute("data-flag") == "o") &&
    (ROOT.childNodes[17].getAttribute("data-flag") &&
      ROOT.childNodes[17].getAttribute("data-flag") == "o")
  ) {
    ROOT.querySelector("[data-num='7']").style.background = "green";
    ROOT.querySelector("[data-num='8']").style.background = "green";
    ROOT.querySelector("[data-num='9']").style.background = "green";
    setTimeout(() => {
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 7,8,9 X ------------------//
  if (
    ROOT.childNodes[13].getAttribute("data-flag") &&
    ROOT.childNodes[13].getAttribute("data-flag") == "x" &&
    (ROOT.childNodes[15].getAttribute("data-flag") &&
      ROOT.childNodes[15].getAttribute("data-flag") == "x") &&
    (ROOT.childNodes[17].getAttribute("data-flag") &&
      ROOT.childNodes[17].getAttribute("data-flag") == "x")
  ) {
    ROOT.querySelector("[data-num='7']").style.background = "green";
    ROOT.querySelector("[data-num='8']").style.background = "green";
    ROOT.querySelector("[data-num='9']").style.background = "green";
    setTimeout(() => {
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  //------------------ 1,4,7 O ------------------//
  if (
    ROOT.childNodes[1].getAttribute("data-flag") &&
    ROOT.childNodes[1].getAttribute("data-flag") == "o" &&
    (ROOT.childNodes[7].getAttribute("data-flag") &&
      ROOT.childNodes[7].getAttribute("data-flag") == "o") &&
    (ROOT.childNodes[13].getAttribute("data-flag") &&
      ROOT.childNodes[13].getAttribute("data-flag") == "o")
  ) {
    ROOT.querySelector("[data-num='1']").style.background = "green";
    ROOT.querySelector("[data-num='4']").style.background = "green";
    ROOT.querySelector("[data-num='7']").style.background = "green";
    setTimeout(() => {
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 1,4,7 X ------------------//
  if (
    ROOT.childNodes[1].getAttribute("data-flag") &&
    ROOT.childNodes[1].getAttribute("data-flag") == "x" &&
    (ROOT.childNodes[7].getAttribute("data-flag") &&
      ROOT.childNodes[7].getAttribute("data-flag") == "x") &&
    (ROOT.childNodes[13].getAttribute("data-flag") &&
      ROOT.childNodes[13].getAttribute("data-flag") == "x")
  ) {
    ROOT.querySelector("[data-num='1']").style.background = "green";
    ROOT.querySelector("[data-num='4']").style.background = "green";
    ROOT.querySelector("[data-num='7']").style.background = "green";
    setTimeout(() => {
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  //------------------ 2,5,8 O ------------------//
  if (
    ROOT.childNodes[3].getAttribute("data-flag") &&
    ROOT.childNodes[3].getAttribute("data-flag") == "o" &&
    (ROOT.childNodes[9].getAttribute("data-flag") &&
      ROOT.childNodes[9].getAttribute("data-flag") == "o") &&
    (ROOT.childNodes[15].getAttribute("data-flag") &&
      ROOT.childNodes[15].getAttribute("data-flag") == "o")
  ) {
    ROOT.querySelector("[data-num='2']").style.background = "green";
    ROOT.querySelector("[data-num='5']").style.background = "green";
    ROOT.querySelector("[data-num='8']").style.background = "green";
    setTimeout(() => {
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 2,5,8 X ------------------//
  if (
    ROOT.childNodes[3].getAttribute("data-flag") &&
    ROOT.childNodes[3].getAttribute("data-flag") == "x" &&
    (ROOT.childNodes[9].getAttribute("data-flag") &&
      ROOT.childNodes[9].getAttribute("data-flag") == "x") &&
    (ROOT.childNodes[15].getAttribute("data-flag") &&
      ROOT.childNodes[15].getAttribute("data-flag") == "x")
  ) {
    ROOT.querySelector("[data-num='2']").style.background = "green";
    ROOT.querySelector("[data-num='5']").style.background = "green";
    ROOT.querySelector("[data-num='8']").style.background = "green";
    setTimeout(() => {
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  //------------------ 3,6,9 O ------------------//
  if (
    ROOT.childNodes[5].getAttribute("data-flag") &&
    ROOT.childNodes[5].getAttribute("data-flag") == "o" &&
    (ROOT.childNodes[11].getAttribute("data-flag") &&
      ROOT.childNodes[11].getAttribute("data-flag") == "o") &&
    (ROOT.childNodes[17].getAttribute("data-flag") &&
      ROOT.childNodes[17].getAttribute("data-flag") == "o")
  ) {
    ROOT.querySelector("[data-num='3']").style.background = "green";
    ROOT.querySelector("[data-num='6']").style.background = "green";
    ROOT.querySelector("[data-num='9']").style.background = "green";
    setTimeout(() => {
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 3,6,9 X ------------------//
  if (
    ROOT.childNodes[5].getAttribute("data-flag") &&
    ROOT.childNodes[5].getAttribute("data-flag") == "x" &&
    (ROOT.childNodes[11].getAttribute("data-flag") &&
      ROOT.childNodes[11].getAttribute("data-flag") == "x") &&
    (ROOT.childNodes[17].getAttribute("data-flag") &&
      ROOT.childNodes[17].getAttribute("data-flag") == "x")
  ) {
    ROOT.querySelector("[data-num='3']").style.background = "green";
    ROOT.querySelector("[data-num='6']").style.background = "green";
    ROOT.querySelector("[data-num='9']").style.background = "green";
    setTimeout(() => {
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  //------------------ 1,5,9 O ------------------//
  if (
    ROOT.childNodes[1].getAttribute("data-flag") &&
    ROOT.childNodes[1].getAttribute("data-flag") == "o" &&
    (ROOT.childNodes[9].getAttribute("data-flag") &&
      ROOT.childNodes[9].getAttribute("data-flag") == "o") &&
    (ROOT.childNodes[17].getAttribute("data-flag") &&
      ROOT.childNodes[17].getAttribute("data-flag") == "o")
  ) {
    ROOT.querySelector("[data-num='1']").style.background = "green";
    ROOT.querySelector("[data-num='5']").style.background = "green";
    ROOT.querySelector("[data-num='9']").style.background = "green";
    setTimeout(() => {
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 1,5,9 X ------------------//
  if (
    ROOT.childNodes[1].getAttribute("data-flag") &&
    ROOT.childNodes[1].getAttribute("data-flag") == "x" &&
    (ROOT.childNodes[9].getAttribute("data-flag") &&
      ROOT.childNodes[9].getAttribute("data-flag") == "x") &&
    (ROOT.childNodes[17].getAttribute("data-flag") &&
      ROOT.childNodes[17].getAttribute("data-flag") == "x")
  ) {
    ROOT.querySelector("[data-num='1']").style.background = "green";
    ROOT.querySelector("[data-num='5']").style.background = "green";
    ROOT.querySelector("[data-num='9']").style.background = "green";
    setTimeout(() => {
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  //------------------ 3,5,7 O ------------------//
  if (
    ROOT.childNodes[5].getAttribute("data-flag") &&
    ROOT.childNodes[5].getAttribute("data-flag") == "o" &&
    (ROOT.childNodes[9].getAttribute("data-flag") &&
      ROOT.childNodes[9].getAttribute("data-flag") == "o") &&
    (ROOT.childNodes[13].getAttribute("data-flag") &&
      ROOT.childNodes[13].getAttribute("data-flag") == "o")
  ) {
    ROOT.querySelector("[data-num='3']").style.background = "green";
    ROOT.querySelector("[data-num='5']").style.background = "green";
    ROOT.querySelector("[data-num='7']").style.background = "green";
    setTimeout(() => {
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 3,5,7 X ------------------//
  if (
    ROOT.childNodes[5].getAttribute("data-flag") &&
    ROOT.childNodes[5].getAttribute("data-flag") == "x" &&
    (ROOT.childNodes[9].getAttribute("data-flag") &&
      ROOT.childNodes[9].getAttribute("data-flag") == "x") &&
    (ROOT.childNodes[13].getAttribute("data-flag") &&
      ROOT.childNodes[13].getAttribute("data-flag") == "x")
  ) {
    ROOT.querySelector("[data-num='3']").style.background = "green";
    ROOT.querySelector("[data-num='5']").style.background = "green";
    ROOT.querySelector("[data-num='7']").style.background = "green";
    setTimeout(() => {
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }
}

addEventListener("click", _win);
