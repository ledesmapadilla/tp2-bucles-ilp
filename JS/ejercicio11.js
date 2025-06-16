const nom1 = prompt(`Ingrese un nombre`);
const ed1 = parseInt(prompt(`Ingrese su edad`));

const nom2 = prompt(`Ingrese otro nombre`);
const ed2 = parseInt(prompt(`Ingrese su edad`));

const nom3 = prompt(`Ingrese otro nombre`);
const ed3 = parseInt(prompt(`Ingrese su edad`));

let mayoredad = Math.max(ed1, ed2, ed3);

/* document.writeln(`mayoredad`); */

let mayornombre;

if (mayoredad === ed1) {
  mayornombre = nom1;
} else mayornombre = nom2;
if (mayoredad === ed2) {
  mayornombre = nom2;
}
if (mayoredad === ed3) {
  mayornombre = nom3;
}

document.writeln(`El nombre con la mayor edad es ${mayornombre}`);
