const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    labels: {
      type: [String],
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
  },
  {
    timestamps: true,
  }
);

const Issue = mongoose.model('Issue', issueSchema);
console.log('model');
module.exports = Issue;
