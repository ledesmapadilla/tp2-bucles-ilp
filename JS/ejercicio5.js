let num = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22,
];
let letra = [
  `T`,
  `R`,
  `W`,
  `A`,
  `G`,
  `M`,
  `Y`,
  `F`,
  `P`,
  `D`,
  `X`,
  `B`,
  `N`,
  `J`,
  `Z`,
  `S`,
  `Q`,
  `V`,
  `H`,
  `L`,
  `C`,
  `K`,
  `E`,
];
let equiv = {};

do {
  const dni = parseInt(prompt(`Ingrese su DNI`));

  if (isNaN(dni)) {
    alert(`El numero no es valido`);
  } else if (dni <= 0 || dni > 99999999) {
    alert(`El numero no es valido`);
  } else {
    i = dni % 23;
    equiv[num[i]] = letra[i];
    alert(`La letra de su DNI es ${letra[i]}`);
  }
} while (confirm(`Ingrese otro DNI`));
