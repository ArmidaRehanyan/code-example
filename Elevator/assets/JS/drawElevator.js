let floorCount = 9;
let elevatorCount = 9;
const result = document.getElementById("result");
const errorMessage = document.querySelector('.error-message');
const drawBtn = document.querySelector('.draw-elevator');
const svgElevator = document.querySelector('.elevator-container');
const floorsNumbersSelect = document.querySelector('#selectFloor');

let building = '';

function drawVerticalLines(floors, elevators) {
    let str = '';

    for (let i = 1; i <= elevators; i++) {
        str += `
            <line class="vertical_line" x1="${50 * i}" y1="0" x2="${50 * i}" y2="${floors * 100}"></line>
        `
    }

    return str;
}

function drawHorizontalLines(floors, elevators) {
    let str = '';

    for (let i = 1; i <= floors; i++) {
        str += `
            <line id="horizontal_line" x1="0" y1="${50 * i}" x2="${elevators * 100 + 250}" y2="${50 * i}">1</line>
        `
    }

    return str;
}

function drawElevators(floors, elevators) {
    let str = '';

    for (let i = 0; i < elevators; i++) {
        str += `
            <use class="usedLiftAndText" xlink:href="#liftAndText" x="${50 * i}" y="${(floors - 1) * 50}"></use>
        `
    }
    return str;
}

function drawBuilding(floors, elevators) {
    svgElevator.style.width = `${elevators * 50 + 250}px`;
    svgElevator.style.height = `${floors * 50}px`;

    return svgElevator.innerHTML = `
        <!-- Rectangle building -->
        <rect id="rect" x="${elevators * 50}" y="0" height="${floors * 50}" width="250"></rect>

        <!-- Vertical line -->
        ${drawVerticalLines(floors, elevators)}
        
        <!-- Horizontal lines -->
        ${drawHorizontalLines(floors, elevators)}

        <defs>
            <!-- default lift -->
            <g id="liftAndText">
                <rect class="lift" height="50" width="50"></rect>
                <image xlink:href="assets/Image/elevator.jpg" x="0" y="0" height="50px" width="50px"></image>
            </g>

            <!-- active lift -->
            <g id="activeLift">
                <rect class="lift-active" height="50" width="50" fill='lime'></rect>
                <image xlink:href="assets/Image/elevator.jpg" x="0" y="0" height="50px" width="50px"></image>
            </g>
        </defs>

        <!-- Lifts lines -->
        ${drawElevators(floors, elevators)}
    `
}


drawBuilding(floorCount, elevatorCount);


// Drawing the floor numbers

function floorNumbers(floors) {
    let str = '';

    for (let i = 1; i <= floors; i++) {
        str += `
            <option value="${floors - i + 1}">${i}</option>
        `
    }
    return str;
}

function drawFloorNumbers(floors) {
    return floorsNumbersSelect.innerHTML = `
        ${floorNumbers(floors)}
    `
}

drawFloorNumbers(floorCount);


// Drawing the building and the floors numbers
drawBtn.addEventListener('click', () => {
    floorCount = document.querySelector('.floor-count').value;
    elevatorCount = document.querySelector('.elevator-count').value;

    if ((floorCount > 0 && floorCount < 101) && (elevatorCount > 0 && elevatorCount < 11)) {
        errorMessage.style.display = 'none';

        drawBuilding(floorCount, elevatorCount);

        drawFloorNumbers(floorCount);

        result.innerHTML = '';
    } else {
        errorMessage.style.display = 'block';
    }
})