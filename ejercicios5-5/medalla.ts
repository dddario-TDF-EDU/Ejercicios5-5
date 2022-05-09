let botonaso = document.getElementById("ingreso");

botonaso?.addEventListener("click", () => {
  let datoIngresado: number = Number(orden.value);

  switch (datoIngresado) {
    case 1:
      resultado.innerHtml = "Primer puesto, medalla de oro, ¡felicidades!";
      console.log("Primer puesto, medalla de oro, ¡felicidades!");
      break;

    case 2:
      console.log("Segundo puesto, medalla de plata, ¡felicidades!");
      break;

    case 3:
      console.log("Tercer puesto, medalla de bronce, ¡felicidades!");
      break;

    default:
      console.log(
        "Gracias por participar, reciba su certificado de participación"
      );
  }
});
