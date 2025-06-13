const edad = parseInt(
  prompt(`Ingrese su edad: 
  `)
);
if (edad < 1 || edad > 100) {
  document.writeln(`El numero ingresado no es correcto`);
} else {
  if (edad >= 18) {
    document.writeln(`Ya tienes edad para conducir`);
  } else {
    document.writeln(`No tienes edad para conducir`);
  }
}
