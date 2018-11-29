window.cipher = {
  encode: (offset, string) => {
  let mensajeCifrado = "";
  for ( let i = 0 ; i < string.length ; i++ ) {
    if (string.charCodeAt(i) >=65 &&  string.charCodeAt(i)<= 90){
        let numLetraAscii = string.charCodeAt(i);
        let numLetraNuevaconDespla = ((numLetraAscii - 65) + offset)%26 +65;
        let nuevaLetra = String.fromCharCode(numLetraNuevaconDespla);
         mensajeCifrado = mensajeCifrado + nuevaLetra;
    } else{
        mensajeCifrado = mensajeCifrado + string[i];
    }

 }
   return mensajeCifrado;
},
  decode : (offset, string) => {
  let mensajeDescifrado = "";
  for ( let i = 0 ; i < string.length ; i++ ) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i)<= 90){
       let numLetraAscii = string.charCodeAt(i);
       let numLetraNuevaconDespla = ((numLetraAscii + 65) - offset)%26 +65;
       let nuevaLetra = String.fromCharCode(numLetraNuevaconDespla);
       mensajeDescifrado = mensajeDescifrado + nuevaLetra;
    } else{
     mensajeDescifrado = mensajeDescifrado +string[i];
    }
 }
 return mensajeDescifrado;
},
}
