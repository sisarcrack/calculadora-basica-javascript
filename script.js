// Esto agrega a la pantalla el valor del boton de la alvuladora
function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

// Esta function vacia la pantalla
function borrar() {
  document.getElementById("pantalla").value = "";
}

// Esta accion tova el valor de la pantalla y calcula el resultado
function calcular() {
  const valorPantalla = document.getElementById("pantalla").value;
  const resultado = eval(valorPantalla);
  document.getElementById("pantalla").value = resultado;
}
