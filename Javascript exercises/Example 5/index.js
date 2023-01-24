// Check Readme.ms file

let numerals = {
    "-":"负",
    ".":"点",
    0:"零",
    1:"一",
    2:"二",
    3:"三",
    4:"四",
    5:"五",
    6:"六",
    7:"七",
    8:"八",
    9:"九",
    10:"十",
    100:"百",
    1000:"千",
    10000:"万"
};

function toChineseNumeral(num){
    let result = ''

    if(num < 0) {
        result += numerals['-']
        num = Math.abs(num)
    }

    if(Object.keys(numerals).includes(`${num}`)) {
        if(num > 10) result += numerals[1]
        return result + numerals[num]
    }

    let splitNum = `${num}`.split('')
    const isDotExist = splitNum.includes('.')

    if (isDotExist && parseInt(num) % 10 === 0 && parseInt(num) > 0) {
        result += numerals[parseInt(num)]
        splitNum = `.${`${num}`.split('.')[1]}`.split('')
    }

    const dotIndex = splitNum.indexOf('.')

    splitNum.map((el, index, arr) => {
        if (index !== arr.length - 1  && arr[index + 1] != 0 && el == 0) {
            return result += numerals[0]
        }

        if (el == 0) {
            if (isDotExist && index < dotIndex) return
            else if (!isDotExist) return
        }

        if(!(index == 0 && el == 1 && arr.length == 2)) result += numerals[el]

        if (isDotExist && index >= dotIndex) return

        let i = isDotExist ? dotIndex : arr.length
        if (i - 1 - index !== 0) {
            result += numerals[Math.pow(10, i - 1 - index)]
        }
    })

    return result
}