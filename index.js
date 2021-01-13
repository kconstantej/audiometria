const express = require('express');

const app = express();

const request = require('request');

const hbs = require('hbs');

const async = require('async');

const bodyParser = require('body-parser');

require('./hbs/helpers')


app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/parciales');

app.use(express.static(__dirname + '/public'));



var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());






const port =process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/inicio', function (req, res) {
    res.render('inicio');
});

app.get('/registro', function (req, res) {
    res.render('seleccion');
  });

  app.post('/datos', function (request, res) {
    var nombre_paciente = request.body.nombre_paciente;
    var apellido_paciente = request.body.apellido_paciente;
    var edad_paciente = request.body.edad_paciente;
    var ocupacion_paciente = request.body.ocupacion_paciente;
    var nombre_doctor = request.body.nombre_doctor;
    var apellido_doctor = request.body.apellido_doctor;
    var especialidad_doctor = request.body.especialidad_doctor;
    
    var datos={
        nombre_paciente : nombre_paciente,
        apellido_paciente : apellido_paciente,
        edad_paciente : edad_paciente,
        ocupacion_paciente : ocupacion_paciente,
        nombre_doctor : nombre_doctor,
        apellido_doctor : apellido_doctor,
        especialidad_doctor : especialidad_doctor
    }

    console.log(datos)
    res.render('seleccion');
  });

app.listen(port,()=>{
    console.log(`escuchando por el puerto ${port}`)
})

