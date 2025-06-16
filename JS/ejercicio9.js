let num = 500;
for (let i = 1; i <= num; i++) {
  document.writeln(i);
  for (let mult = i; mult % 4 == 0; mult++) {
    document.writeln(`(multiplo de 4)`);
  }
  for (let mult = i; mult % 9 == 0; mult++) {
    document.writeln(`(multiplo de 9)`);
  }
  for (let mult = i; mult % 5 == 0; mult++) {
    document.writeln(`-`);
  }
  document.writeln(`<br>`);
}
