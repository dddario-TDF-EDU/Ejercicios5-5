let botonaso = document.getElementById("ingreso");

botonaso.addEventListener("click", () => {
  let num1: number = Number(numero1.value);
  let num2: number = Number(numero2.value);
  let num3: number = Number(numero3.value);

  if (num1 > num2) {
    if (num1 > num3) {
      console.log(num1 + " es el mayor");
    } else {
      console.log(num3 + " es el mayor");
    }
  } else {
    if (num2 > num3) {
      console.log(num2 + " es el mayor");
    } else {
      console.log(num3 + " es el mayor");
    }
  }
});
