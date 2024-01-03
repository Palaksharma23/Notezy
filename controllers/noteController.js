const fs = require('fs');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const Note = require('./../models/noteModel');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

exports.getAllNotes = factory.getAll(Note);
exports.getNote = factory.getOne(Note, { path: 'reviews' });
exports.createNote = factory.createOne(Note);
exports.updateNote = factory.updateOne(Note);
exports.deleteNote = factory.deleteOne(Note);
exports.searchNote = catchAsync(async (req, res, next) => {
  let result = await Note.aggregate([
    {
      $search: {
        index: 'default',
        compound: {
          should: [
            {
              autocomplete: {
                path: 'title',
                query: `${req.query.q}`,
                fuzzy: { maxEdits: 1, prefixLength: 1, maxExpansions: 256 },
              },
            },
            {
              autocomplete: {
                path: 'description',
                query: `${req.query.q}`,
                fuzzy: { maxEdits: 1, prefixLength: 1, maxExpansions: 256 },
              },
            },
          ],
        },
      },
    },
  ]);
  res.send(result);
});
