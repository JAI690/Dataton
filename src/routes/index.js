const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    var fs=require('fs');
    var data = fs.readFileSync('./Data/SistemaS2.json', 'utf8');
    var dato = JSON.parse(data);
    res.render("../views/dashboard/datos.hbs", {dato});
});

module.exports = router;