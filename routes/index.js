var express = require('express');
var router = express.Router();
var DB = require ('../database/models')

/* GET home page. */
router.get('/', async (req, res) => {
  try {
      const clientes = await DB.cliente.findAll()
      res.send(clientes)
      
  } catch (error) {
      res.send(error)
  }
})
module.exports = router;
