function fact(nbr) 
{
  // Si nbr = 0 la factorielle retournera 1
  if (nbr === 0)
  {
     return 1;
  }
  // appelez à nouveau la procédure récursive
  return nbr * fact(nbr-1);
}

console.log(fact(5));

/*function factorial(n) {
    if (n === 0 || n === 1) {
      console.log(`1 = ${n}!`);
      return 1;
    } else {
      let result = n * factorial(n - 1);
      console.log(`${result} = ${n} * ${n - 1}!`);
      return result;""
    }
  }
  
  // exemple : calculer 6!
  console.log(`Le résultat est ${factorial(6)}`);*/
  

/*let sum = 0;

  for (let i = 1; i <= 4; i++) {
      sum += i;
      console.log('Résultat de i: ' + i)
      console.log('------------------------ ') 
      console.log('Résultat de sum: ' + sum)
}

console.log(sum)*/

/*function factorial(n) {
  let result = 1;
  
  for(let i = 1; i <= n; i++) {
      result = i * result; 
  }
   return result;
}

console.log('Resultat final: ' + factorial(5));*/

/*function factorial(num) {
  let result = 1;
  let formula = "";
  
  for (let i = num; i >= 1; i--) {
    result *= i;
    formula += i + (i !== 1 ? " * " : " = ");
    
  }
  
  formula += result;
  
  console.log(formula);
  
  return result;
}

console.log(factorial(5)); // output: 5 * 4 * 3 * 2 * 1 = 120*/


/*function factorial(num) {
  let result = 1;
  let formula = "";
  
  for (let i = 1; i <= num; i++) {
    result *= i;
    formula += i + (i !== num ? " * " : " = ");
    
  }
  
  formula += result;
  
  console.log(formula);
  
  return result;
}

console.log(factorial(5)); // output: 1 * 2 * 3 * 4 * 5 = 120*/







