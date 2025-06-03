// routes/personRoutes.js
const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.get('/', personController.getAllPersons);
router.get('/new', personController.showCreateForm);
router.post('/', personController.createPerson);
router.get('/:id/edit', personController.showEditForm);
router.put('/:id', personController.updatePerson);
router.get('/:id/delete', personController.showDeleteForm);
router.delete('/:id', personController.deletePerson);

module.exports = router;
