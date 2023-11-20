const express = require('express');
const router = express.Router();
const cortineroController = require('../controllers/cortineroController');

router.get('/', cortineroController.getAllCortineros);
router.post('/', cortineroController.createCortinero);
// router.put('/:id', cortineroController.updateCortinero);
// router.delete('/:id', cortineroController.deleteCortinero);
router.get('/:id', cortineroController.getCortineroById);

module.exports = router;