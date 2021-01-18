
var peticion = obtenerXHR();
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