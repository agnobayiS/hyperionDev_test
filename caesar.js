function caesarCipher(increptedString, shift) {
    increptedString = increptedString.toUpperCase();
    var Alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var decreptedString = '';
    for (var i = 0; i < increptedString.length; i++) {
        var letter = increptedString[i];
        if (letter === ' ') {
            decreptedString += letter;
            continue;
        }
        var currentIndex = Alphabets.indexOf(letter);
        var newIndex = (currentIndex + shift) % 26;
        decreptedString += Alphabets[newIndex];
        decreptedString.slice(0, decreptedString.length - 1);
    }
    return decreptedString + '.';
}
console.log(caesarCipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK', 39));
//should print THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.
