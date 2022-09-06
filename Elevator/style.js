window.addEventListener("load", () => {

    const goBtn = document.getElementById("goBtn");

    let toFloor = 0;
    let onMotion = false;


    //when the goBtn is clicked
    goBtn.addEventListener("click", () => {

        const lifts = document.querySelectorAll(".usedLiftAndText");
        const liftsInRest = [...lifts].filter((e) => !e.classList.contains('in-motion'));
        const selectFloor = document.getElementById("selectFloor");

        let floor = parseInt(selectFloor.value);

        const floorsArr = [];

        liftsInRest.forEach(e => {
            let y = e.getAttribute("y");
            floorsArr.push(parseInt(y));
        })

        const closest = floorsArr.reduce((a, b) => {
            return Math.abs(b - ((floor * 50) - 50)) < Math.abs(a - ((floor * 50) - 50)) ? b : a;
        });

        let closestLift = floorsArr.indexOf(closest);

        toFloor = (floor * 50) - 50;
        if (onMotion === true) {
            result.innerText = "Lift on motion";
        } else {
            liftsInRest[closestLift].classList.add('in-motion');

            let y = liftsInRest[closestLift].getAttribute("y");
            animate(toFloor, liftsInRest[closestLift], y)
        }
    })

    //function to animate the lift up or down
    function animate(toFloor, el, num) {

        setTimeout(() => {

            if (num >= floorCount * 50) {
                result.innerText = "Lift is down";
                el.setAttribute('xlink:href', '#activeLift');

                el.classList.remove('in-motion');

                return false;
            } else if (num <= 1) {
                result.innerText = "Lift is up";
                el.setAttribute('xlink:href', '#activeLift');

                el.classList.remove('in-motion');

                return false;
            } else if (toFloor === num) {
                result.innerText = "Lift at rest";
                el.setAttribute('xlink:href', '#activeLift');
                setTimeout(function () {
                    el.setAttribute('xlink:href', '#liftAndText');
                }, 1000);

                el.classList.remove('in-motion');

                return false;
            } else {
                result.innerText = "Lift on motion";
                el.setAttribute("y", num);

                if (toFloor > num) {
                    animate(toFloor, el, ++num)
                } else {
                    animate(toFloor, el, --num)
                }

                el.setAttribute('xlink:href', '#liftAndText');

            }
        }, 50)
    }
})