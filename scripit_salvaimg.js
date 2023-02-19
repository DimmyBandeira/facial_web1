// Pegue uma referencia para o elemento da imagem
var elephant = document.getElementById("elephant");

// Haja quando ela carregar
elephant.addEventListener("load", function () {
var imgCanvas = document.createElement("canvas"),
imgContext = imgCanvas.getContext("2d");

// Tenha certeza que o canvas tem o mesmo tamanho que a imagem
imgCanvas.width = elephant.width;
imgCanvas.height = elephant.height;

// Desenhe a imagem no canvas
imgContext.drawImage(elephant, 0, 0, elephant.width, elephant.height);

// Transforme o canvas em URL
var imgAsDataURL = imgCanvas.toDataURL("image/png");

// Salve
try {
localStorage.setItem("elephant", imgAsDataURL);
}
catch (e) {
console.log("Storage failed: " + e);
}
}, false);
