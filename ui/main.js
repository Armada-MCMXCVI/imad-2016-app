console.log('Loaded!');

//Change the value of content
var element = document.getElementById('main-txt');
element.innerHtml = 'Kya Haal Chaal';

//Change color
var img = document.getElementById('madi');
img.onclick = function () {
img.style.marginLeft = '100px';
}