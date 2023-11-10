// find the root where the variables are set
const root = document.querySelector(':root');

// HUE
// create horizontal slider for hue
let hueSlider = document.getElementById("slider-hue");

// display the number of the current hue
let hueValue = document.getElementById("current-hue-value");
// set default start value
hueValue.innerHTML = hueSlider.value;

// Update the current slider value on release of handle
hueSlider.oninput = function() {
  hueValue.innerHTML = hueSlider.value;
  root.style.setProperty('--hue-wildcard', hueSlider.value);
}

// SATURATION
// create horizontal slider for saturation
let saturationSlider = document.getElementById("slider-saturation");

// display the number of the current saturation
let saturationValue = document.getElementById("current-saturation-value");
// set default start value
saturationValue.innerHTML = saturationSlider.value;

// Update the current slider value on release of handle
saturationSlider.oninput = function() {
  saturationValue.innerHTML = saturationSlider.value;
  root.style.setProperty('--saturation-wildcard', saturationSlider.value + '%');
}

// LIGHTNESS
// create horizontal slider for lightness
let lightnessSlider = document.getElementById("slider-lightness");

// display the number of the current lightness
let lightnessValue = document.getElementById("current-lightness-value");
// set default start value
lightnessValue.innerHTML = lightnessSlider.value;

// Update the current slider value on release of handle
lightnessSlider.oninput = function() {
  lightnessValue.innerHTML = lightnessSlider.value;
  root.style.setProperty('--lightness-wildcard', lightnessSlider.value + '%');
}
