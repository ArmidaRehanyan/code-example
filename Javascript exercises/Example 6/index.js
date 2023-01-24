// Check Readme.ms file

snail = function(array) {
    let middle = array.slice(1, array.length - 1).map(row => row.slice(1, row.length - 1));
    const arr = [
        array[0],
        array.slice(1, array.length - 1).map(row => row[row.length - 1]),
        array.length > 1 ? array[array.length - 1].reverse() : [],
        array.slice(1, array.length - 1).reverse().map(row => row[0]),
        middle.length > 0 ? snail(middle) : [],
    ];

    return [].concat(...arr)
}