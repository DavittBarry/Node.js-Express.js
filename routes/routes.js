var express = require('express');
var router = express.Router();

const etusivu = require('./etusivu')
const yhteystiedostot = require('./yhteystiedostot')
const tuotteet = require('./tuotteet')
const tuote = require('./tuote')
const eiloydy = require('./eiloydy')

router.get('/', etusivu)
router.get('/yhteystiedostot', yhteystiedostot)
router.get('/tuotteet', tuotteet)
router.get('/tuote', tuote)
router.get('/*', eiloydy)

module.exports = router;