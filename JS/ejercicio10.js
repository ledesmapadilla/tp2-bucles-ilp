const filas = parseInt(prompt("Ingresa un numero de filas"));
const columnas = parseInt(prompt("Ingresa un numero de columnas"));
let totalCelda = filas * columnas;

document.writeln(`<table class='table table-striped'><tbody>`);
for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
  document.writeln(`<tr>`);
  for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
    document.writeln(`<td class='p-2 text-center'>${totalCelda--}</td>`);
  }

  document.writeln(`</tr>`);
}

document.writeln(`</tbody></table>`);
