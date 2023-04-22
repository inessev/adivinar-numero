const numeroAdivinar = Math.floor(Math.random() * 15) + 1;

let intentos = 0;

function pedirNumero() {
  const numero = prompt('Introduce un número entre 1 y 15');
  return parseInt(numero);
}

