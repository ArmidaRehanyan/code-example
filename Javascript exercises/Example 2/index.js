// Check Readme.ms file

function spinWords(string){
    let arr = [];
    string.split(' ').forEach( e => {
        if (e.length >= 5) e = e.split('').reverse().join('');
        arr.push(e);
    });
    return arr.join(' ');
}