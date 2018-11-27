//para el cifrado
const botonCifrar = document.getElementById('boton-cifrar')
const inputCajauno = document.getElementById('cajauno');
const inputDespla = document.getElementById('desplazamiento');
const inputCajados =document.getElementById('cajados');

function manejadorClick(){

  let inputCajaunoValor = inputCajauno.value.toUpperCase();
  let inputDesplaValor = parseInt(inputDespla.value);
  let mensajeCifrado = cipher.encode(inputDesplaValor,inputCajaunoValor);
  inputCajados.value = mensajeCifrado;
}

botonCifrar.addEventListener("click",manejadorClick);

// para el mensajeDescifrado
const botonDescifrar = document.getElementById('boton-descifrar');

function manejadorClick2(){
  let inputCajaunoValor = inputCajauno.value.toUpperCase();
  let inputDesplaValor = parseInt(inputDespla.value);
  let mensajeDescifrado = cipher.decode(inputDesplaValor,inputCajaunoValor);
  return inputCajados.value = mensajeDescifrado;
}

botonDescifrar.addEventListener("click", manejadorClick2)
