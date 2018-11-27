window.cipher = {
  encode: (offset, texto) => {
  let mensajeCifrado = "";
  for ( let i = 0 ; i < texto.length ; i++ ) {
   let numLetraAscii = texto.charCodeAt(i);
    if (65 <= texto.charCodeAt(i) <= 90){
      let numLetraNuevaconDespla = ((numLetraAscii - 65 + offset)%26 +65);
      let nuevaLetra = String.fromCharCode(numLetraNuevaconDespla);
       mensajeCifrado = mensajeCifrado + nuevaLetra;
    } if (numLetraAscii === 32) {
  mensajeCifrado = mensajeCifrado + String.fromCharCode(numLetraAscii);
    }
 }
   return mensajeCifrado;
},
decode : (offset, texto) => {
  let mensajeDescifrado = "";
  for ( let i = 0 ; i < texto.length ; i++ ) {
    let numLetraAscii = texto.charCodeAt(i);
      if (65 <= texto.charCodeAt(i) <= 90){
       let numLetraNuevaconDespla = ((numLetraAscii + 65 - offset)%26 +65);
       let nuevaLetra = String.fromCharCode(numLetraNuevaconDespla);
       mensajeDescifrado = mensajeDescifrado + nuevaLetra;
    } if (numLetraAscii === 32){
     mensajeDescifrado = mensajeDescifrado + String.fromCharCode(numLetraAscii);
    }
 }
 return mensajeDescifrado;
},
}
