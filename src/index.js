//para el cifrado
const botonCifrar = document.getElementById('boton-cifrar')
const CajaUno = document.getElementById('cajauno');
const inputDespla = document.getElementById('desplazamiento');
const CajaDos =document.getElementById('cajados');

function manejadorClick(){

  let CajaUnoValor = CajaUno.value.toUpperCase();
  let inputDesplaValor = parseInt(inputDespla.value);
  let mensajeCifrado = cipher.encode(inputDesplaValor,CajaUnoValor);
  CajaDos.value = mensajeCifrado;
}

botonCifrar.addEventListener("click",manejadorClick);

// para el mensajeDescifrado
const botonDescifrar = document.getElementById('boton-descifrar');

function manejadorClick2(){
  let CajaUnoValor = CajaUno.value.toUpperCase();
  let inputDesplaValor = parseInt(inputDespla.value);
  let mensajeDescifrado = cipher.decode(inputDesplaValor,CajaUnoValor);
  return CajaDos.value = mensajeDescifrado;
}

botonDescifrar.addEventListener("click", manejadorClick2)
