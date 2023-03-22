let newUser = 'Caroline';
let sentence = '            Bonjour et bienvenue à l\'utilisatrice ' + newUser;

console.log('\n' + sentence + '\n |-------------------------------------------------------------------| \n' + '                   Ce message contient ' + sentence.length + ' caractère');

console.log(`
|---------------------------------------------------------------------|

${sentence} 
 |-------------------------------------------------------------------|
                   Ce message contient  ${sentence.length} caractère`);
