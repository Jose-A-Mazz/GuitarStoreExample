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
var button_clicked = false;
let array_guitarras = [];
let array_cols = [];
let button_disabled = true;
let name_entered = false;
let count = 0;
let count_2 = 1;
// let position_main_section = $('.main-section').outerHeight() + $('.main-section').offset().top;
let footer_position = $('footer').outerHeight();
let ad_box_fail_parent;
let ad_box_fail_child;

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

$('.cart-button,.cart-box').mouseover(function(){

    $('.cart-box').show();
    $('.cart-box').css('display', 'block');

});

$('.main-section,.hero,footer').mouseover(function(){

    $('.cart-box').hide();
    $('.cart-box').css('display', 'none');
});



$('.reservar').click(function(){
  // array_guitarras.push({material1: nombreMateriales,material2: nombreColores, material3: nombreCuerdas});

//   setTimeout(function(){
//   // $('.reservar').css('opacity', '1');
//   $('.spinner-border').show();
//   setTimeout(function(){$('.spinner-border').hide()},1000)
// },300)

if(name_entered == false){

  if(count == 0){
    side_bar_creator();
    $(ad_box_fail_parent).css('bottom', '270px');
    side_bar_styler();
    count++;

  } else if (count > 0 && count < 4){
    side_bar_creator();
    let height = $(ad_box_fail_parent).outerHeight()*count_2;
    $(ad_box_fail_parent).css("bottom", 270+height);
    count_2++;
    count++;
    side_bar_styler();
  }

  else{
      $('div.fail-div-parent').each(function(){
        $(this).fadeOut();
        setTimeout(function(){$(this).remove()}, 200)
      });
      count = 0;
      count_2 = 1;
    }


    function side_bar_creator(){
      ad_box_fail_parent = $("<div class='fail-div-parent'></div>");
      ad_box_fail_child =  $("<div class='fail-side-bar'></div>");
      $('body').append(ad_box_fail_parent);
      $(ad_box_fail_parent).append(ad_box_fail_child);
    }
function side_bar_styler(){
  setTimeout(function(){
    $(ad_box_fail_child).css({'right': '0'});
    $(ad_box_fail_child).text('¡Tiene que ingresar su nombre!')
    $(ad_box_fail_child).addClass('bg-danger shadow');

 }, 500);
}
 }else{
  let row_template = document.createElement('div');
  row_template.classList.add('row');
  document.querySelector('.cart-box').appendChild(row_template);
  for(i= 0; i<3;i++){
    let colEl = document.createElement('div');
    colEl.classList.add('col-lg-4');
    row_template.appendChild(colEl);

    array_cols.push(colEl);
    array_cols[i].innerHTML = 'hola';
  }
  array_cols = [];
}
 });



defaultState('nav','.reservar');

function defaultState(node1,node2){

  $(node1).addClass('bg-transparent fixed-top');
  document.querySelector('body').appendChild(document.querySelector('nav'));
}

$(window).scroll(function(){
  // var offset = $('section.main-section').offset(); //returns an object; you can then tap into its  property
  let navbar_outerHeight = $('nav').outerHeight();
  let windowScroll = $(window).scrollTop();
  // console.log( navbar_outerHeight+windowScroll);
  // console.log('This is offset: '+offset.top);
  let hero_half_coords = $('.hero').outerHeight() * 0.8;
  if(windowScroll > hero_half_coords){
    // document.querySelector('body').appendChild(document.querySelector('nav'));
    $('nav').addClass('shadow');
    $('nav').removeClass('bg-transparent');
  $('nav').css('background-color','white');
  $('.navbar-brand').addClass('text-success');
  // $('i.incon-fa').addClass('bg-success');
  // $('.navbar-brand').addClass('translate');

}else{
  // document.querySelector('.hero').appendChild(document.querySelector('nav'));
  $('nav').addClass('bg-transparent');
  $('.navbar-brand').removeClass('text-success');
  $('.nav').removeClass('shadow');
  // $('i.incon-fa').removeClass('bg-success');

  // navbarDefault('nav');
 }

});
