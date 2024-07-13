const express = require('express');
const router = express.Router();
const driversController = require('../controllers/driverControllers');

router.get('/', driversController.index);
router.get('/create', driversController.create);
router.post('/', driversController.store);
router.get('/:id/edit', driversController.edit);
router.post('/:id', driversController.update);
router.post('/:id/delete', driversController.delete);

module.exports = router;
