const select = document.querySelector('.select-section select');
const colorInputsSection = document.querySelector('.color-inputs-section');
const generateButton = document.querySelector('.btn.generate-btn');

const example1 = document.querySelector('.example-1');
const example1Textarea = document.querySelector('#example-1-area');

const example2 = document.querySelector('.example-2');
const example2Textarea = document.querySelector('#example-2-area');

// With border radius
const example3 = document.querySelector('.example-3');
const example3Textarea = document.querySelector('#example-3-area');

const example4 = document.querySelector('.example-4');
const example4Textarea = document.querySelector('#example-4-area');

const copyButtons = document.querySelectorAll('.btn.copy');

// Create Input type color elements
const createInputColorElement = () => {
    let input = document.createElement('input');
    input.type = 'color';
    input.classList.add(`color-input`)
    return input;
}

// Add change event on the select color count elements
select.addEventListener('change', (e) => {
    colorInputsSection.innerHTML = ''
    for(let i = 0; i < e.target.value; i++) {
        colorInputsSection.appendChild(createInputColorElement())
    }
})

// Create gradient styles
const gradientVal = (degree) => {
    let val = 'linear-gradient(';
    val += `${degree ? degree : 0}deg, `;

    let colorInputs = document.getElementsByClassName('color-input');

    Array.from(colorInputs).map((el, index) => {
        val += el.value;
        val += index !== colorInputs.length - 1 ? "," : ''
    })

    val += ')';

    return val
}

// Remove empty lines from string
const removeEmptyLines = (str) => str.split(/\r?\n/).filter(line => line.trim() !== "").join("\n")

// Animated elements styles
const animatedStyles = (val, exampleEl, haveBorder) => {
    val = removeEmptyLines(val).slice(0, -1);

    let keyframesVal = ''
    const keyFrames = exampleEl.getAnimations()[0].effect.getKeyframes().map((el, index, array) => {
        keyframesVal += !haveBorder
            ? `${100*(index/(array.length - 1))}% { border-image-source: ${el.borderImageSource};}\n`
            : `${100*(index/(array.length - 1))}% { background-image: ${el.backgroundImage};}\n`
    })
    const options = exampleEl.getAnimations()[0].effect.getTiming()

    val += `
    animation-name: animateEffect;
    animation-duration: ${options.duration}ms;
    animation-iteration-count: ${options.iterations === Infinity ? 'Infinite' : options.iterations};
    animation-timing-function: ${options.easing};
    }
    
    @keyframes animateEffect {
        ${keyframesVal}
    }
    `
    return val
}

// Fill textareas values
const fillTextAreaValues = (exampleEl, exampleArea, gradient, isAnimated = false, haveBorder = false) => {
    let val = `{
    width: 100px;
    height: 100px;
    `;

    if(haveBorder) {
        val += `
    border-radius: 10px;
    background-color: white;
    border: 4px solid transparent;
    background-origin: border-box;
    background-clip: content-box, border-box;
    background-image: linear-gradient(white, white), ${gradient};
    }
        `

        if(isAnimated) return exampleArea.value = removeEmptyLines(animatedStyles(val, exampleEl, haveBorder))

        return exampleArea.value = removeEmptyLines(val)
    }


    val += `
    border: 4px solid;
    border-image-slice: 1;
    border-image-source: ${gradient ? gradient : 'inherit'};
    }
    `

    if(isAnimated) return exampleArea.value = removeEmptyLines(animatedStyles(val, exampleEl, haveBorder))

    return exampleArea.value = removeEmptyLines(val)
}

// Generate Button functionality
generateButton.addEventListener('click', () => {
    let borderDegree = document.querySelector('.border-degree').value;

    // Example 1
    example1.style.borderImageSource = gradientVal(borderDegree)
    fillTextAreaValues(example1, example1Textarea, gradientVal(borderDegree))

    // Example 2
    const example2Keyframes = []
    for (let i = 0; i <= 360; i += 90) {
        example2Keyframes.push({
            borderImageSource: gradientVal(i)
        })
    }
    example2.animate(example2Keyframes, {
        // timing options
        duration: 1000,
        iterations: Infinity
    })
    fillTextAreaValues(example2, example2Textarea, '', true)

    // Example 3
    example3.style.backgroundImage = `linear-gradient(white, white), ${gradientVal(borderDegree)}`
    example3.style.borderColor = 'transparent'
    fillTextAreaValues(example3, example3Textarea, gradientVal(borderDegree), false, true)

    // Example 4
    const example4Keyframes = []
    for (let i = 0; i <= 360; i += 22.5) {
        example4Keyframes.push({
            backgroundImage: `linear-gradient(white, white), ${gradientVal(i)}`
        })
    }
    example4.animate(example4Keyframes, {
        // timing options
        duration: 1000,
        iterations: Infinity
    })
    example4.style.backgroundImage = `linear-gradient(white, white), ${gradientVal(borderDegree)}`
    example4.style.borderColor = 'transparent'
    fillTextAreaValues(example4, example4Textarea, gradientVal(borderDegree), true, true)
})

// Copy Buttons functionality
copyButtons.forEach(el => {
    el.addEventListener('click', (e) => {
        let copyText = e.target.previousElementSibling.value
        if(!copyText) return e.preventDefault();
        navigator.clipboard.writeText(copyText).then(() => {
            alert("Copied to clipboard");
        });
    })
})