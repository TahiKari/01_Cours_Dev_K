console.log(``);
function transformText(word) {
  const firstLetterUpper = word.substring(0, 1).toUpperCase();
  const otherLetterLower = word.substring(1).toLowerCase();
  return `${firstLetterUpper}${otherLetterLower}`;
}

const newWord = transformText('MARYAM');

console.log(newWord);