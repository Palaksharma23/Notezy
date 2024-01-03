const express = require('express');
const noteController = require('./../controllers/noteController');
const authController = require('./../controllers/authController');
const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(noteController.getAllNotes)
  .post(noteController.createNote);

router
  .route('/:id')
  .get(noteController.getNote)
  .put(noteController.updateNote)
  .delete(noteController.deleteNote);

module.exports = router;
