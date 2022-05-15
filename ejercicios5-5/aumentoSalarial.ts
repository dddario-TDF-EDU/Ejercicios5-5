let botonaso = document.getElementById("ingreso");

botonaso.addEventListener("click", () => {
  alert(
    "Por favor no confundir aumento salarial con correccion de sueldo en base a la inflación"
  );
  let sueldoActual: number = Number(sueldo.value);

  if (sueldoActual <= 0) {
    console.log(
      "El sueldo ingresado no puede ser cero o negativo, intente nuevamente"
    );
  } else {
    if (sueldoActual <= 15000) {
      console.log(
        "Su sueldo sera actualizado, pasa de " +
          sueldoActual +
          " a " +
          sueldoActual * 1.2
      );
    } else if (sueldoActual <= 20000) {
      console.log(
        "Su sueldo sera actualizado, pasa de " +
          sueldoActual +
          " a " +
          sueldoActual * 1.1
      );
    } else if (sueldoActual <= 25000) {
      console.log(
        "Su sueldo sera actualizado, pasa de " +
          sueldoActual +
          " a " +
          sueldoActual * 1.05
      );
    } else {
      console.log(
        "Lamentablemente sobrepasa los 25000, por lo cual no hay un aumento asignado."
      );
    }
  }
});
