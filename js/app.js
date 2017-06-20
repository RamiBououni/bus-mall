'use strict';

var imageName1 = '';
var imageName2 = '';
var imageName3 = '';
var imageParent;
var previous = [];
var current = [];

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
  while (imageName1 == imageName2 || imageName1 == imageName3 || imageName2 == imageName3 || imageName1 == previous[0] || imageName1 == previous[1] || imageName1 == previous[2] || imageName2 == previous[0] || imageName2 == previous[1] || imageName3 == previous[2] || imageName3 == previous[0] || imageName3 == previous[1] || imageName3 == previous[2]) {
    imageName1 = generateRandomImageName();
    imageName2 = generateRandomImageName();
    imageName3 = generateRandomImageName();
  }
  current.push(imageName1);
  current.push(imageName2);
  current.push(imageName3);

  renderImage(imageName1);
  renderImage(imageName2);
  renderImage(imageName3);
}

//TODO change the constructor to get all the extensions

//creating my constructor
function MakeImages(name, filePath, timeShown, timeSelected) {
    this.name = name,
    this.filePath = 'img/' + name + '.jpg',
    this.timeShown = 0,
    this.timeSelected = 0;
}


//making an object for each image

var bag = new MakeImages('bag');
var banana = new MakeImages('banana');
var bathroom = new MakeImages('bathroom');
var boots = new MakeImages('boots');
var breakfast = new MakeImages('breakfast');
var bubblegum = new MakeImages('bubblegum');
var chair = new MakeImages('chair');
var cthulhu = new MakeImages('cthulhu');
var dogDuck = new MakeImages('dogDuck');
var dragon = new MakeImages('dragon');
var pen = new MakeImages('pen');
var petSweep = new MakeImages('petSweep');
var scissors = new MakeImages('scissors');
var shark = new MakeImages('shark');
var sweep = new MakeImages('sweep');
var tauntaun = new MakeImages('tauntaun');
var unicorn = new MakeImages('unicorn');
var usb = new MakeImages('usb');
var water = new MakeImages('water');
var wineGlass = new MakeImages('wineGlass');


//add the event listener
imageParent.addEventListener('click', function(event) {

  previous = current.splice(0,3);

  //check to see which images we have to make sure we have no duplicate
  console.log('=======');
  console.log(imageName1);
  console.log(imageName2);
  console.log(imageName3);
  console.log('previous is:' + previous);

  //remove the current images
  images.innerHTML = '';
  //call our function to populate the images
  setup();

});


//
