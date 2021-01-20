const express = require('express');

const app = express();

const request = require('request');

const hbs = require('hbs');

const async = require('async');

const pdf = require('html-pdf');

const bodyParser = require('body-parser');





require('./hbs/helpers')


app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/parciales');

app.use(express.static(__dirname + '/public'));



var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




var datos={}
var nombre_paciente;
var apellido_paciente;
var edad_paciente;
var ocupacion_paciente;
var nombre_doctor;
var apellido_doctor;
var especialidad_doctor;
var cal_edad;
var edad;

var datosOidos = {};
var lado_oido;
var val_db;
var val_hz;
var odd;
var odi;
var otoscopia;
var recomendaciones;


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
    
    this.nombre_paciente = request.body.nombre_paciente;
    this.apellido_paciente = request.body.apellido_paciente;
    this.edad_paciente = request.body.edad_paciente;
    this.ocupacion_paciente = request.body.ocupacion_paciente;
    this.nombre_doctor = request.body.nombre_doctor;
    this.apellido_doctor = request.body.apellido_doctor;
    this.especialidad_doctor = request.body.especialidad_doctor;
    this.cal_edad = this.edad_paciente.split('-');

    this.nombre_paciente = this.nombre_paciente.toUpperCase();
    this.apellido_paciente = this.apellido_paciente.toUpperCase();
    this.ocupacion_paciente = this.ocupacion_paciente.toUpperCase();
    this.nombre_doctor = this.nombre_doctor.toUpperCase();
    this.apellido_doctor = this.apellido_doctor.toUpperCase();
    this.especialidad_doctor = this.especialidad_doctor.toUpperCase();;
    
    this.edad =calculate_age(this.cal_edad[1],this.cal_edad[2],this.cal_edad[0]);
    
    this.datos={
        nombre_paciente : this.nombre_paciente,
        apellido_paciente : this.apellido_paciente,
        edad_paciente : this.edad_paciente,
        ocupacion_paciente : this.ocupacion_paciente,
        nombre_doctor : this.nombre_doctor,
        apellido_doctor : this.apellido_doctor,
        especialidad_doctor : this.especialidad_doctor,
        edad : this.edad
    }
    
    res.render('escoger');
  });
app.get('/escoger', async function(req, res){
    
    res.render('escoger',this.datos);
});
app.post('/pdf', async function (req, res) {
    
    this.odd = req.body.odd;
    this.odi = req.body.odi;
    this.otoscopia = req.body.otoscopia;
    this.recomendaciones = req.body.recomendaciones;

    this.odd = this.odd.toUpperCase();
    this.odi = this.odi.toUpperCase();
    this.otoscopia = this.otoscopia.toUpperCase();
    this.recomendaciones = this.recomendaciones.toUpperCase();

    this.datos={
        nombre_paciente : this.nombre_paciente,
        apellido_paciente : this.apellido_paciente,
        edad_paciente : this.edad_paciente,
        ocupacion_paciente : this.ocupacion_paciente,
        nombre_doctor : this.nombre_doctor,
        apellido_doctor : this.apellido_doctor,
        especialidad_doctor : this.especialidad_doctor,
        edad : this.edad,
        otoscopia : this.otoscopia,
        odd : this.odd,
        odi : this.odi,
        recomendaciones : this.recomendaciones
    }
    
    res.render('pdf',this.datos)
});

app.get('/logo_audiometria', async function (req, res) {
   
    res.render('logo_audiometria',this.datos)
});


app.post('/oidos', function(req,res) {

    

    console.log(req.body.name)

});





app.listen(port,()=>{
    console.log(`escuchando por el puerto ${port}`)
});

function calculate_age(birth_month,birth_day,birth_year)
{
       today_date = new Date();
       today_year = today_date.getFullYear();
       today_month = today_date.getMonth();
       today_day = today_date.getDate();
       age = today_year - birth_year;

       if ( today_month < (birth_month - 1))
       {
           age--;
       }
       if (((birth_month - 1) == today_month) && (today_day < birth_day))
       {
           age--;
       }
       return age;
}