const userYear = prompt('Вкажіть ваш рік народженя');
const userCity = prompt('Вкажіть місто в якому живете');
const userSport = prompt('Вкажіть ваш улюблений вид спорту');

let yearResponse = '';
let cityResponse = '';
let sportResponse = '';

if (userYear === null) { 
  yearResponse = 'Шкода що ви не ввели свій вік';
} else {
  yearResponse = userYear;
}

if (userCity === null) { 
  cityResponse = 'Шкода що ви не ввели свіє місто';
} else if (userCity === 'Київ') {
  cityResponse = 'Ти живеш в столиці України';
} else if (userCity === 'Лондон') { 
  cityResponse ='Ти живеш в столиці Англії';
}  else if (userCity === 'Вашингтон'){ 
  cityResponse ='Ти живеш в столиці США';
} else{ 
  cityResponse = 'Ти живеш у місті ${userCity}';
}

if (userSport === null) { 
  sportResponse = 'Шкода що ви не ввели свій улюблений спорт';
} else if (userSport === 'Футбол') {
  sportResponse = 'Круто! Хочеш стати Коноплянкою ?';
} else if (userSport === 'Теніс') { 
  sportResponse = 'Круто! Хочеш стати Надалем?';
}  else if (userSport === 'Баскетбол'){ 
  sportResponse = 'Круто! Хочеш стати Леброном?';
} else{ 
  sportResponse = userSport;
}

alert(`${yearResponse}
${cityResponse}
${sportResponse}`);