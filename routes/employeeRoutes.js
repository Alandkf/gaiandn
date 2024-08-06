const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/', employeeController.index);
router.get('/:id/show', employeeController.show);
router.get('/create', employeeController.create);
router.post('/', employeeController.store);
router.get('/:id/edit', employeeController.edit);
router.patch('/:id/update', employeeController.update);
router.delete('/:id/delete', employeeController.delete);
// router.get('/all', employeeController.all);
module.exports = router;
