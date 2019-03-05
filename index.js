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
const RES = document.querySelector("#result");

let step = 0;

let lsX = localStorage.getItem("x");
let lsO = localStorage.getItem("o");

lsX = lsX ? +lsX : 0;
lsO = lsO ? +lsO : 0;

if (lsO > 0) {
  let scoreO = document.createElement("p");
  scoreO.innerText = `Score "O": ${lsO}`;
  RES.appendChild(scoreO);
}

if (lsX > 0) {
  let scoreX = document.createElement("p");
  scoreX.innerText = `Score "X": ${lsX}`;
  RES.appendChild(scoreX);
}

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
    step++;
  }
};

function checkO(a, b, c) {
  let winLine =
    ROOT.childNodes[a].getAttribute("data-flag") == "o" &&
    ROOT.childNodes[b].getAttribute("data-flag") == "o" &&
    ROOT.childNodes[c].getAttribute("data-flag") == "o";
  if (winLine) {
    return true;
  } else return false;
}

function checkX(a, b, c) {
  let winLine =
    ROOT.childNodes[a].getAttribute("data-flag") == "x" &&
    ROOT.childNodes[b].getAttribute("data-flag") == "x" &&
    ROOT.childNodes[c].getAttribute("data-flag") == "x";
  if (winLine) {
    return true;
  } else return false;
}

function renderWin(a, b, c) {
  let arr = [];
  arr.push(a, b, c);
  arr.forEach(e => {
    ROOT.querySelector("[data-num='" + e + "']").style.background = "green";
  });
  // ROOT.querySelector("[data-num='" + a + "']").style.background = "green";
  // ROOT.querySelector("[data-num='" + b + "']").style.background = "green";
  // ROOT.querySelector("[data-num='" + c + "']").style.background = "green";
}

function defeat() {
  let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
  if (
    arr.every(e => {
      if (ROOT.childNodes[e].getAttribute("data-flag")) {
        return true;
      } else return false;
    })
  ) {
    return true;
  } else return false;
}

function _win() {
  //------------------ 1,2,3 O ------------------//
  if (checkO(1, 3, 5)) {
    renderWin(1, 2, 3);
    setTimeout(() => {
      lsO += 1;
      localStorage.setItem("o", lsO);
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 1,2,3 X ------------------//
  if (checkX(1, 3, 5)) {
    renderWin(1, 2, 3);
    setTimeout(() => {
      lsX += 1;
      localStorage.setItem("x", lsX);
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  //------------------ 4,5,6 O ------------------//
  if (checkO(7, 9, 11)) {
    renderWin(4, 5, 6);
    setTimeout(() => {
      lsO += 1;
      localStorage.setItem("o", lsO);
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 4,5,6 X ------------------//
  if (checkX(7, 9, 11)) {
    renderWin(4, 5, 6);
    setTimeout(() => {
      lsX += 1;
      localStorage.setItem("x", lsX);
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  //------------------ 7,8,9 O ------------------//
  if (checkO(13, 15, 17)) {
    renderWin(7, 8, 9);
    setTimeout(() => {
      lsO += 1;
      localStorage.setItem("o", lsO);
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 7,8,9 X ------------------//
  if (checkX(13, 15, 17)) {
    renderWin(7, 8, 9);
    setTimeout(() => {
      lsX += 1;
      localStorage.setItem("x", lsX);
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  //------------------ 1,4,7 O ------------------//
  if (checkO(1, 7, 13)) {
    renderWin(1, 4, 7);
    setTimeout(() => {
      lsO += 1;
      localStorage.setItem("o", lsO);
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 1,4,7 X ------------------//
  if (checkX(1, 7, 13)) {
    renderWin(1, 4, 7);
    setTimeout(() => {
      lsX += 1;
      localStorage.setItem("x", lsX);
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  //------------------ 2,5,8 O ------------------//
  if (checkO(3, 9, 15)) {
    renderWin(2, 5, 8);
    setTimeout(() => {
      lsO += 1;
      localStorage.setItem("o", lsO);
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 2,5,8 X ------------------//
  if (checkX(3, 9, 15)) {
    renderWin(2, 5, 8);
    setTimeout(() => {
      lsX += 1;
      localStorage.setItem("x", lsX);
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  //------------------ 3,6,9 O ------------------//
  if (checkO(5, 11, 17)) {
    renderWin(3, 6, 9);
    setTimeout(() => {
      lsO += 1;
      localStorage.setItem("o", lsO);
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 3,6,9 X ------------------//
  if (checkX(5, 11, 17)) {
    renderWin(3, 6, 9);
    setTimeout(() => {
      lsX += 1;
      localStorage.setItem("x", lsX);
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  //------------------ 1,5,9 O ------------------//
  if (checkO(1, 9, 17)) {
    renderWin(1, 5, 9);
    setTimeout(() => {
      lsO += 1;
      localStorage.setItem("o", lsO);
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 1,5,9 X ------------------//
  if (checkX(1, 9, 17)) {
    renderWin(1, 5, 9);
    setTimeout(() => {
      lsX += 1;
      localStorage.setItem("x", lsX);
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  //------------------ 3,5,7 O ------------------//
  if (checkO(5, 9, 13)) {
    renderWin(3, 5, 7);
    setTimeout(() => {
      lsO += 1;
      localStorage.setItem("o", lsO);
      alert("WIN O!!!");
      location.reload();
    }, 50);
  }

  //------------------ 3,5,7 X ------------------//
  if (checkX(5, 9, 13)) {
    renderWin(3, 5, 7);
    setTimeout(() => {
      lsX += 1;
      localStorage.setItem("x", lsX);
      alert("WIN X!!!");
      location.reload();
    }, 50);
  }

  setTimeout(() => {
    if (defeat()) {
      alert("This game has not winners!");
      location.reload();
    }
  }, 1000);
}

addEventListener("click", _win);
