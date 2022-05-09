let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  let sueldo: number = Number(dato.value) * 1.2;
  let sueldo1: number = Number(dato.value) * 1.1;
  let sueldo2: number = Number(dato.value) * 1.05;
  let sueldo3: number = Number(dato.value);

  if (sueldo3 > 0 && sueldo3 < 15000) {
    console.log("Usted tiene un aumento del 20%");
    console.log(sueldo);
  } else if (sueldo3 > 15001 && sueldo3 < 20000) {
    console.log("Usted tiene un aumento del 10%");
    console.log(sueldo1);
  } else if (sueldo3 > 20001 && sueldo3 < 25000) {
    console.log("Usted tiene un aumento del 5%");
    console.log(sueldo2);
  } else if (sueldo3 > 25000) {
    console.log("Usted no tiene un aumento");
    console.log(sueldo3);
  }
});
