// Check Readme.ms file

function anagrams(word, words) {
    let sortedWord = word.split('').sort().join('');
    const arr = [];

    words.forEach(e => {
        if (e.split('').sort().join('') === sortedWord) arr.push(e)
    })

    return arr
}