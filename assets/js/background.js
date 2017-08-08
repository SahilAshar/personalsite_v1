function loadImages (images) {
  // each image will be loaded by this function.
  // it returns a Promise that will resolve once
  // the image has finished loading
  let loader = function (src) {
    return new Promise(function (resolve, reject) {
      let img = new Image();
      img.onload = function () {
        // resolve the promise with our url
        resolve(src);
      };
      img.onerror = function (err) {
        reject(err);
      };
      img.src = src;
    });
  };

  // return an array of image-loading promises
  return images.map(function (image) {
    return loader(image);
  });
}


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
$(function() {

  // this receives an array of the promises for each image
  function cycleImages ($target, images) {
    let index = 0,
      interval = 5500; // how many ms to wait before attempting to switch images

    function nextImage () {
      // p is the promise for the current image
      let p = images[index],
        next = function (wait) {
          // increment our counter and wait to display the next one
          index = (index + 1) % images.length;
          setTimeout(nextImage, wait);
        };

      // wait for this image to load or fail to load
      p.then(function (src) {
        // it loaded, display it
        $target.css({
          'backgroundImage' : 'url("' + src + '")',
          'background-size' : '100% 100%'
      });
        next(interval);
      }).catch(function (err) {
        // this one failed to load, skip it
        next(0);
      });

    }

    // start cycling
    nextImage();
  }

  // load the images and start cycling through them as they are loaded
  cycleImages($('body'), loadImages(myImages));
});

