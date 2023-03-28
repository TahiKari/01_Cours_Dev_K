function transformText(word) {
    const FIRSTLETTERUPPER = word.substring(0, 1).toUpperCase();
    const OTHERLETTERLOWER = word.substring(1).toLowerCase();
    return `${FIRSTLETTERUPPER}${OTHERLETTERLOWER}`;
}

const newWord = transformText('KARIM');

console.log(newWord);





