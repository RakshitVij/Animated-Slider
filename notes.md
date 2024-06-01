* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: monospace;
}
:root {
  --travel-slider-height: 300px;
  --travel-slider-city-image-size: 120px;
  --travel-slider-vertical-padding: 64px;
}
html, body {
  position: relative;
  height: 100%;
  background: #ccc;
  background-image: linear-gradient(to bottom, #6c08ca, #fff);
}
.earth {
  width: 270px;
  height: 270px;
}
.cities {
  width: 170px;
  height: 170px;
}
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.travel-slider {
  position: relative;
  width: 100%;
  margin: 0 auto;
}
.travel-slider::after {
  content: "";
  position: absolute;
  height: 50vh;
  top: 50%;
  width: 100%;
  left: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    #b0a5d1 50%
  );
}
.travel-slider-planet {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 428px;
  transition: 0.3s;
}
.travel-slider-planet > img {
  display: block;
  width: auto;
  height: 100%;
  margin: 0 auto;
}
.travel-slider-cities img {
  position: absolute;
  bottom: 95%;
  left: 50%;
  --travel-slider-planet-size: calc(var(--travel-slider-height)+var(--travel-slider-vertical-padding)*2);
  --travel-slider-image-rotate: 0deg;
  --travel-slider-image-scale:1;
  transform: translate(-50%) scale(var(--travel-slider-planet-size)) rotate(var(--travel-slider-image-rotate));
  transform-origin: center calc(var(--travel-slider-city-image-size)/2 * 0.95 * 0.95 + var(--travel-slider-city-image-size)*1);
  height: var(--travel-slider-city-image-size);
  width: var(--travel-slider-city-image-size);
  object-position: center bottom;
  object-fit: contain;
}

.travel-slider-cities img:nth-child(2){
  --travel-slider-image-rotate: 60deg;
}
.travel-slider-cities img:nth-child(3){
  --travel-slider-image-rotate: 120deg;
}
.travel-slider-cities img:nth-child(4){
  --travel-slider-image-rotate: 180deg;
}
.travel-slider-cities img:nth-child(5){
  --travel-slider-image-rotate: 240deg;
}
.travel-slider-cities img:nth-child(6){
  --travel-slider-image-rotate: 300deg;
}
.travel-slider-cities img:nth-child(7){
  --travel-slider-image-rotate: 360deg;
}