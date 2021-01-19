

var peticion = obtenerXHR();
var pantallaCarga = 0;
var ladoOido = -1;
var valLadoOido;
var valordB = 0;
var valorHz = 0;


renderizar();
var o;
function obtenerXHR () {
    req = false;
    if (window.XMLHttpRequest){
      req = new XMLHttpRequest();
    }
    return req;
  }
  
function renderizar(){
    //configutando la peticion
    peticion.open("GET", "assets/services/data.json", true);
    //relacionando la peticion onreadystatechange
    peticion.onreadystatechange = procesarPeticion;
    //enviando la peticion
    peticion.send(null);

    if (this.pantallaCarga != 0){
        enviarDatos();
    }else {
      this.pantallaCarga = 1;
    }
  }

async function procesarPeticion() {

    if (peticion.readyState == 4){
      if(peticion.status == 200) {
        this.o= await JSON.parse(peticion.responseText);
        console.log(`Respuesta: ${peticion.responseText}`);
      }
  }
  //console.log('AA',peticion.responseText);
  //console.log(`Respuesta: ${this.o}`);
}

function clickOido(id) {

  
  if (id == "izquierdo"){
    this.ladoOido = 1;
  }else{
    if (id == "derecho"){
      this.ladoOido = 2;
    }
  }

  
}

async function enviarDatos(){
  clickOido();
  
  this.valordB = document.getElementById('val').value;
  this.valorHz = document.getElementById('hz').value;


  if (this.ladoOido == 1){
    this.valLadoOido = "oido izquierdo"
  }else {
    if (this.ladoOido == 2) {
      this.valLadoOido = "oido derecho";
  
    }
    else {
      console.log('DEBE ELEGIR UN VALOR')
    
    alert('Debe elegir un oido para continuar');      
      return;
    }
    }

  console.log('dB',this.valordB);
  console.log('Hz',this.valorHz)
  console.log('Hz',this.valLadoOido)

  var formBody = [];
  
    var encodedKey = encodeURIComponent('name');
    var encodedValue = encodeURIComponent('casa');
    formBody.push(encodedKey + "=" + encodedValue);
  
  formBody = formBody.join("&");


  fetch('http://localhost:3000/oidos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: formBody
  
 });

 //renderizar();

  
}