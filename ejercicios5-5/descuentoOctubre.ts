let botonaso = document.getElementById("ingreso");

botonaso = addEventListener("click", () => {
  let precio: number = Number(precioCompra.value);
  let cant: number = Number(stock.value);
  let mesSelect: number = Number(mes.value);

  if (mesSelect != 10) {
    let precioTotal: number = precio * cant;
    console.log(
      "No se le aplicara el descuento, el precio final es: " + precioTotal
    );
  } else {
    let precioTotal: number = precio * cant * 0.8;
    console.log(
      "Se le aplicara el descuento, el precio final es: " + precioTotal
    );
  }
});
