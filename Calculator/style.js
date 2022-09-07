const slider = document.querySelector(".inputRange");
const value = document.querySelector(".cost");
const price = document.querySelector(".price");
const percent = document.querySelector(".percent");
const giveBack = document.querySelector(".giveBack")

slider.addEventListener('input', getValue);

function getValue() {
    slider.style.background = 'linear-gradient(to right, #48b9f2 0%, #48b9f2 ' + slider.value / 5000 +
                               '%, #cbcbcb' + slider.value / 5000 + '%, #cbcbcb 100%)';

    value.textContent = `${slider.value} руб.`;

    let priceValue = slider.value;
    let percentValue = 0;
    price.textContent = priceValue;
    if (priceValue > 50000) {
        percentValue = (slider.value * 9) / 100;
        percent.textContent = percentValue;
    } else {
        percent.textContent = "0";
    }
    giveBack.textContent = (+priceValue) + (+percentValue);
}

  getValue();


