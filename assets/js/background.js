// the images we are going to display
let myImages = [
  "assets/css/images/8bit/1morning.png",
  "assets/css/images/8bit/2latemorning.png",
  "assets/css/images/8bit/3afternoon.png",
  "assets/css/images/8bit/4lateafternoon.png",
  "assets/css/images/8bit/5evening.png",
  "assets/css/images/8bit/6lateevening.png",
  "assets/css/images/8bit/7night.png",
  "assets/css/images/8bit/8latenight.png"
];

// $(document).ready(fn) is deprecated,
// use the $(fn) form instead
$(function () {

  function updateBackground(images) {
    var now = new Date();
    var hours = now.getHours();
    var src;

    if (hours < 1) {
      src = images[7];
    }
    else if (hours >= 1 && hours < 5) {
      src = images[7];
    }
    else if (hours >= 5 && hours < 8) {
      src = images[0];
    }
    else if (hours >= 8 && hours < 11) {
      src = images[1];
    }
    else if (hours >= 11 && hours < 14) {
      src = images[2];
    }
    else if (hours >= 14 && hours < 16) {
      src = images[3];
    }
    else if (hours >= 16 && hours < 18) {
      src = images[4];
    }
    else if (hours >= 18 && hours < 21) {
      src = images[5];
    }
    else if (hours >= 21 && hours < 24) {
      src = images[6];
    }

    $target.css({
      'backgroundImage': 'url("' + src + '")',
      'background-size': '100% 100%'
    });
  }

  updateBackground(myImages);
  setInterval(function () { changeBg(myImages); }, 300000)
});

