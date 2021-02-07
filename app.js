var precio = 0;
var totalSum = 0;
var precioMateriales = 0;
var precioColores = 0;
var precioCuerdas = 0;
var nombreMateriales = '';
var nombreColores = '';
var nombreCuerdas = '';
let slideIndex = 1;
var sel = document.querySelectorAll('select'); // array of selects

const materiales = [{
  name: 'cedro',
  precio: 2000
}, {
  name: 'guayabira',
  precio: 1500
}];
const colores = [{
  name: 'negro',
  precio: 2000
}, {
  name: 'castanho',
  precio: 2500
}];
const cuerdas = [{
  name: 'nylon',
  precio: 3000
}, {
  name: 'metal',
  precio: 3500
}];

let slideShow = [{
  material: 'cedro',
  color: 'negro',
  cuerda: 'nylon'
}, {
  material: 'cedro',
  color: 'negro',
  cuerda: 'metal'
}, {
  material: 'cedro',
  color: 'castanho',
  cuerda: 'nylon'
}, {
  material: 'cedro',
  color: 'castanho',
  cuerda: 'metal'
}, {
  material: 'guayabira',
  color: 'negro',
  cuerda: 'nylon'
}, {
  material: 'guayabira',
  color: 'negro',
  cuerda: 'metal'
}, {
  material: 'guayabira',
  color: 'castanho',
  cuerda: 'nylon'
}, {
  material: 'guayabira',
  color: 'castanho',
  cuerda: 'metal'
}];

function calculadorPrecios() {

  sel.forEach(function(selects) {
    var className = selects.className; //gets class of select tag
    var selValue = selects.value; //gets value of select tag
    switch (className) {
      case 'materiales':
        for (i = 0; i < materiales.length; i++) { //materiales.length = 2
          if (Object.values(materiales[i]).includes(selValue) == true) {
            precioMateriales = materiales[i].precio;
            nombreMateriales = materiales[i].name;
            break;
          }
        }
        break;
      case 'colores':
        for (i = 0; i < colores.length; i++) { //materiales.length = 2
          if (Object.values(colores[i]).includes(selValue) == true) {
            precioColores = colores[i].precio;
            nombreColores = colores[i].name;

            break;
          }
        }
        break;
      case 'cuerdas':
        for (i = 0; i < cuerdas.length; i++) { //materiales.length = 2
          if (Object.values(cuerdas[i]).includes(selValue) == true) {
            precioCuerdas = cuerdas[i].precio;
            nombreCuerdas = cuerdas[i].name;
            break;
          }
        }
        break;
      default:
    }
    totalSum = precioMateriales + precioColores + precioCuerdas;


  });

  document.querySelector('p').innerText = 'Precio total: ' + totalSum;
  document.querySelector('img').setAttribute('src', 'images/' + nombreMateriales + '-' + nombreColores + '-' + nombreCuerdas + '.jpg');
  fadeAnimation();
}

calculadorPrecios();
sel.forEach(function(selects) {
  selects.addEventListener('change', calculadorPrecios)
});

function getDate() {
  date = new Date();
  newDate = new Intl.DateTimeFormat('en-us', {
    year: 'numeric'
  }).format(date);
  return newDate;

}

document.querySelector('h6').innerHTML = 'Guitarras Españolas Inc. | ' + getDate();

document.querySelector('.next').addEventListener('click', slideShowNext);
document.querySelector('.prev').addEventListener('click', function (){
  slideIndex-=1;
  if(slideIndex == 0){
    slideIndex = 7;
  }
  for(i=0; i<sel.length;i++){
   sel[i].value = Object.values(slideShow[slideIndex])[i];
  }
  document.querySelector('img').setAttribute('src', 'images/' + Object.values(slideShow[slideIndex])[0] + '-' + Object.values(slideShow[slideIndex])[1] + '-' + Object.values(slideShow[slideIndex])[2] + '.jpg');
  fadeAnimation();

});



function slideShowNext (){
  if(slideIndex == 8){
  slideIndex = 0;
}else if(slideIndex == -1){
  slideIndex = 7;
}
  for(i=0; i<sel.length;i++){
   sel[i].value = Object.values(slideShow[slideIndex])[i];
  }
  document.querySelector('img').setAttribute('src', 'images/' + Object.values(slideShow[slideIndex])[0] + '-' + Object.values(slideShow[slideIndex])[1] + '-' + Object.values(slideShow[slideIndex])[2] + '.jpg');
  fadeAnimation();
  slideIndex++;

}

function fadeAnimation(){
  document.querySelector('img').classList.add('fade');
  setTimeout(function() {
    document.querySelector('img').classList.remove('fade');
  }, 800);
}
