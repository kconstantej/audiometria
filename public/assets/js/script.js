function comprobarClave(){
    var inputtxt1 = document.getElementById('password1');
    var inputtxt2 = document.getElementById('password2');  
    var valor1 = inputtxt1.value;
    var valor2 = inputtxt2.value;

    if (valor1 == valor2)
       return;
       
    else
       inputtxt1.value="";
       inputtxt2.value="";
       alert("contraseñas diferentes");
} 

