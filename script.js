const travelSlider = document.querySelector(".travel-slider-planet");
sliderWrapper = document.querySelector(".slider-wrapper");
swipeLeft = document.getElementById("swipe-left");
swipeRight = document.getElementById("swipe-right");

// console.log(travelSlider);  - for checking the DOM tree in browser.

let calculateRotate = 0,
  placement = 444,
  sizeDefine = 670,
  clicks = 0;

window.addEventListener("load", function () {
  if(this.innerWidth==768){
    placement = 50;
    sizeDefine = 640
  } else if(this.innerWidth == 430){
    placement = 40;
    sizeDefine = 375
  }
  sliderWrapper.style.transform = `translate3d(${placement}px, 0px, 0px)`;
});

swipeLeft.onclick = () => {
  if (clicks != 0) {
    clicks--;
    placement+=sizeDefine;
    calculateRotate -= 60;
    sliderWrapper.style.transform = `translate3d(${placement}px, 0px, 0px)`;
    travelSlider.style.transform = `translate(-50%, -50%) rotate(-${calculateRotate}deg)`;
  }
};
swipeRight.onclick = () => {
  if (clicks < 5) {
    clicks++;
    placement -=sizeDefine;
    calculateRotate += 60;
    sliderWrapper.style.transform = `translate3d(${placement}px, 0px, 0px)`;
    travelSlider.style.transform = `translate(-50%, -50%) rotate(-${calculateRotate}deg)`;
  }
};
