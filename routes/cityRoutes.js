const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');
    
router.get('/', cityController.index);
router.get('/:id/show', cityController.show);
router.get('/create', cityController.create);
router.post('/store', cityController.store);
router.get('/:id/edit', cityController.edit);
router.patch('/:id/update', cityController.update);
router.delete('/:id/delete', cityController.delete);
// router.get('/all', cityController.all)

module.exports = router;
