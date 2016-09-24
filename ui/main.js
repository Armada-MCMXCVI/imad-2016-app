console.log('Loaded!');

//Change the value of content
var element = document.getElementById('main.txt');
element.innerHtml = 'Kya Haal Chaal';

//Change color
var img = document.getElementById('madi');
var marginLeft= 0;
function marginRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,50);
}