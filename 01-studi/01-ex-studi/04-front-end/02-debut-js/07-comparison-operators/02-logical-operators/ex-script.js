// On utilise une condition ternaire pour déterminer le nombre de vacances restantes
const holidayMax = sick === 0 || sick === 1 ? 4 : 4 - sick + 1;

// On définit le nombre de personnes en formation maximum
const trainingMax = 2;

// S'il reste plus d'une vacance disponible et que le nombre de personnes en formation est inférieur ou égal à 2
const congeAccepted = holidayMax > 0 && trainingMax <= 2

