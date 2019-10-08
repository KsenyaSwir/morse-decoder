const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let str = expr;
    let mas = [];

    while (str) {
        mas.push(str.slice(0, 10));
        str = str.slice(10);
    }
    let res = mas.map(
        char => {
            if (char == '**********') {
                return ' ';
            } else {
                let letter = char.slice(char.indexOf('1'));
                letter = letter.replace(/10/g, '.');
                letter = letter.replace(/11/g, '-');
                return MORSE_TABLE[letter];
            }
        }
    );
    return res.join('');

}

module.exports = {
    decode
}