const getDayOfDate = (day, month, year) => {
	const d = new Date(year, month, day);
	switch (d.getDay()) {
		case 0:
		  return 'Dimanche'
		  case 1:
		  return 'Lundi'
		  case 2:
		  return 'Mardi'
		  case 3:
		  return 'Mercredi'
		  case 4:
		  return 'Jeudi'
		  case 5:
		  return 'Vendredi'
		  case 6:
		  return 'Samedi'
	}
}

const test = () => {
    if (getDayOfDate(15, 5, 2020) === 'Vendredi') {
    return true;
    } else {
    return false;
    }
    }
    console.log(test());



