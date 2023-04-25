const numeroAdivinar = Math.floor(Math.random() * 15) + 1;

let intentos = 0;

function pedirNumero() {
  const numero = prompt('Introduce un número entre 1 y 15');
  return parseInt(numero);
}

function comprobarNumero(numero) {
  intentos++;

  if (numero === numeroAdivinar) {
    alert(`¡Felicidades! Has acertado el número en ${intentos} intentos.`);
    return true;
  } else if (numero < numeroAdivinar) {
    alert('El número que has introducido es menor.');
  } else {
    alert('El número que has introducido es mayor.');
  } 

  return false;
}

for (let i = 0; i < 3; i++) {
  const numero = pedirNumero();

  if (comprobarNumero(numero)) {
    break;
  }
}
if (intentos === 3) {
  alert(`Has agotado tus intentos, el número era ${numeroAdivinar}.`);
}