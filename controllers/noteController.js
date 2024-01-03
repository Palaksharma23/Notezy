const fs = require('fs');
const mongoose = require('mongoose');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const Note = require('./../models/noteModel');
const User = require('./../models/userModel');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

exports.getAllNotes = catchAsync(async (req, res, next) => {
  const filter = {
    $or: [{ user: req.user._id }, { sharedWith: req.user._id }],
  };

  factory.getAll(Note, filter)(req, res, next);
});

exports.getNote = catchAsync(async (req, res, next) => {
  const filter = {
    $or: [
      { user: req.user._id, _id: req.params.id },
      { sharedWith: req.user._id, _id: req.params.id },
    ],
  };

  factory.getOne(Note, filter)(req, res, next);
});

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
    {
      $match: {
        $or: [{ user: req.user._id }, { sharedWith: req.user._id }],
      },
    },
  ]);

  res.send(result);
});

exports.shareNote = catchAsync(async (req, res, next) => {
  const user = req.user;

  if (!user) {
    return next(
      new AppError('User not found. Please log in to share a note.', 401)
    );
  }

  const note = await Note.findById(req.params.id);

  if (!note) {
    return next(new AppError('Note not found.', 404));
  }

  if (!note.user.equals(user._id)) {
    return next(
      new AppError('You do not have permission to share this note.', 403)
    );
  }

  const { userIdToShareWith } = req.body;

  const userToShareWith = await User.findById(userIdToShareWith);

  if (!userToShareWith) {
    return next(new AppError('User to share with not found.', 404));
  }

  if (note.sharedWith.includes(userIdToShareWith)) {
    return next(new AppError('Note is already shared with this user.', 400));
  }

  note.sharedWith.push(userIdToShareWith);
  await note.save();

  res.status(200).json({
    status: 'success',
    data: {
      note,
    },
  });
});
