const texto = prompt(`Ingrese un texto`);
let long = texto.length;
let vocal = 0;
for (i = 0; i <= long; i++) {
  if (
    texto.charAt(i) == "a" ||
    texto.charAt(i) == "e" ||
    texto.charAt(i) == "i" ||
    texto.charAt(i) == "o" ||
    texto.charAt(i) == "u"
  ) {
    vocal = i;
    long = i;
    document.writeln(
      `La primera vocal el la ${texto.charAt(vocal)} y esta en la posicion ${i}`
    );
  }
}
