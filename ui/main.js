console.log('Loaded!');

//Change the value of content
var element = document.getElementById('main-txt');
element.innerHTML = "Kya Haal Chaal";

//Change color
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft +5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
var interval = setInterval(moveRight,100);
}