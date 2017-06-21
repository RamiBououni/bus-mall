'use strict';

var imageName1 = '';
var imageName2 = '';
var imageName3 = '';
var imageParent;
var img;
var previous = [];
var current = [];
var numberOfTries = 25;

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
  img = document.createElement('img');
  //set extensions for the images
  if (imgName === 'sweep') {
    img.setAttribute('src', 'img/' + imgName + '.png');
    img.setAttribute('id', imgName);
    imageParent.appendChild(img);
  } else if (imgName === 'usb') {
    img.setAttribute('src', 'img/' + imgName + '.gif');
    img.setAttribute('id', imgName);
    imageParent.appendChild(img);
  } else {
    img.setAttribute('src', 'img/' + imgName + '.jpg');
    img.setAttribute('id', imgName);
    imageParent.appendChild(img);
  }
  //check my images IDs
  console.log(img.id);
}

//setup images on the page
function setup() {
  imageName1 = generateRandomImageName();
  imageName2 = generateRandomImageName();
  imageName3 = generateRandomImageName();
  //check if images are duplicate in the current set and in the previous set
  while (imageName1 == imageName2 || imageName1 == imageName3 || imageName2 == imageName3 || imageName1 == previous[0] || imageName1 == previous[1] || imageName1 == previous[2] || imageName2 == previous[0] || imageName2 == previous[1] || imageName3 == previous[2] || imageName3 == previous[0] || imageName3 == previous[1] || imageName3 == previous[2]) {
    imageName1 = generateRandomImageName();
    imageName2 = generateRandomImageName();
    imageName3 = generateRandomImageName();
  }
  //pushing the images to the current array
  current.push(imageName1);
  current.push(imageName2);
  current.push(imageName3);

  //test content of current array
  console.log('current is:' + current);

  //render images to the page
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

//making an array of objects for each image

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

var arrayOfObjects = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, water, wineGlass];

function chart() {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');

  // modeled after the Getting Started example in the chartJS docs
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
      datasets: [{
        label: 'Number of times images was selected',
        backgroundColor: 'rgb(131, 25, 25)',
        borderColor: 'rgb(19, 9, 11)',
        data: [bag.timeSelected, banana.timeSelected, bathroom.timeSelected, boots.timeSelected, breakfast.timeSelected, bubblegum.timeSelected, chair.timeSelected, cthulhu.timeSelected, dogDuck.timeSelected, dragon.timeSelected, pen.timeSelected, petSweep.timeSelected, scissors.timeSelected, shark.timeSelected, sweep.timeSelected, tauntaun.timeSelected, unicorn.timeSelected, usb.timeSelected, water.timeSelected, wineGlass.timeSelected],
      }]
    },

    // Configuration options go here
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


//add the event listener
imageParent.addEventListener('click', function(event) {

  //stop the game after 25 tries
  if (numberOfTries !== 0) {
    //check which image is clicked
    console.log(img.id);

    //push the current images to the previous array
    previous = current.splice(0, 3);

    //add the number of times selected
    for (var i = 0; i < arrayOfObjects.length; i++) {
      if (img.id == arrayOfObjects[i].name) {
        arrayOfObjects[i].timeSelected++;
        //test times selected
        console.log('555555555');
        console.log(arrayOfObjects[i].name + ' was selected:' + arrayOfObjects[i].timeSelected + ' time.');
      }
    }

    //check to see which images we have to make sure we have no duplicate
    console.log('=======');
    console.log('previous is:' + previous);

    //to make the test stop at 25
    numberOfTries--;

    //remove the current images so the new images will take its place
    images.innerHTML = '';

    //call our function to populate the images
    setup();


  } else {
    images.innerHTML = '';
    var parentResponse = document.getElementById('response');
    for (i = 0; i < arrayOfObjects.length; i++) {
      var p = document.createElement('p');
      p.textContent = arrayOfObjects[i].name + ' was selected ' + arrayOfObjects[i].timeSelected + ' time(s).';
      parentResponse.appendChild(p);

      chart();
    }
  }
});


//
