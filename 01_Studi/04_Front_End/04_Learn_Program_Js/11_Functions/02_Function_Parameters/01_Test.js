function sayHello(userName) {
    // console.log(getHello() + ' ' + userName);
     console.log(`${getHello()} ${userName}`);
 }
 
 function getHello() {
     if (Math.random() > 0.5) {
         return 'Bienvenue';
     } else {
         return 'Bonjour';
     }
 }
 
 sayHello('Karim');
 console.log(`---------------------------------`);
 sayHello('Méhdi');
 console.log(`---------------------------------`);
 sayHello('Kader');
 console.log(`---------------------------------`);
 sayHello('Dominique');
 console.log(`---------------------------------`);
 sayHello('Maryam');
 console.log(`---------------------------------`);
 sayHello('Adam');
 
 console.log(`---------------------------------`);
 
 function average(note1, note2, note3) {
     return (note1 + note2 + note3) / 3;
 }
 
 let avg = average(12, 3, 18);
 console.log(avg);
 
 let avg2 = average(10, 18, 15);
 console.log(Math.round(avg2 * 10) / 10);