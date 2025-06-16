const texto = prompt(`Ingrese un texto`);
let long = texto.length;

for (i = 0; i <= long; i++) {
  let letras = texto.charAt(long - i);
  document.writeln(letras);
}
