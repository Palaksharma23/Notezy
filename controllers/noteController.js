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
