

function StandardBookNumbers(isbn: string) {
    let newisbn = isbn.split('').map(parseFloat);
    let isbn10ConversionArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let isbn13ConversionArr = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1];
    let isbnConvert = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3]

    let finalArr = [];
    let convertedToISBN13 = []
    let withOutLastDigit = []

    let sum = 0;
    let conversionSum = 0;

    for (let i = 0; i < newisbn.length; i++) {

        if (isbn.length === 10) {
            finalArr[i] = newisbn[i] * isbn10ConversionArr[i];
            convertedToISBN13[i] = newisbn[i]
        }
        if (isbn.length === 13) {
            finalArr[i] = newisbn[i] * isbn13ConversionArr[i];
        }
    }

    convertedToISBN13.unshift(9, 7, 8)
    let x = convertedToISBN13.slice(0, convertedToISBN13.length - 1)

    for (let i = 0; i < x.length; i++) {
        withOutLastDigit[i] = x[i] * isbnConvert[i];

    }

    for (let i = 0; i < withOutLastDigit.length; i++) {

        conversionSum += withOutLastDigit[i]
    }

    let lastdigit = (10 - (conversionSum % 10))

    for (let i = 0; i < finalArr.length; i++) {
        sum += finalArr[i];
    }

    if (sum % 11 === 0 && finalArr.length === 10) {

        convertedToISBN13.push(lastdigit)
        let conversion = x.join('')

        return conversion + lastdigit
    }

    if ((sum % 10 === 0) && (finalArr.length === 13)) {

        return "valid"
    }

    if ((sum % 10 !== 0) || (sum % 11 !== 0)) {
        return "Invalid"
    }

}
console.log(StandardBookNumbers('0316066524'));