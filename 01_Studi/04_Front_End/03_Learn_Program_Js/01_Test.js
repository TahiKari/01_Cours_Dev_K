let message;
let tvStation = 8;

switch (tvStation) {
    case 1:
        message = "TF1";
        break;
    case 2: 
        message = "FRANCE 2";
        break;
    case 3:
        message = "FRANCE 3";
        break;
    case 4:
        message = "CANAL +";
        break;
    case 5:
        message = "FRANCE 5";
        break;
    case 6:
        message = "M6"
        break;
    case 7:
        message = "Arte";
    default:
        message = 'Chaine indisponible';
        break;
}

console.log(message);

