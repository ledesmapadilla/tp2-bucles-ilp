let suma = 0;

do {
  let numero = parseInt(prompt(`Ingresa un numero`));
  if (isNaN(numero)) {
    alert(`No es un numero`);
    numero = 0;
  }
  suma = suma + numero;
} while (confirm(`Ingrese otro numero`));
document.writeln(`La suma es ${suma}`);
