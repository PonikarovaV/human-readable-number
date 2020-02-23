let numbers = {
    '1': {
        'units': 'one',
        'decades': 'ten'
         },
    '2': {
        'units': 'two',
        'decades': 'twenty'
         },
    '3': {
        'units': 'three',
        'decades': 'thirty'
         }, 
    '4': {
        'units': 'four',
        'decades': 'forty'
         }, 
    '5': {
        'units': 'five',
        'decades': 'fifty'
         }, 
    '6': {
        'units': 'six',
        'decades': 'sixty'
         }, 
    '7': {
        'units': 'seven',
        'decades': 'seventy'
         },
    '8': {
        'units': 'eight',
        'decades': 'eighty'
         },
    '9': {
        'units': 'nine',
        'decades': 'ninety'
         }, 
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen', 
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',  
}

module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero';
    }

    let numberArray = (String(number)).split('');

    if (numberArray.length === 3) {
        if (number % 100 === 0) {
            return `${numbers[numberArray[0]].units} hundred`;
        }
        if (number % 10 === 0) {
            return `${numbers[numberArray[0]].units} hundred ${numbers[numberArray[1]].decades}`;
        }
        if ((number % 100) > 19 && number % 10 !== 0) {
            return `${numbers[numberArray[0]].units} hundred ${numbers[numberArray[1]].decades} ${numbers[numberArray[2]].units}`;
        }
        if ((number % 100) > 19 && number % 10 === 0) {
            return `${numbers[numberArray[0]].units} hundred ${numbers[numberArray[1]].decades}`;
        }
        if ((number % 100) <= 19 && (number % 100) > 9) {
            return `${numbers[numberArray[0]].units} hundred ${numbers[number % 100]}`;
        }
        if ((number % 100) <= 9) {
            return `${numbers[numberArray[0]].units} hundred ${numbers[number % 100].units}`;
        }
    }

    if (numberArray.length === 2) {
        if ((number % 100) > 19 && number % 10 !== 0) {
            return `${numbers[numberArray[0]].decades} ${numbers[numberArray[1]].units}`;
        }
        if ((number % 100) > 19 && number % 10 === 0) {
            return `${numbers[numberArray[0]].decades}`;
        }
        if ((number % 100) <= 19) {
            return `${numbers[number % 100]}`;
        }
    }

    if (numberArray.length === 1) {
        return `${numbers[numberArray[0]].units}`;
    }
}
