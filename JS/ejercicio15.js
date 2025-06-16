const texto = prompt(`ingrese un texto`);
const long = texto.length;
let cont = 0;

for (i = 0; i <= long; i++) {
  if (
    texto.charAt(i) == "a" ||
    texto.charAt(i) == "e" ||
    texto.charAt(i) == "i" ||
    texto.charAt(i) == "o" ||
    texto.charAt(i) == "u"
  ) {
    cont = cont + 1;
  }
}
document.writeln(cont);
