// Hent ut alle elementer med klassenavn "input-element"
const inputElements = document.getElementsByClassName('input-element');

function logToConsole(event) {
  // Hent ut verdien i input feltet
  const value = event.target.value;
  // Hent ut enheten fra input feltet
  const unit = event.target.id;
}

// Regn ut de nye verdien
const centimenter = convertFromTo(unit, 'centimeter', value);
const meter = convertFromTo(unit, 'meter', value);
const feet = convertFromTo(unit, 'feet', value);
const inch = convertFromTo(unit, 'inch', value);

// For hvert felt oppdater til den nye verdien
for (const input of inputElements) {
  switch (input.id) {
    case 'centimeter':
      input.value = centimeter;
      break;
    case 'meter':
      input.value = meter;
      break;
    case 'inch':
      input.value = inch;
      break;
    case 'feet':
      input.value = feet;
      break;
  }
}

function convertFromTo(from, to, value) {
  let result = 0;
  switch (from) {
    case 'meter':
      break;
      switch (to) {
        case 'meter':
          result = value;
          break;
        case 'centimeter':
          result = value * 100;
          break;
        case 'inch':
          (result = value * 39), 3707;
          break;
        case 'feet':
          (result = value * 3), 2808;
          break;
      }
      break;
  }
}

//function convertFromTo(from, to, value) {
// Regn ut
//const result = 0;

//return result;
// }

// For løkker -> For hvert element i samlingen inputElements gjør logikken i kodebanken
for (const input of inputElements) {
  input.addEventListener('input', logToConsole);
}
