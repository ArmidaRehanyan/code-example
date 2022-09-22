let range = document.querySelector('input');
let square = document.querySelector('div');
let point = document.querySelector('span');

let radius = square.offsetWidth / 2;

let degree = 0;

let plot = function() {

    degree = this.value;
    let x = radius * Math.cos((degree - 90) * Math.PI / 180) + radius;
    let y = radius * Math.sin((degree - 90) * Math.PI / 180) + radius;

    point.style.cssText = 'left:' + x + 'px;top:' + y + 'px;';

};

range.addEventListener('input', plot);
