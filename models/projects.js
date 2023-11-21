const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    project_name: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', projectSchema);
console.log('model');
module.exports = Project;
