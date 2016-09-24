console.log('Loaded!');

//Change the value of content
var element = document.getElementById('main.txt');
element.innerHtml = 'Kya Haal Chaal';

//Change color
var img = document.getElementById('madi');
var marginTop= 0;
function marginTop () {
    margintop = marginTop + 5;
    img.style.margiTop = marginTop + 'px';
}
img.onclick = function () {
    var interval = setInterval(movetop,50);
}