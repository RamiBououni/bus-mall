'use strict';

var imageName1 = '';
var imageName2 = '';
var imageName3 = '';
var imageParent;
var duplicate = [];

var imageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

//test generateRandomImageName
console.log(generateRandomImageName());
//test random number
console.log(Math.floor(Math.random() * imageNames.length));

setup();

//generate random image name
function generateRandomImageName() {
  var index = Math.floor(Math.random() * imageNames.length);
  return imageNames[index];
}

// render images
function renderImage(imgName) {
  imageParent = document.getElementById('images');
  var img = document.createElement('img');
  //set extensions for the images
  if (imgName === 'sweep') {
    img.setAttribute('src', 'img/' + imgName + '.png');
    imageParent.appendChild(img);
  } else if (imgName === 'usb') {
    img.setAttribute('src', 'img/' + imgName + '.gif');
    imageParent.appendChild(img);
  } else {
    img.setAttribute('src', 'img/' + imgName + '.jpg');
    imageParent.appendChild(img);
  }
}
//setup images on the page
function setup() {
  imageName1 = generateRandomImageName();
  imageName2 = generateRandomImageName();
  imageName3 = generateRandomImageName();
  //check if images are duplicate in the current set
  while (imageName1 == imageName2 || imageName1 == imageName3 || imageName2 == imageName3) {
    imageName1 = generateRandomImageName();
    imageName2 = generateRandomImageName();
    imageName3 = generateRandomImageName();
  }
  renderImage(imageName1);
  renderImage(imageName2);
  renderImage(imageName3);
}
