window.cipher={
 encode: ( offset, texto) => {
  let mensajeCifrado = "";
  for ( let i = 0 ; i < texto.length ; i++){
    if(texto[i].charCodeAt() >= 65 && texto[i].charCodeAt()<=90){
      let numeroAscii = ((texto[i].charCodeAt())-65+ offset)%26+65;
      let letraCifrada = String.fromCharCode(numeroAscii);
      mensajeCifrado = mensajeCifrado + letraCifrada;
    }else {
      mensajeCifrado = mensajeCifrado + texto[i];
    }
  }
return mensajeCifrado;
},

decode: ( offset,texto) => {

    let mensajeDescifrado="";

      for (let i = 0; i < texto.length; i++) {
    if (texto[i].charCodeAt() >= 65 && texto[i].charCodeAt()<=90){
        let numeroAsciidos = ((texto[i].charCodeAt())+65- offset)%26+65;
        let letraDescifrada = String.fromCharCode(numerorAsciidos);
        mensajeDescifrado = mensajeDescifrado + letraDescifrada;
      }else {
        mensajeDescifrado = mensajeDescifrado + texto[i];
      }
    }
  return mensajeDescifrado;
}
}
