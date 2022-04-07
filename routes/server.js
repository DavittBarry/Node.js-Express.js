// Ensin, luodaan Express:in.

var express = require('express');
var router = express.Router();

// Sitten sivu-polkuja

const etusivu = require('./etusivu.js')
const yhteystiedostot = require('./yhteystiedostot')
const tuotteet = require('./tuotteet')
const tuote = require('./tuote')
const eiloydy = require('./eiloydy')

// Luodaan reitit

router.get('/', etusivu)
router.get('/yhteystiedostot', yhteystiedostot)
router.get('/tuotteet', tuotteet)
router.get('/tuote', tuote)
router.get('/*', eiloydy)

// Sitten exporttaan.

module.exports = router;