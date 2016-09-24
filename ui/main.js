console.log('Loaded!');

//Change the value of content
var element = document.getElementById('main.txt');
element.innerHtml = 'Kya Haal Chaal';

//Change color
var img = document.getElementById('madi');
var margintop= 0;
function marginTop () {
    margintop = margintop + 5;
    img.style.margintop = margintop + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveTop,50);
}