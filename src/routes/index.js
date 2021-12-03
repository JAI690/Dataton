const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    var fs=require('fs');
    var data = fs.readFileSync('./Data/SistemaS2.json', 'utf8');
    var words = JSON.parse(data);
    console.log(words); 
    res.send("Hola");
});

module.exports = router;