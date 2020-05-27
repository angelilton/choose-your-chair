window.onload = function () {
  disponivel();
};

var poltrona = [true, true, false, true, false, false, true, true, true, true];
var azul = [];

function disponivel() {
  var imagens = document.getElementsByTagName("img");

  for (var i = 0; i < imagens.length; i++) {
    if (poltrona[i]) {
      imagens[i].src = "src/chair_grean.svg";
    } else imagens[i].src = "src/chair_red.svg";
  }
}

function selecionar(i) {
  if (poltrona[i]) {
    var imagens = document.getElementsByTagName("img");
    imagens[i].src = "src/chair_blue.svg";
    azul.push(i);
  } else {
    alert("poltrona ocupada");
  }
}

function confirmar() {
  for (var i = 0; i < azul.length; i++) {
    var imagens = document.getElementsByTagName("img");
    imagens[azul[i]].src = "src/chair_red.svg";
    poltrona[azul[i]] = false;
  }
  azul = [];
}

function reset() {
  for (var i = 0; i < azul.length; i++) {
    var imagens = document.getElementsByTagName("img");
    imagens[azul[i]].src = "src/chair_grean.svg";
    poltrona[azul[i]] = true;
  }
  azul = [];
}
