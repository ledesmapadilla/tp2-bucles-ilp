/* let renglon = 1;

while (renglon < 50) {
  document.writeln(`<p>renglon ${renglon}<p>`);
  renglon++;
} */

do {
  let numero = parseInt(prompt(`Ingresa un numero`));
  if (isNaN(numero)) {
    alert(`No es un numero`);
    numero = 8;
  }
  document.writeln(numero);
} while (confirm(`Ingrese otro numero`));
