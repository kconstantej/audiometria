function imprimir() {
    document.getElementById('guardar').style.display = 'none';
    window.print();
    document.getElementById('nueva_consulta').style.display = 'inline';
    document.getElementById('nueva_paciente').style.display = 'inline';
}