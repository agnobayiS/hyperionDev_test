
function caesarCipher(increptedString: string, shift: number): String {
    increptedString = increptedString.toUpperCase();
    let Alphabets: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let decreptedString: string = ''

    for (let i = 0; i < increptedString.length; i++) {
        const letter: string = increptedString[i];
        if (letter === ' ') {
            decreptedString += letter;

            continue;
        }

        let currentIndex: number = Alphabets.indexOf(letter)
        let newIndex: number = (currentIndex + shift) % 26;

        decreptedString += Alphabets[newIndex];
        decreptedString.slice(0,decreptedString.length - 1);
    }

    return decreptedString + '.'
}
console.log(caesarCipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK', 39));

//should print THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.

