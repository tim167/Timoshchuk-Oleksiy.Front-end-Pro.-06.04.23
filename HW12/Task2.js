let imageFolder = "images/";
let imageCount = 9;
let randomImage = Math.floor(Math.random() * imageCount) + 1;

let img = document.createElement("img");
img.src = imageFolder + randomImage + ".jpg";

document.body.appendChild(img);