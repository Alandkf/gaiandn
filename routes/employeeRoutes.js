const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/', employeeController.index);
router.get('/create', employeeController.create);
router.post('/', employeeController.store);
router.get('/:id/edit', employeeController.edit);
router.post('/:id', employeeController.update);
router.post('/:id/delete', employeeController.delete);

module.exports = router;
