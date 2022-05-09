import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Menu de ejercicios de la fecha 5-5</h1>
<div>
<select id="seleccion">
  <option value="1">Medallas</option>
  <option value="2">Par o impar</option>
  <option value="3">El mayor de tres</option>
</select>
<button id="dirigir">Ir</button>
  
</div>`;

let botonaso = document.getElementById("dirigir");

botonaso.addEventListener("click", () => {
  let direccion: number = Number(seleccion.value);

  switch (direccion) {
    case 1:
      location.href = "../ejercicios5-5/medalla.html";
      break;
    case 2:
      location.href = "../ejercicios5-5/ejercicioParidad.html";
      break;

    case 3:
      location.href = "../ejercicios5-5/mayorDeTres.html";
      break;

    default:
      location.href = "../ejercicios5-5/medalla.html";
  }
});
