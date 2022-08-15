// LLAMANDO ELEMENTOS
// SELECTORES
const color = document.querySelector("#color");
const size = document.querySelector("#size");
const opacity = document.querySelector("#opacity");
const blur = document.querySelector("#blur");
const saturation = document.querySelector("#saturation");
const contrast = document.querySelector("#contrast");
const radio = document.querySelector("#radio");
const codigoCss = document.querySelector(".codigo-Css");

//propiedades del codigo CSS
const background = document.querySelector(".background");
const blurFilter = document.querySelector(".blur-filter");
const saturateFilter = document.querySelector(".saturate-filter");
const contrastFilter = document.querySelector(".contrast-filter");
const boxSizeHeigth = document.querySelector('.heigth');
const boxSizeWidth = document.querySelector('.width');
const border = document.querySelector(".border");

// Valores del output
const valueSize = document.querySelector(".value-size");
const valueOpacity = document.querySelector(".value-opacity");
const valueBlur = document.querySelector(".value-blur");
const valueSaturation = document.querySelector(".value-saturation");
const valueContrast = document.querySelector(".value-contrast");
const valueRadio = document.querySelector(".value-radio");

// LLAMANDO AL CUADRO DEL MODELO
let boxModel = document.querySelector(".box-model");
let rgb;

function hexToRgb(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",");
  }
  throw new Error("Bad Hex");
}

//Agregando eventos
color.addEventListener("input", (e) => {
  rgb = hexToRgb(e.target.value);
  let rgba = `rgba(${rgb}, ${opacity.value})`;
  boxModel.style.background = rgba;
  background.innerHTML = rgba + ';';
});

opacity.addEventListener("input", (e) => {
  let a = e.target.value.toString();
  let rgba = "rgba(" + rgb + "," + a + ")";
  boxModel.style.background = rgba;
  valueOpacity.value = `${e.target.value}%`;
  background.innerHTML = rgba + ';';
});

blur.addEventListener("input", (e) => {
  boxModel.style.backdropFilter = `blur(${e.target.value}px)`;
  boxModel.style.webkitBackdropFilter = `blur(${e.target.value}px)`;
  valueBlur.value = `${e.target.value}px`;
  blurFilter.innerHTML = `blur(${e.target.value}px)` + ",";
});

saturation.addEventListener("input", (e) => {
  boxModel.style.backdropFilter = `blur(${e.target.value}px)`;
  boxModel.style.webkitBackdropFilter = `saturate(${e.target.value}%)`;
  valueSaturation.value = `${e.target.value}%`;
  saturateFilter.innerHTML = ' ' +  `saturate(${e.target.value}%)` + ",";
});

contrast.addEventListener("input", (e) => {
  boxModel.style.backdropFilter = `contrast(${e.target.value}%)`;
  boxModel.style.webkitBackdropFilter = `contrast(${e.target.value}%)`;
  valueContrast.value = `${e.target.value}%`;
  contrastFilter.innerHTML = ' ' + `contrast(${e.target.value}%)` + ";";
});

size.addEventListener("input", (e) => {
  boxModel.style.height = `${e.target.value}px`;
  boxModel.style.width = `${e.target.value}px`;
  boxSizeHeigth.innerHTML = boxModel.style.height = `${e.target.value}px` + ";";
  boxSizeWidth.innerHTML = boxModel.style.width = `${e.target.value}px`+ ";";
});

radio.addEventListener("input", (e) => {
  boxModel.style.borderRadius = `${e.target.value}px`;
  valueRadio.value = `${e.target.value}px`;
  border.innerHTML = `${e.target.value}px`+ ';';
});
