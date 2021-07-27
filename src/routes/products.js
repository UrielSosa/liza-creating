const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');

router.get('/', controller.index);
router.post('/', controller.store);
router.put('/:id', controller.update);
router.get('/:id', controller.show);

module.exports = router;