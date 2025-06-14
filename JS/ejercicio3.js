do {
  let texto = prompt(`escribe un texto`);

  document.writeln(texto + " -");
} while (confirm(`queres seguir?`));
