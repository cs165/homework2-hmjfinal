// TODO(you): Add your own positive messages if you'd like!
const POSITIVE_MESSAGES = [
  'You are worthy.',
  'You are enough.',
  'Be kind and forgiving to yourself.',
  'You are amazing.',
  'It\'s okay not to be okay.',
  'It\'s enough to just breathe.',
  'You are loved.',
  'I believe in you.',
  'You can do it!',
  'You are not a failure.',
  'You matter.',
  'Your life matters.'
];

chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(onMessage);
});

var items = document.getElementsByClassName('stream-item');
var cursorUrl = chrome.runtime.getURL('images/rose-cursor.gif');
var bgUrl = chrome.runtime.getURL('images/sparkle.gif');
var box = [];

function onMessage(gardeningInProgress) {
  // TODO(you): Implement this function for extra credit! Add helper functions
  // as needed.

  // NOTE: This extension is EXTRA CREDIT and is not required for HW2.

  // If `gardeningInProgress` is true, that means "Start Gardening" was clicked.
  // If `gardeningInProgress` is false, that means "Stop Gardening" was clicked.
  if(gardeningInProgress) {
    for(var i = 0;i<items.length;i++) {
      items[i].addEventListener('mouseover',addStyle)
      items[i].addEventListener('mouseout',removeStyle)
      items[i].addEventListener('click',changeContent)
    }
  }else{
    for(var i = 0;i<items.length;i++) {
      items[i].removeEventListener('mouseover',addStyle)
      items[i].removeEventListener('mouseout',removeStyle)
      items[i].removeEventListener('click',changeContent)
    }
  }
}

function addStyle(event) {
  this.style.cursor = 'url('+cursorUrl+'),auto';
  this.style.backgroundImage = 'url('+cursorUrl+')';
  this.style.opacity = '0.8';
}

function removeStyle(event) {
  this.style.cursor = '';
  this.style.backgroundImage = '';
  this.style.opacity = 1;
}

function changeContent(event) {
  event.stopPropagation();
  var index = Math.floor(Math.random() * POSITIVE_MESSAGES.length);
  this.querySelector('.tweet-text').innerHTML = POSITIVE_MESSAGES[index];
}
