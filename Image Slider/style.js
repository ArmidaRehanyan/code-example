window.onload = function () {

    carrouselInit();

}

function carrouselInit() {

    let carrousel = document.getElementById("carrouselimg1");
    carrousel.style.opacity = "1";
    setInterval(carrouselAutoChange, 5000);

}

function carrouselAutoChange() {
    carrouselRight();
}



function carrouselChange(i) {

    let carrousel = document.getElementById("carrouselimg" + i);
    carrousel.style.opacity = "1";

}


function carrouselLeft() {

    let nbCarrousel = 5;
    let num = 0;

    for (let i = 0; i < nbCarrousel; i++) {
        num = i + 1;
        let carrousel = document.getElementById("carrouselimg" + num);
        if (carrousel.style.opacity == "1") {
            carrousel.style.opacity = "0";
            if (i == 0) {
                return carrouselChange(5);
            }
            return carrouselChange(num - 1);
        }
    }
}

function carrouselRight() {

    let nbCarrousel = 5;
    let num = 0;

    for (let i = 0; i < nbCarrousel; i++) {
        num = i + 1;
        let carrousel = document.getElementById("carrouselimg" + num);
        if (carrousel.style.opacity == "1") {
            carrousel.style.opacity = "0";
            if (i == 4) {
                return carrouselChange(1);
            }
            return carrouselChange(num + 1);
        }
    }
}
