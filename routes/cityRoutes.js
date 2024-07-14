const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');
    
router.get('/', cityController.index);
router.get('/:id/show', cityController.show);
router.get('/create', cityController.create);
router.post('/store', cityController.store);
router.get('/:id/edit', cityController.edit);
router.post('/:id/update', cityController.update);
// router.post('/:id/delete', cityController.delete);

module.exports = router;
