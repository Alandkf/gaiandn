const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');
    
router.get('/', cityController.index);
router.get('/create', cityController.create);
router.post('/', cityController.store);
router.get('/:id/edit', cityController.edit);
router.post('/:id', cityController.update);
router.post('/:id/delete', cityController.delete);

module.exports = router;
