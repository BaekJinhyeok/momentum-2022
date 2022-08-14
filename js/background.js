const image = [
  "background1.jpg",
  "background2.jpg",
  "background3.jpg",
  "background4.jpg",
  "background5.jpg",
  "background6.jpg",
  "background7.jpg",
  "background8.jpg",
  "background9.jpg",
  "background10.jpg",
  "background11.jpg",
  "background12.jpg",
  "background13.jpg",
];

const chosenImgae = image[Math.floor(Math.random() * image.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImgae}`;

bgImage.classList.add("bgimage");

document.body.append(bgImage);
