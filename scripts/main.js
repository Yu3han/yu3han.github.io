var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cropped-wingchun.jpg') {
      myImage.setAttribute ('src','images/the-grandmaster.jpg');
    } else {
      myImage.setAttribute ('src','images/cropped-wingchun.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Wing Chun je kul, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Wing Chun je kul, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
