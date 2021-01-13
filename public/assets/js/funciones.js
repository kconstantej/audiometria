function decibeles( id_input, operacion){
    var numero = parseInt(document.getElementById(id_input).value,10);
  
    var nuevoVal = numero;
    if(operacion=='1'){
        if (nuevoVal < 130){
            nuevoVal= nuevoVal + 10;
        }
      
    } else{
        if(nuevoVal > 0){
   
            nuevoVal= nuevoVal - 10;;
    }
    }
    document.getElementById(id_input).value = nuevoVal;
 
  }

  function heartz( id_input, operacion){
    var numero = document.getElementById(id_input).value; 
    var array = ['125','250','500','1k','2k','4k','8k'] 
    if(operacion=='1'){

         for (let index = 0; index < array.length; index++) {

              if (numero == array[index]){
                    if (index == (array.length-1)){
                        document.getElementById(id_input).value = array[index];        
                    }
                    else {
                        document.getElementById(id_input).value = array[index+1];
                    }
                                         } 
                                                             } 
                                                             
                        }
    else {

        for (let index = 0; index < array.length; index++) {

            if (numero == array[index]){
                  if (index == 0){
                      document.getElementById(id_input).value = array[index];        
                  }
                  else {
                      document.getElementById(id_input).value = array[index-1];
                  }
                                       } 
                                                           } 
    }
 
  }