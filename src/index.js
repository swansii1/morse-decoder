const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
        let decodedString = '';
      
        for (let i = 0; i < expr.length; i += 10) {
          const morseLetterCode = expr.slice(i, i + 10);


          if (morseLetterCode === '**********') {
            decodedString += ' ';

          } else {
            let morseCode = '';
            for (let j = 0; j < 10; j += 2) {
              const symbol = morseLetterCode.slice(j, j + 2);
                if (symbol === '10') {
                morseCode += '.';
              } 
                else if (symbol === '11') {
                morseCode += '-';
              }
            }
             decodedString += MORSE_TABLE[morseCode];
          }
        }
          return decodedString;
      }

module.exports = {
    decode
}