let botonaso = document.getElementById("ingreso");

botonaso?.addEventListener("click", () => {
  let paridad: number = Number(numeraso.value);

  if (paridad < 0) {
    paridad = paridad * -1;
  }

  paridad = paridad % 2;

  switch (paridad) {
    case 0:
      console.log("Su numero es par");
      break;
    case 1:
      console.log("Su numero es impar");
      break;
  }
});
