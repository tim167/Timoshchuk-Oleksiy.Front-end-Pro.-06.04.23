let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let imageElement = document.getElementById("image");

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

let images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Масив зображень
let currentIndex = 0; // Поточний індекс зображення

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    imageElement.src = images[currentIndex];
  }

  updateButtonVisibility();
}

function nextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    imageElement.src = images[currentIndex];
  }

  updateButtonVisibility();
}

function updateButtonVisibility() {
  prevBtn.style.display = currentIndex === 0 ? "none" : "block";
  nextBtn.style.display = currentIndex === images.length - 1 ? "none" : "block";
}