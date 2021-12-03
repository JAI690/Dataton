const express = require('express');

const router = express.Router();

const { convertir,recorrer } = require('../funciones/suma');

router.get('/', (req,res) => {
    var fs=require('fs');
    var data = fs.readFileSync('./Data/SistemaS2.json', 'utf8');
    var dato = JSON.parse(data);

    var data2 = fs.readFileSync('./Data/Sistema3Servidores.json', 'utf8');
    var dato2 = JSON.parse(data2);

    var data3 = fs.readFileSync('./Data/declaraciones.json', 'utf8');
    var dato3 = JSON.parse(data3);

    const datos = convertir(dato,'id');
    console.log(dato2);

    //console.log(datos);
    res.render("../views/dashboard/datos.hbs", {dato});
});

module.exports = router;